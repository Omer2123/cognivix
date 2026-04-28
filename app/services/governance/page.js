'use client';
import React from 'react';
import Link from 'next/link';

export default function GovernancePage() {
  const governancepillars = [
    {
      title: "Policy & Compliance",
      desc: "Establishing standardized frameworks that align with NIST, CMMC, and FedRAMP requirements.",
      icon: "⚖️"
    },
    {
      title: "Risk Management",
      desc: "Continuous monitoring and proactive threat assessment to ensure mission continuity.",
      icon: "🛡️"
    },
    {
      title: "Resource Optimization",
      desc: "Strategic allocation of IT assets to maximize efficiency and reduce federal spend.",
      icon: "📊"
    }
  ];

  return (
    <div className="min-h-screen bg-secondary text-darktext pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 border-l-4 border-primary pl-6">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Technical <span className="text-primary">Governance</span>
          </h1>
          <p className="text-slate-400 max-w-2xl text-sm md:text-lg leading-relaxed uppercase tracking-widest font-bold">
            Engineering national-scale resilience through specialized digital transformation and federal-grade oversight.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {governancepillars.map((pillar, index) => (
            <div key={index} className="bg-base/5 border border-white/10 p-8 rounded-2xl hover:border-primary/50 transition-all group">
              <div className="text-4xl mb-6">{pillar.icon}</div>
              <h3 className="text-xl font-black uppercase tracking-widest mb-4 group-hover:text-primary transition-colors">
                {pillar.title}
              </h3>
              <p className="text-slate-400 text-sm leading-loose">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-transparent border border-white/10 p-10 rounded-3xl">
          <h2 className="text-2xl font-black uppercase tracking-widest mb-6">Strategic Oversight</h2>
          <p className="text-slate-300 mb-8 leading-relaxed">
            Our governance model ensures that every technological deployment is backed by a rigorous 
            framework of accountability. We bridge the gap between complex IT infrastructure and 
            regulatory necessity.
          </p>
          <Link href="/#contact" className="inline-block bg-primary px-8 py-3 rounded-lg font-black uppercase tracking-tighter text-sm hover:bg-primary/80 transition-all">
            Request Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}