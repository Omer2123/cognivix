'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CareersPage() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isApplying, setIsApplying] = useState(false);
  const [appForm, setAppForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [cvFile, setCvFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleApply = async (e) => {
    e.preventDefault();
    if (!cvFile) {
      alert('Please upload your CV');
      return;
    }
    setIsSubmitting(true);

    try {
      // 1. Upload CV
      const uploadRes = await fetch(`/api/applications/upload?filename=${cvFile.name}`, {
        method: 'POST',
        body: cvFile,
      });
      const uploadData = await uploadRes.json();
      if (!uploadData.success) throw new Error(uploadData.error);

      // 2. Submit Application
      const appRes = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...appForm,
          cvUrl: uploadData.url,
          jobId: selectedJob._id,
          jobTitle: selectedJob.title
        }),
      });
      const appData = await appRes.json();
      if (appData.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSelectedJob(null);
          setSubmitted(false);
          setAppForm({ name: '', email: '', phone: '', message: '' });
          setCvFile(null);
        }, 3000);
      } else {
        alert(appData.error);
      }
    } catch (err) {
      alert('Error: ' + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  <button 
                    onClick={() => setSelectedJob(job)}
                    className="bg-red-600 hover:bg-red-700 text-white text-[10px] font-black uppercase tracking-widest px-8 py-4 rounded-xl transition shadow-[0_10px_20px_-5px_rgba(220,38,38,0.3)]"
                  >
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

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setSelectedJob(null)}></div>
          <div className="relative w-full max-w-xl bg-[#0f1218] border border-slate-800 rounded-[2.5rem] overflow-hidden animate-in fade-in zoom-in duration-300">
            {submitted ? (
              <div className="p-16 text-center">
                <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">Mission Received</h3>
                <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Our recruitment team will review your dossier.</p>
              </div>
            ) : (
              <div className="p-10 md:p-12">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <span className="text-[10px] font-black text-red-600 uppercase tracking-widest block mb-2">Applying for</span>
                    <h3 className="text-3xl font-black text-white uppercase tracking-tighter leading-none">{selectedJob.title}</h3>
                  </div>
                  <button onClick={() => setSelectedJob(null)} className="text-slate-500 hover:text-white transition">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <form onSubmit={handleApply} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      required
                      type="text"
                      placeholder="Full Name"
                      className="bg-slate-900/50 border border-slate-800 p-4 rounded-xl text-white outline-none focus:border-red-600 transition"
                      value={appForm.name}
                      onChange={(e) => setAppForm({ ...appForm, name: e.target.value })}
                    />
                    <input
                      required
                      type="email"
                      placeholder="Email Address"
                      className="bg-slate-900/50 border border-slate-800 p-4 rounded-xl text-white outline-none focus:border-red-600 transition"
                      value={appForm.email}
                      onChange={(e) => setAppForm({ ...appForm, email: e.target.value })}
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Phone Number (Optional)"
                    className="w-full bg-slate-900/50 border border-slate-800 p-4 rounded-xl text-white outline-none focus:border-red-600 transition"
                    value={appForm.phone}
                    onChange={(e) => setAppForm({ ...appForm, phone: e.target.value })}
                  />
                  
                  <div className="relative group">
                    <input
                      required
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => setCvFile(e.target.files[0])}
                      className="absolute inset-0 opacity-0 cursor-pointer z-10"
                    />
                    <div className="bg-slate-900/30 border border-dashed border-slate-700 p-8 rounded-xl text-center group-hover:border-red-600/50 transition-all">
                      <svg className="w-8 h-8 text-slate-500 mx-auto mb-3 group-hover:text-red-600 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                      <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
                        {cvFile ? cvFile.name : 'Upload Dossier / CV (PDF/DOC)'}
                      </p>
                    </div>
                  </div>

                  <textarea
                    placeholder="Briefly describe your expertise..."
                    className="w-full h-32 bg-slate-900/50 border border-slate-800 p-4 rounded-xl text-white outline-none focus:border-red-600 transition resize-none"
                    value={appForm.message}
                    onChange={(e) => setAppForm({ ...appForm, message: e.target.value })}
                  />

                  <button
                    disabled={isSubmitting}
                    className="w-full bg-red-600 hover:bg-red-700 disabled:bg-slate-800 text-white font-black py-5 rounded-xl uppercase tracking-[0.2em] transition text-xs shadow-[0_15px_30px_-10px_rgba(220,38,38,0.5)]"
                  >
                    {isSubmitting ? 'Transmitting Data...' : 'Submit Application'}
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}