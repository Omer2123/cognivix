import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Inquiry from '@/models/Inquiry';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    await dbConnect();
    const body = await req.json();
    const { name, email, message } = body;

    // 1. Save to Database
    const inquiry = await Inquiry.create(body);

    // 2. Setup Email Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 3. Send Auto-Reply to the Client
    await transporter.sendMail({
      from: '"Cognivix IT Solutions Mission Control" <' + process.env.EMAIL_USER + '>',
      to: email,
      subject: 'Mission Received: Cognivix IT Solutions Inquiry',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; border-top: 8px solid #dc2626; padding: 40px; background-color: #f9fafb;">
          <h1 style="text-transform: uppercase; letter-spacing: -1px; color: #111827;">Inquiry Secured</h1>
          <p style="color: #4b5563; font-size: 16px; line-height: 1.6;">
            Hello ${name},<br><br>
            Your technical inquiry has been successfully transmitted to our federal capture team. We have logged your request and assigned a specialist to review your requirements.
          </p>
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #dc2626; margin: 20px 0;">
            <strong style="display: block; font-size: 12px; text-transform: uppercase; color: #9ca3af; margin-bottom: 5px;">Your Message Intel:</strong>
            <i style="color: #374151;">"${message}"</i>
          </div>
          <p style="color: #4b5563; font-size: 14px;">
            A response will be initiated within 24 business hours.
          </p>
          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          <p style="font-size: 10px; font-weight: bold; text-transform: uppercase; color: #9ca3af;">
            Cognivix IT Solutions HQ // Est. 2026 // Federal Growth & Strategy
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data: inquiry }, { status: 201 });
  } catch (error) {
    console.error("Submission/Auto-Reply Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}