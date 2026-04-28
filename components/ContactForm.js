'use client';
import { useState, useEffect } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState(null);

  const [sectors, setSectors] = useState([]);

  useEffect(() => {
    const fetchSectors = async () => {
      try {
        const res = await fetch('/api/sectors');
        const data = await res.json();
        if (data.success) {
          setSectors(data.data.map(s => s.name));
        }
      } catch (err) {
        console.error('Failed to fetch sectors:', err);
      }
    };
    fetchSectors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('transmitting');

    const formData = new FormData(e.target);
    const body = {
      name: formData.get('name'),
      email: formData.get('email'),
      serviceCategory: formData.get('serviceCategory'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Submission failed');
      }

      setStatus('secured');
      setTimeout(() => {
        window.location.href = '/contact/success';
      }, 1000);
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact-form-inner" className="bg-base py-20 md:py-28 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Responsive Section Header */}
        <div className="text-center mb-10 md:mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-basetext uppercase tracking-tighter leading-none">
            SECURE <span className="text-primary">INQUIRY</span>
          </h2>
          <div className="w-16 md:w-24 h-1.5 bg-primary mx-auto"></div>
        </div>

        {/* The Briefing Card - Optimized for Android and Desktop */}
        <div className="bg-accent rounded-2xl md:rounded-3xl p-6 sm:p-10 md:p-16 shadow-xl border border-white/5 relative">
          
          <div className="text-center mb-10 md:mb-16">
            <h3 className="text-xl md:text-3xl font-black text-darktext uppercase tracking-tighter">
              PROJECT <span className="text-primary">BRIEFING</span>
            </h3>
            <p className="text-darktext/70 text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] mt-3">
              Submit official project tenders for review.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 md:space-y-12">
            {/* Name and Email - Stacks on Android, Grid on Web */}
            <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-10">
              <div className="space-y-2">
                <label className="text-[10px] md:text-xs font-black text-darktext/70 uppercase tracking-widest block text-center">Liaison Name</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Full Name" 
                  className="w-full bg-[#151921] border border-slate-800 text-darktext p-4 md:p-5 rounded-xl md:rounded-2xl focus:border-primary outline-none transition-all placeholder:text-darktext/70 text-sm font-medium"
                  required 
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] md:text-xs font-black text-darktext/70 uppercase tracking-widest block text-center">Authorized Email</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="dept@gov.in" 
                  className="w-full bg-[#151921] border border-slate-800 text-darktext p-4 md:p-5 rounded-xl md:rounded-2xl focus:border-primary outline-none transition-all placeholder:text-darktext/70 text-sm font-medium"
                  required 
                />
              </div>
            </div>

            {/* Operational Sector - Custom UI for Mobile */}
            <div className="space-y-2">
              <label className="text-[10px] md:text-xs font-black text-darktext/70 uppercase tracking-widest block text-center">Operational Sector</label>
              <div className="relative">
                <select
                  name="serviceCategory"
                  className="w-full bg-[#151921] border-2 border-primary/30 text-darktext p-4 md:p-5 rounded-xl md:rounded-2xl focus:border-primary outline-none transition-all text-sm appearance-none cursor-pointer font-bold tracking-tight"
                >
                  {sectors.map((s) => (
                    <option key={s} value={s} className="bg-accent text-darktext py-4">{s}</option>
                  ))}
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-primary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            {/* Mission Intelligence - Multi-line Input */}
            <div className="space-y-2">
              <label className="text-[10px] md:text-xs font-black text-darktext/70 uppercase tracking-widest block text-center">Mission Intelligence</label>
              <textarea 
                name="message"
                placeholder="Define project scope and requirements..." 
                className="w-full bg-[#151921] border border-slate-800 text-darktext p-4 md:p-6 rounded-xl md:rounded-2xl h-40 md:h-52 focus:border-primary outline-none transition-all placeholder:text-darktext/70 text-sm resize-none font-medium leading-relaxed"
                required 
              />
            </div>

            {/* Final Submission Button */}
            <button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/80 text-darktext font-black uppercase tracking-[0.3em] md:tracking-[0.4em] py-5 md:py-7 rounded-xl md:rounded-2xl transition-all shadow-[0_20px_40px_-10px_rgba(220,38,38,0.4)] hover:scale-[1.01] active:scale-[0.98] disabled:bg-slate-800 text-[10px] md:text-sm"
              disabled={status === 'transmitting' || status === 'secured'}
            >
              {status === 'transmitting' ? 'Transmitting...' : status === 'secured' ? 'Submission Secured' : status === 'error' ? 'Transmission Failed — Retry' : 'Initiate Submission'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
