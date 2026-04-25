import connectToDatabase from '@/lib/mongodb';
import Inquiry from '@/models/Inquiry';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectToDatabase();
    const data = await Inquiry.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch' }, { status: 500 });
  }
}
