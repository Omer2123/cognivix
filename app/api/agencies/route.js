import connectToDatabase from '@/lib/mongodb';
import Agency from '@/models/Agency';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectToDatabase();
    const data = await Agency.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch agencies' }, { status: 500 });
  }
}
