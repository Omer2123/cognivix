'use client';
import React from 'react';
import Link from 'next/link';

export default function GISRemoteSensingPage() {
  const gisCapabilities = [
    {
      title: "Geospatial Intelligence",
      desc: "Advanced mapping and spatial analysis to support federal decision-making and tactical site planning.",
      icon: "🛰️"
    },
    {
      title: "Satellite Imagery Analysis",
      desc: "Utilizing remote sensing data to monitor environmental changes and infrastructure integrity in real-time.",
      icon: "🌍"
    },
    {
      title: "Terrain Modeling",
      desc: "Creating high-resolution 3D digital elevation models (DEM) for complex geographical assessments.",
      icon: "🏔️"
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
          <span className="text-red-600 uppercase">GIS & Remote Sensing</span>
        </div>

        {/* Header Section */}
        <div className="mb-16 border-l-4 border-red-600 pl-6">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            GIS & Remote <span className="text-red-600">Sensing</span>
          </h1>
          <p className="text-slate-400 max-w-2xl text-sm md:text-lg leading-relaxed uppercase tracking-widest font-bold">
            Delivering geospatial precision through advanced spectral analysis and multi-source data integration.
          </p>
        </div>

        {/* Visual Data Representation */}
        <div className="mb-20 rounded-3xl overflow-hidden border border-white/10 bg-white/5 relative h-[300px] md:h-[500px] flex items-center justify-center">
           {/* Replace with your specific geospatial visualization image */}
           <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1580137197581-df2bb346a786?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
           <div className="relative z-10 text-center px-6">
              <span className="text-red-600 font-black uppercase tracking-[0.5em] text-[10px] block mb-4">Tactical Visualization Matrix</span>
              <h2 className="text-2xl md:text-4xl font-black uppercase tracking-tight">Spectral Data Acquisition</h2>
           </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {gisCapabilities.map((cap, index) => (
            <div 
              key={index} 
              className="bg-[#12141a] border border-white/10 p-8 rounded-2xl hover:border-red-600/50 transition-all group"
            >
              <div className="text-4xl mb-6">{cap.icon}</div>
              <h3 className="text-xl font-black uppercase tracking-widest mb-4 group-hover:text-red-600 transition-colors">
                {cap.title}
              </h3>
              <p className="text-slate-400 text-sm leading-loose">
                {cap.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Analysis Deep Dive */}
        <div className="bg-gradient-to-r from-[#1a1d24] to-transparent border border-white/10 p-10 rounded-3xl">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-black uppercase tracking-widest mb-6">Actionable Spatial Data</h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Our GIS division bridges the gap between raw satellite telemetry and mission-ready intelligence. 
              We utilize proprietary spectral analysis algorithms to identify terrain anomalies and infrastructure shifts, 
              providing the technical backbone for disaster response and federal land management.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 rounded-full border border-red-600/30 bg-red-600/5 text-[10px] font-black uppercase tracking-widest">LiDAR Integration</div>
              <div className="px-4 py-2 rounded-full border border-red-600/30 bg-red-600/5 text-[10px] font-black uppercase tracking-widest">Multi-Spectral Mapping</div>
              <div className="px-4 py-2 rounded-full border border-red-600/30 bg-red-600/5 text-[10px] font-black uppercase tracking-widest">Geodetic Surveys</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <Link 
            href="/#contact" 
            className="inline-block bg-red-600 px-12 py-4 rounded-lg font-black uppercase tracking-widest text-sm hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)]"
          >
            Request Geospatial Audit
          </Link>
        </div>
      </div>
    </div>
  );
}