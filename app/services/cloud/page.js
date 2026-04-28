'use client';
import React from 'react';
import Link from 'next/link';

export default function CloudArchitecturePage() {
  const cloudFeatures = [
    {
      title: "Secure Cloud Migration",
      desc: "Transitioning legacy federal workloads to secure, scalable cloud environments with zero downtime.",
      icon: "☁️"
    },
    {
      title: "Hybrid Infrastructure",
      desc: "Integrating on-premise security with cloud flexibility to support mission-critical operations.",
      icon: "🏢"
    },
    {
      title: "FedRAMP Alignment",
      desc: "Engineering architectures specifically designed to meet federal security and compliance standards.",
      icon: "🔐"
    }
  ];

  return (
    <div className="min-h-screen bg-secondary text-darktext pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb for Navigation Ease */}
        <div className="mb-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-primary">Services</Link>
          <span>/</span>
          <span className="text-primary">Cloud Architecture</span>
        </div>

        {/* Header Section */}
        <div className="mb-16 border-l-4 border-primary pl-6">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Cloud <span className="text-primary">Architecture</span>
          </h1>
          <p className="text-slate-400 max-w-2xl text-sm md:text-lg leading-relaxed uppercase tracking-widest font-bold">
            Delivering high-fidelity, natively generated cloud solutions designed for agencies that cannot afford to fail.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {cloudFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="bg-base/5 border border-white/10 p-8 rounded-2xl hover:border-primary/50 transition-all group"
            >
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-black uppercase tracking-widest mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-loose">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Technical Deep Dive */}
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-base/5 p-10 rounded-3xl border border-white/10">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-widest mb-6">Scalable Mission Readiness</h2>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Our architecture models utilize state-of-the-art native audio and visual cues to guide system 
              performance monitoring. We focus on multi-image-to-image style transfer for data visualization, 
              ensuring your command center has a real-time, high-fidelity view of the network.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Automated Threat Detection
              </li>
              <li className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Zero-Trust Access Management
              </li>
              <li className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                Elastic Load Governance
              </li>
            </ul>
          </div>
          <div className="h-64 bg-gradient-to-br from-primary/20 to-blue-600/10 rounded-2xl border border-white/10 flex items-center justify-center">
             <span className="text-slate-500 font-black uppercase tracking-widest text-[10px]">Architecture Visualization Data</span>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <Link 
            href="/#contact" 
            className="inline-block bg-primary px-12 py-4 rounded-lg font-black uppercase tracking-widest text-sm hover:bg-primary/80 transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)]"
          >
            Deploy Your Infrastructure
          </Link>
        </div>
      </div>
    </div>
  );
}