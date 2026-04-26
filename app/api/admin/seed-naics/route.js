import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Naics from '@/models/Naics';

const initialNaics = [
  { code: "541519", label: "Other Computer Related Services" }
];

export async function GET() {
  try {
    await connectToDatabase();
    
    // Check if already seeded
    const count = await Naics.countDocuments();
    if (count === 0) {
      await Naics.insertMany(initialNaics);
      return NextResponse.json({ success: true, message: 'NAICS seeded successfully' });
    }
    
    return NextResponse.json({ success: true, message: 'NAICS already seeded' });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
