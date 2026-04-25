'use client';
import Link from 'next/link';

const resources = [
  {
    title: "Getting Started",
    tagline: "SAM.gov, UEI, & CAGE Code Basics",
    desc: "We help businesses understand registration requirements and positioning for federal opportunities.",
    bullets: ["SAM.gov Registration", "NAICS Code Selection", "Small Business Certifications (8a, SDVOSB)"],
    cta: "Talk to an Advisor"
  },
  {
    title: "Compliance & Certifications",
    tagline: "CMMC & NIST Readiness",
    desc: "Compliance is non-negotiable. Our experts guide you through mandatory federal frameworks.",
    bullets: ["CMMC Level 1 & 2", "NIST SP 800-171", "ISO 9001 / 27001"],
    cta: "Check Readiness"
  },
  {
    title: "Proposal & Capture",
    tagline: "Win Strategy & Technical Writing",
    desc: "Winning requires strategy and compelling storytelling. We support you from RFP review to submission.",
    bullets: ["Compliance Matrix Development", "Technical Volume Writing", "Pricing Strategy Support"],
    cta: "Request Support"
  },
  {
    title: "Contract Vehicles",
    tagline: "GSA MAS & GWAC Leverage",
    desc: "Understanding vehicles like Alliant and CIO-SP improves win probability and long-term growth.",
    bullets: ["GSA MAS (Schedules)", "8(a) STARS III", "Subcontracting Opportunities"],
    cta: "Explore Vehicles"
  }
];

export default function ContractorsCorner() {
  return (
    <main className="bg-[#0a0c10] min-h-screen pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hub Header */}
        <div className="border-l-4 border-red-600 pl-8 mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
            Contractor's <span className="text-red-600">Corner</span>
          </h1>
          <p className="text-slate-400 font-bold uppercase tracking-[0.2em] mt-4 max-w-2xl">
            Resources, guidance, and tools to help government contractors win, comply, and scale.
          </p>
        </div>

        {/* Resource Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {resources.map((res, idx) => (
            <div key={idx} className="bg-[#0f1218] p-10 rounded-[2rem] border border-white/5 hover:border-red-600/50 transition-all group">
              <span className="text-red-600 text-xs font-black uppercase tracking-widest">{res.tagline}</span>
              <h2 className="text-3xl font-black text-white uppercase mt-2 mb-4 group-hover:text-red-600 transition">{res.title}</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">{res.desc}</p>
              
              <ul className="grid grid-cols-1 gap-3 mb-10">
                {res.bullets.map((b, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 text-xs font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span> {b}
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 bg-white/5 hover:bg-red-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl transition-all border border-white/10">
                {res.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}