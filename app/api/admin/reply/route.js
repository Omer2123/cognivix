import { NextResponse } from 'next/server';

export async function POST() {
  return NextResponse.json({ success: false, error: 'Email reply has been removed.' }, { status: 410 });
}
