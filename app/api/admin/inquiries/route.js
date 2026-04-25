import connectToDatabase from '@/lib/mongodb';
import Inquiry from '@/models/Inquiry';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectToDatabase();
    // Fetch all queries, newest first
    const queries = await Inquiry.find({}).sort({ createdAt: -1 });
    return NextResponse.json(queries);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 });
  }
}