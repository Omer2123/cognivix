'use client';
import { useState, useEffect } from 'react';

export default function CareersPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('/api/jobs');
        const data = await res.json();
        if (data.success) {
          setJobs(data.data);
        }
      } catch (err) {
        console.error('Failed to fetch jobs:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <main className="bg-[#0a0c10] min-h-screen pt-40 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter mb-6">
            Join the <span className="text-red-600">Elite</span>
          </h1>
          <p className="text-slate-400 uppercase font-bold tracking-[0.2em] text-[10px] md:text-xs">
            We are looking for cleared professionals and technical experts.
          </p>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : jobs.length > 0 ? (
          <div className="space-y-6">
            {jobs.map((job) => (
              <div key={job._id} className="group bg-[#0f1218] border border-slate-800 p-8 rounded-3xl hover:border-red-600/50 transition-all duration-500 hover:shadow-[0_20px_50px_-20px_rgba(220,38,38,0.15)]">
                <div className="flex flex-wrap justify-between items-start gap-6 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] font-black bg-red-600 text-white px-3 py-1 rounded-full uppercase tracking-widest">
                        {job.type}
                      </span>
                      <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                        {job.department}
                      </span>
                    </div>
                    <h2 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-red-500 transition-colors">
                      {job.title}
                    </h2>
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mt-1 flex items-center gap-2">
                      <svg className="w-3 h-3 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      {job.location}
                    </p>
                  </div>
                  <button className="bg-red-600 hover:bg-red-700 text-white text-[10px] font-black uppercase tracking-widest px-8 py-4 rounded-xl transition shadow-[0_10px_20px_-5px_rgba(220,38,38,0.3)]">
                    Apply Now
                  </button>
                </div>
                
                <div className="border-t border-slate-800/50 pt-6">
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {job.description}
                  </p>
                  {job.requirements && (
                    <div className="space-y-2">
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Key Requirements</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {job.requirements.split('\n').map((req, i) => (
                          <li key={i} className="text-slate-500 text-xs flex items-center gap-2">
                            <span className="w-1 h-1 bg-red-600 rounded-full" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-[#0f1218] border border-dashed border-slate-700 p-16 rounded-[3rem] text-center">
            <h2 className="text-2xl font-black text-white uppercase mb-4">No Active Openings</h2>
            <p className="text-slate-500 text-sm mb-8 italic">
              "Our team is currently at full capacity for active mission support, but we are always scouting for top-tier cybersecurity talent."
            </p>
            <button className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl text-white font-black uppercase text-[10px] tracking-[0.3em] hover:bg-red-600 transition">
              Submit CV for Future Operations
            </button>
          </div>
        )}
      </div>
    </main>
  );
}