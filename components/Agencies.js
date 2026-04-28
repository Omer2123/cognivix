'use client';
import { useState, useEffect } from 'react';

export default function Agencies() {
  const [agencies, setAgencies] = useState([]);

  useEffect(() => {
    const fetchAgencies = async () => {
      try {
        const res = await fetch('/api/agencies');
        const data = await res.json();
        if (data.success) {
          setAgencies(data.data);
        }
      } catch (err) {
        console.error('Failed to fetch agencies:', err);
      }
    };
    fetchAgencies();
  }, []);

  return (
    <div className="bg-base py-12 border-b border-slate-200 overflow-hidden">
      <div className="relative group">
        <div className="flex items-center gap-20 animate-marquee whitespace-nowrap w-max px-10">
          {[...agencies, ...agencies, ...agencies].map((agency, idx) => (
            <a 
              key={`${agency.name}-${idx}`} 
              href="#capabilities" 
              className="group/item flex flex-col items-center gap-3 transition-all duration-300 hover:scale-110"
              title={agency.name}
            >
              <div className="relative h-12 md:h-16 w-auto flex items-center justify-center">
                <img 
                  src={agency.logo} 
                  alt={agency.name} 
                  className="h-full w-auto object-contain transition-all duration-500"
                />
              </div>
              <span className="text-[10px] font-black text-basetext/70 uppercase tracking-widest group-hover/item:text-primary transition-colors">
                {agency.name}
              </span>
            </a>
          ))}
        </div>
        
        {/* Subtle Fade Masks for premium look */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-base to-transparent pointer-events-none z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-base to-transparent pointer-events-none z-10"></div>
      </div>
    </div>
  );
}