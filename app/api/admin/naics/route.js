import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import connectToDatabase from '@/lib/mongodb';
import Naics from '@/models/Naics';
import { verifyToken } from '@/lib/auth';

async function checkAuth() {
  const cookieStore = await cookies();
  const token = cookieStore.get('admin_token')?.value;
  if (!token) return null;
  const decoded = verifyToken(token);
  if (!decoded || !decoded.username) return null;
  return decoded;
}

export async function GET() {
  try {
    const decoded = await checkAuth();
    if (!decoded) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    await connectToDatabase();
    const data = await Naics.find({}).sort({ code: 1 });
    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const decoded = await checkAuth();
    if (!decoded) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    await connectToDatabase();
    const body = await req.json();
    const { code, label } = body;
    
    if (!code) {
      return NextResponse.json({ success: false, error: 'NAICS code is required' }, { status: 400 });
    }

    const newItem = await Naics.create({ code, label });
    return NextResponse.json({ success: true, data: newItem });
  } catch (error) {
    if (error.code === 11000) {
      return NextResponse.json({ success: false, error: 'NAICS code already exists' }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const decoded = await checkAuth();
    if (!decoded) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    await connectToDatabase();
    const body = await req.json();
    const { id } = body;
    
    await Naics.findByIdAndDelete(id);
    return NextResponse.json({ success: true, message: 'NAICS code deleted' });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
