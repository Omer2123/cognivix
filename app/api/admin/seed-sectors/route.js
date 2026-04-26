import connectToDatabase from '@/lib/mongodb';
import Sector from '@/models/Sector';
import { NextResponse } from 'next/server';

export async function GET() {
  const initialSectors = [
    "Urban Modernization",
    "Strategic Energy Grid",
    "Federal Logistics Hubs",
    "Cyber Governance",
    "National Infrastructure",
    "Defense Systems",
    "Technical Writing",
    "GIS & Remote Sensing",
    "Business Development Intern",
    "Proposal Writing Intern",
    "Other Services",
  ];

  try {
    await connectToDatabase();
    
    for (const name of initialSectors) {
      await Sector.findOneAndUpdate(
        { name },
        { name },
        { upsert: true, new: true }
      );
    }

    return NextResponse.json({ success: true, message: 'Sectors seeded successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
