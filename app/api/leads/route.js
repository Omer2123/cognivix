import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Inquiry from '@/models/Inquiry';

export async function POST(req) {
  try {
    await connectToDatabase();
    const body = await req.json();
    const { name, email, phone, company, opportunityId, opportunityTitle, opportunityUrl } = body;

    if (!name || !email) {
      return NextResponse.json({ success: false, error: 'Name and Email are required' }, { status: 400 });
    }

    const message = `
Company: ${company || 'N/A'}
Phone: ${phone || 'N/A'}
Opportunity: ${opportunityTitle} (${opportunityId})
URL: ${opportunityUrl}
    `.trim();

    const newInquiry = await Inquiry.create({
      name,
      email,
      serviceCategory: 'Eligibility Check',
      message
    });

    return NextResponse.json({ success: true, data: newInquiry });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
