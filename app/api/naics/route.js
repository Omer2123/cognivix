import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Naics from '@/models/Naics';

export async function GET() {
  try {
    await connectToDatabase();
    const data = await Naics.find({}).sort({ code: 1 });
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
