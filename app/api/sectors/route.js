import connectToDatabase from '@/lib/mongodb';
import Sector from '@/models/Sector';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectToDatabase();
    const data = await Sector.find({}).sort({ name: 1 });
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch sectors' }, { status: 500 });
  }
}
