import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { verifyToken } from '@/lib/auth';

export async function POST(req) {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  if (!token) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

  const decoded = verifyToken(token);
  if (!decoded || !decoded.username) return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const filename = searchParams.get('filename');

  const blob = await put(filename, req.body, { access: 'public' });
  return NextResponse.json({ success: true, url: blob.url });
}
