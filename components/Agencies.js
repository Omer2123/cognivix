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
    <div className="bg-white py-12 border-b border-slate-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {agencies.map((agency) => (
            <a 
              key={agency.name} 
              href="#capabilities" 
              className="group flex flex-col items-center gap-3 transition-all duration-300 hover:scale-110"
              title={agency.name}
            >
              <div className="relative h-12 md:h-16 w-auto flex items-center justify-center">
                <img 
                  src={agency.logo} 
                  alt={agency.name} 
                  className="h-full w-auto object-contain transition-all duration-500"
                />
              </div>
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest group-hover:text-red-600 transition-colors">
                {agency.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}