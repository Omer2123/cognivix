'use client';
import React from 'react';
import Link from 'next/link';

export default function CybersecurityPage() {
  const securityServices = [
    {
      title: "Ethical Hacking",
      desc: "Comprehensive penetration testing and vulnerability assessments to identify weaknesses before adversaries do.",
      icon: "🕵️‍♂️"
    },
    {
      title: "Network Defense",
      desc: "Implementing multi-layered security protocols and continuous monitoring to protect critical federal infrastructure.",
      icon: "🛡️"
    },
    {
      title: "Incident Response",
      desc: "Rapid deployment strategies to contain breaches and restore mission-critical data integrity.",
      icon: "🚨"
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
          <span className="text-red-600">Cybersecurity</span>
        </div>

        {/* Header Section */}
        <div className="mb-16 border-l-4 border-red-600 pl-6">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            Cyber<span className="text-red-600">security</span>
          </h1>
          <p className="text-slate-400 max-w-2xl text-sm md:text-lg leading-relaxed uppercase tracking-widest font-bold">
            Defending the technical backbone of federal agencies through offensive security and proactive hardening.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {securityServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-red-600/50 transition-all group"
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

        {/* Security Methodology */}
        <div className="bg-gradient-to-br from-[#12141a] to-[#0a0c10] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-10 lg:p-16">
              <h2 className="text-2xl font-black uppercase tracking-widest mb-6">Offensive Resilience</h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                Our approach integrates specialized tools for identifying **OWASP Top 10** vulnerabilities 
                and advanced network scanning techniques. We don't just wait for an attack; 
                we engineer defenses based on real-world adversary behavior.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-600/20 flex items-center justify-center text-red-600 font-bold">01</div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest mb-1">Vulnerability Research</h4>
                    <p className="text-[10px] text-slate-500 uppercase font-bold">Full-stack exploit analysis</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-600/20 flex items-center justify-center text-red-600 font-bold">02</div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest mb-1">Threat Modeling</h4>
                    <p className="text-[10px] text-slate-500 uppercase font-bold">Strategic risk assessment</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative bg-red-600/5 flex items-center justify-center p-12 border-l border-white/5">
               <div className="text-center">
                  <div className="inline-block p-4 rounded-full bg-red-600/10 mb-4">
                    <div className="w-16 h-16 border-2 border-red-600 border-dashed rounded-full animate-spin-slow flex items-center justify-center">
                      <span className="text-red-600 text-2xl font-black underline">CYS</span>
                    </div>
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-red-600">Tactical Security Ops</p>
               </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 flex flex-col items-center">
          <Link 
            href="/#contact" 
            className="group relative inline-flex items-center gap-4 bg-red-600 px-12 py-4 rounded-lg font-black uppercase tracking-widest text-sm hover:bg-red-700 transition-all shadow-[0_0_30px_rgba(220,38,38,0.2)]"
          >
            Harden Your Systems
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <p className="mt-6 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
            Cleared Personnel • Secure Operations • 24/7 Monitoring
          </p>
        </div>
      </div>
    </div>
  );
}