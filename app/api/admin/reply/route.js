import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { to, subject, text } = await req.json();

    // Setup your SMTP transporter (Gmail/Outlook)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS, 
      },
    });

    await transporter.sendMail({
      from: '"Cognivix IT Solutions Mission Control" <your-email@gmail.com>',
      to,
      subject,
      text: `${text}\n\n---\nOfficial Federal Growth Strategy Team\nCognivix IT Solutions HQ`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email Transmission Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}