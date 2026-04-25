'use client';
import React from 'react';
import Link from 'next/link';

export default function ProposalWritingPage() {
  const proposalServices = [
    {
      title: "Technical Writing",
      desc: "Transforming complex engineering concepts into clear, compliant, and compelling federal narratives.",
      icon: "✍️"
    },
    {
      title: "Compliance Matrices",
      desc: "Rigorous cross-referencing of RFP requirements to ensure 100% responsiveness to federal solicitations.",
      icon: "📋"
    },
    {
      title: "Capture Management",
      desc: "Strategic positioning and win-theme development to increase P(Win) for mission-critical contracts.",
      icon: "🎯"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0c10] text-white pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
          <Link href="/" className="hover:text-red-600">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-red-600">Services</Link>
          <span>/</span>
          <span className="text-red-600 uppercase">Proposal Engineering</span>
        </div>

        {/* Header Section */}
        <div className="mb-16 border-l-4 border-red-600 pl-6">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Proposal <span className="text-red-600">Engineering</span>
          </h1>
          <p className="text-slate-400 max-w-2xl text-sm md:text-lg leading-relaxed uppercase tracking-widest font-bold">
            Bridging the gap between technical excellence and federal procurement success.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {proposalServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#12141a] border border-white/10 p-8 rounded-2xl hover:border-red-600/50 transition-all group"
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="text-xl font-black uppercase tracking-widest mb-4 group-hover:text-red-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 text-sm leading-loose">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Strategic Capture Section */}
        <div className="bg-gradient-to-br from-[#1a1d24] to-[#0a0c10] border border-white/10 rounded-3xl p-10 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase tracking-widest mb-6">Winning Federal Contracts</h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Our approach to proposal development is engineered, not just written. We analyze RFP Section L and M 
                to build a technical volume that stands up to the most rigorous government evaluation boards.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-red-600">
                  <span className="w-8 h-[1px] bg-red-600"></span> Executive Summaries
                </div>
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-red-600">
                  <span className="w-8 h-[1px] bg-red-600"></span> Technical Volume Development
                </div>
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-red-600">
                  <span className="w-8 h-[1px] bg-red-600"></span> Past Performance Citations
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 aspect-video rounded-2xl flex items-center justify-center p-8 text-center">
              <p className="text-slate-600 font-bold uppercase tracking-widest text-xs">Capture Analytics Visualization</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <Link 
            href="/#contact" 
            className="inline-block bg-red-600 px-12 py-4 rounded-lg font-black uppercase tracking-widest text-sm hover:bg-red-700 transition-all"
          >
            Start Your Capture Phase
          </Link>
        </div>
      </div>
    </div>
  );
}