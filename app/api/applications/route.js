import connectToDatabase from '@/lib/mongodb';
import Application from '@/models/Application';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    await connectToDatabase();
    const body = await req.json();

    const { jobId, jobTitle, name, email, cvUrl } = body;

    if (!jobId || !jobTitle || !name || !email || !cvUrl) {
      return NextResponse.json({ success: false, error: 'All required fields must be filled' }, { status: 400 });
    }

    const newApplication = await Application.create(body);
    return NextResponse.json({ success: true, data: newApplication });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
