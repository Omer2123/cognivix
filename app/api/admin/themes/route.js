import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import ThemePreset from '@/models/ThemePreset';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await dbConnect();
    const presets = await ThemePreset.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: presets });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to fetch presets' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const data = await request.json();
    const preset = await ThemePreset.create(data);
    return NextResponse.json({ success: true, data: preset });
  } catch (error) {
    if (error.code === 11000) {
      return NextResponse.json({ success: false, error: 'Theme name must be unique' }, { status: 400 });
    }
    return NextResponse.json({ success: false, error: 'Failed to create preset' }, { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    await dbConnect();
    const { id } = await request.json();
    await ThemePreset.findByIdAndDelete(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Failed to delete preset' }, { status: 500 });
  }
}
