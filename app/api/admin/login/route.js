import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req) {
  try {
    const body = await req.json();
    
    // Check if the input is "admin123" 
    // This matches the single input field in your image_270abc.png
    if (body.password === 'admin123' || body.adminKey === 'admin123') {
      const response = NextResponse.json({ success: true, message: 'Authenticated' });
      
      // Set the secure cookie so middleware lets you into /admin/dashboard
      response.cookies.set('admin_token', 'authenticated_session', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/',
      });

      return response;
    }

    return NextResponse.json({ success: false, message: 'Invalid Admin Key' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Invalid Request' }, { status: 400 });
  }
}