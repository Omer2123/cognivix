import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import connectToDatabase from '@/lib/mongodb';
import Admin from '@/models/Admin';
import { verifyPassword } from '@/lib/auth';

export async function POST(req) {
  try {
    const { password, adminKey } = await req.json();
    const input = password || adminKey;

    await connectToDatabase();
    const admin = await Admin.findOne({ username: 'admin' });

    if (!admin || !verifyPassword(input, admin.passwordHash)) {
      return NextResponse.json({ success: false, message: 'Invalid Admin Key' }, { status: 401 });
    }

    const response = NextResponse.json({ success: true, message: 'Authenticated' });
    response.cookies.set('admin_token', 'authenticated_session', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24,
      path: '/',
    });

    return response;
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Invalid Request' }, { status: 400 });
  }
}
