'use client';
import { useState, useEffect } from 'react';

export default function ContractorsCorner() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const res = await fetch('/api/resources');
        const data = await res.json();
        if (data.success) {
          setResources(data.data);
        }
      } catch (err) {
        console.error('Failed to fetch resources:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchResources();
  }, []);

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
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block w-12 h-12 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-10">
            {resources.map((res, idx) => (
              <div key={res._id || idx} className="bg-[#0f1218] p-10 rounded-[2rem] border border-white/5 hover:border-red-600/50 transition-all group">
                <span className="text-red-600 text-xs font-black uppercase tracking-widest">{res.tagline}</span>
                <h2 className="text-3xl font-black text-white uppercase mt-2 mb-4 group-hover:text-red-500 transition-colors">{res.title}</h2>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">{res.desc}</p>
                
                {res.bullets && (
                  <ul className="grid grid-cols-1 gap-3 mb-10">
                    {res.bullets.split('\n').map((b, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-300 text-xs font-bold uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span> {b}
                      </li>
                    ))}
                  </ul>
                )}

                <button className="w-full py-4 bg-white/5 hover:bg-red-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl transition-all border border-white/10 group-hover:border-transparent group-hover:shadow-[0_10px_30px_-5px_rgba(220,38,38,0.4)]">
                  {res.cta || 'Learn More'}
                </button>
              </div>
            ))}
          </div>
        )}

        {resources.length === 0 && !loading && (
          <div className="text-center py-20">
            <p className="text-slate-500 text-xs font-black uppercase tracking-widest">No resources currently available.</p>
          </div>
        )}
      </div>
    </main>
  );
}