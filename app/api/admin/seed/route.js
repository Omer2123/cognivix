// app/api/admin/seed/route.js
import connectToDatabase from '@/lib/mongodb';
import Admin from '@/models/Admin';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectToDatabase();

    // 1. Check if an admin already exists to prevent duplicates
    const existingAdmin = await Admin.findOne({ username: 'admin' });
    if (existingAdmin) {
      return NextResponse.json({ message: "Admin already exists" });
    }

    // 2. Create the admin credentials
    const newAdmin = await Admin.create({
      username: 'admin',
      passwordHash: 'admin123' // Use this to log in
    });

    return NextResponse.json({ 
      success: true, 
      message: "Admin created successfully",
      username: newAdmin.username 
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}