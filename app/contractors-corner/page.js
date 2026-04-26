'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ContractorsCorner() {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [opportunities, setOpportunities] = useState([]);
  const [oppLoading, setOppLoading] = useState(true);
  const [naicsCodes, setNaicsCodes] = useState([]);
  const [activeNaics, setActiveNaics] = useState('541519');

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

  useEffect(() => {
    const fetchNaics = async () => {
      try {
        const res = await fetch('/api/naics');
        const data = await res.json();
        if (data.success && data.data.length > 0) {
          setNaicsCodes(data.data);
          setActiveNaics(data.data[0].code);
        }
      } catch (err) {
        console.error('Failed to fetch NAICS codes:', err);
      }
    };
    fetchNaics();
  }, []);

  useEffect(() => {
    if (!activeNaics) return;

    const fetchOpportunities = async () => {
      const CACHE_KEY = `sam_opportunities_${activeNaics}`;
      const CACHE_TIME_KEY = `sam_opportunities_timestamp_${activeNaics}`;
      const ONE_HOUR = 60 * 60 * 1000;

      setOppLoading(true);
      try {
        const cachedData = localStorage.getItem(CACHE_KEY);
        const cachedTimestamp = localStorage.getItem(CACHE_TIME_KEY);
        const now = Date.now();

        if (cachedData && cachedTimestamp && (now - cachedTimestamp < ONE_HOUR)) {
          setOpportunities(JSON.parse(cachedData));
          setOppLoading(false);
          return;
        }

        const res = await fetch(`https://sam.gov/api/prod/sgs/v1/search/?random=${now}&index=ac&page=0&sort=-modifiedDate&size=25&mode=search&responseType=json&domain=ac&q=${activeNaics}&qMode=ALL`);
        const data = await res.json();
        if (data && data._embedded && data._embedded.results) {
          setOpportunities(data._embedded.results);
          localStorage.setItem(CACHE_KEY, JSON.stringify(data._embedded.results));
          localStorage.setItem(CACHE_TIME_KEY, now.toString());
        } else {
          setOpportunities([]);
        }
      } catch (err) {
        console.error('Failed to fetch opportunities:', err);
        setOpportunities([]);
      } finally {
        setOppLoading(false);
      }
    };

    fetchOpportunities();
  }, [activeNaics]);

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

        {/* SAM.gov Opportunities Table */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight">
                Live <span className="text-red-600">Opportunities</span>
              </h2>
              <div className="flex items-center gap-3 mt-2">
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Real-time data from SAM.gov</p>
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-start md:justify-end gap-2 max-w-full md:max-w-3xl">
              {naicsCodes.map((n) => (
                <button
                  key={n._id}
                  onClick={() => setActiveNaics(n.code)}
                  className={`px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all border ${activeNaics === n.code
                      ? 'bg-red-600 border-red-600 text-white shadow-[0_10px_20px_-5px_rgba(220,38,38,0.4)]'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:border-red-600/50 hover:text-white'
                    }`}
                >
                  {n.label || n.code}
                </button>
              ))}
            </div>
          </div>

          {oppLoading ? (
            <div className="bg-[#0f1218] border border-white/5 rounded-[2rem] p-20 flex justify-center items-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-10 h-10 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">Syncing with SAM.gov...</span>
              </div>
            </div>
          ) : (
            <div className="bg-[#0f1218] border border-white/5 rounded-[2rem] overflow-hidden shadow-2xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/5 bg-white/[0.02]">
                      <th className="px-8 py-6 text-slate-400 text-[10px] font-black uppercase tracking-widest">Notice ID / Title</th>
                      <th className="px-8 py-6 text-slate-400 text-[10px] font-black uppercase tracking-widest">Type</th>
                      <th className="px-8 py-6 text-slate-400 text-[10px] font-black uppercase tracking-widest">Department / Agency</th>
                      <th className="px-8 py-6 text-slate-400 text-[10px] font-black uppercase tracking-widest">Modified Date</th>
                      <th className="px-8 py-6 text-slate-400 text-[10px] font-black uppercase tracking-widest text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {opportunities.map((opp) => (
                      <tr key={opp._id} className="hover:bg-white/[0.02] transition-colors group">
                        <td className="px-8 py-6">
                          <div className="flex flex-col gap-1">
                            <span className="text-red-600 text-[10px] font-black uppercase tracking-widest">{opp.solicitationNumber || 'N/A'}</span>
                            <span className="text-white text-sm font-bold line-clamp-1 group-hover:text-red-500 transition-colors">{opp.title}</span>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-slate-300 text-[9px] font-black uppercase tracking-widest">
                            {opp.type?.value || 'Unknown'}
                          </span>
                        </td>
                        <td className="px-8 py-6">
                          <div className="flex flex-col">
                            <span className="text-slate-300 text-[11px] font-bold uppercase">{opp.organizationHierarchy?.[0]?.name || 'N/A'}</span>
                            <span className="text-slate-500 text-[9px] font-medium uppercase tracking-tight line-clamp-1">{opp.organizationHierarchy?.[1]?.name}</span>
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <span className="text-slate-400 text-[11px] font-mono">
                            {new Date(opp.modifiedDate).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                        </td>
                        <td className="px-8 py-6 text-right">
                          <Link 
                            href={`https://sam.gov/opp/${opp._id}/view`} 
                            target="_blank"
                            className="inline-flex items-center gap-2 text-red-600 hover:text-white text-[10px] font-black uppercase tracking-widest transition-all"
                          >
                            View Details
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

        {/* Existing Resource Grid */}
        <div className="flex items-center gap-6 mb-10">
          <h2 className="text-3xl font-black text-white uppercase tracking-tight whitespace-nowrap">
            Support <span className="text-red-600">Resources</span>
          </h2>
          <div className="h-px w-full bg-gradient-to-r from-red-600/50 to-transparent"></div>
        </div>
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

                <Link href={res.link || '/#contact'} className="block w-full">
                  <button className="w-full py-4 bg-white/5 hover:bg-red-600 text-white text-[10px] font-black uppercase tracking-widest rounded-xl transition-all border border-white/10 group-hover:border-transparent group-hover:shadow-[0_10px_30px_-5px_rgba(220,38,38,0.4)]">
                    {res.cta || 'Learn More'}
                  </button>
                </Link>
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
