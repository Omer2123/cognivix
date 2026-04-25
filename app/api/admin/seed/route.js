import connectToDatabase from '@/lib/mongodb';
import Admin from '@/models/Admin';
import { hashPassword } from '@/lib/auth';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectToDatabase();

    const existingAdmin = await Admin.findOne({ username: 'admin' });
    if (existingAdmin) {
      return NextResponse.json({ message: 'Admin already exists' });
    }

    const newAdmin = await Admin.create({
      username: 'admin',
      passwordHash: hashPassword('admin123'),
    });

    return NextResponse.json({
      success: true,
      message: 'Admin created. Default password: admin123',
      username: newAdmin.username,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
