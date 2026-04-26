import connectToDatabase from '@/lib/mongodb';
import Agency from '@/models/Agency';
import { NextResponse } from 'next/server';

export async function GET() {
  const initialAgencies = [
    { name: "DHS", logo: "/logos/dhs.svg" },
    { name: "DoD", logo: "/logos/dod.svg" },
    { name: "DoJ", logo: "/logos/doj.svg" },
    { name: "GSA", logo: "/logos/gsa.svg" },
    { name: "NASA", logo: "/logos/nasa.svg" },
    { name: "DoE", logo: "/logos/doe.svg" },
    { name: "HHS", logo: "/logos/hhs.svg" },
  ];

  try {
    await connectToDatabase();
    
    for (const agency of initialAgencies) {
      await Agency.findOneAndUpdate(
        { name: agency.name },
        agency,
        { upsert: true, new: true }
      );
    }

    return NextResponse.json({ success: true, message: 'Agencies seeded successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
