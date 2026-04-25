import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import connectToDatabase from '@/lib/mongodb';
import Admin from '@/models/Admin';
import { verifyPassword, signToken } from '@/lib/auth';


export async function POST(req) {
  try {
    const { username, password } = await req.json();

    await connectToDatabase();
    const admin = await Admin.findOne({ username });

    if (!admin || !verifyPassword(password, admin.passwordHash)) {
      return NextResponse.json({ success: false, message: 'Invalid Credentials' }, { status: 401 });
    }

    const token = signToken({ username: admin.username });
    const response = NextResponse.json({ success: true, message: 'Authenticated' });
    response.cookies.set('admin_token', token, {
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

