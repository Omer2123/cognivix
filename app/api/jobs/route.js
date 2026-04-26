import connectToDatabase from '@/lib/mongodb';
import Job from '@/models/Job';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectToDatabase();
    const data = await Job.find({ active: true }).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch jobs' }, { status: 500 });
  }
}
