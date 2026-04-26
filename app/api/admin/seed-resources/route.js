import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Resource from '@/models/Resource';

const initialResources = [
  {
    title: "Getting Started",
    tagline: "SAM.gov, UEI, & CAGE Code Basics",
    desc: "We help businesses understand registration requirements and positioning for federal opportunities.",
    bullets: "SAM.gov Registration\nNAICS Code Selection\nSmall Business Certifications (8a, SDVOSB)",
    cta: "Talk to an Advisor",
    link: "/#contact"
  },
  {
    title: "Compliance & Certifications",
    tagline: "CMMC & NIST Readiness",
    desc: "Compliance is non-negotiable. Our experts guide you through mandatory federal frameworks.",
    bullets: "CMMC Level 1 & 2\nNIST SP 800-171\nISO 9001 / 27001",
    cta: "Check Readiness",
    link: "/#contact"
  },
  {
    title: "Proposal & Capture",
    tagline: "Win Strategy & Technical Writing",
    desc: "Winning requires strategy and compelling storytelling. We support you from RFP review to submission.",
    bullets: "Compliance Matrix Development\nTechnical Volume Writing\nPricing Strategy Support",
    cta: "Request Support",
    link: "/#contact"
  },
  {
    title: "Contract Vehicles",
    tagline: "GSA MAS & GWAC Leverage",
    desc: "Understanding vehicles like Alliant and CIO-SP improves win probability and long-term growth.",
    bullets: "GSA MAS (Schedules)\n8(a) STARS III\nSubcontracting Opportunities",
    cta: "Explore Vehicles",
    link: "/#contact"
  }
];

export async function GET() {
  try {
    await connectToDatabase();
    
    // Clear existing to avoid duplicates if re-run
    await Resource.deleteMany({});
    
    await Resource.insertMany(initialResources);
    
    return NextResponse.json({ success: true, message: 'Resources seeded successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
