import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Admin from '@/models/Admin';

export async function POST(req) {
  try {
    await connectToDatabase();
    const { password } = await req.json();

    // Since your current login logic uses a 'passwordHash' field:
    await Admin.findOneAndUpdate(
      { username: 'admin' }, 
      { passwordHash: password }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}