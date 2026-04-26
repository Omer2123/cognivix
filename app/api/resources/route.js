import connectToDatabase from '@/lib/mongodb';
import Resource from '@/models/Resource';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectToDatabase();
    const data = await Resource.find({}).sort({ createdAt: 1 });
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch resources' }, { status: 500 });
  }
}
