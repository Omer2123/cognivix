'use client';

export default function CareersPage() {
  return (
    <main className="bg-[#0a0c10] min-h-screen pt-40 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-black text-white uppercase tracking-tighter mb-6">
          Join the <span className="text-red-600">Elite</span>
        </h1>
        <p className="text-slate-400 uppercase font-bold tracking-widest text-sm mb-16">
          We are looking for cleared professionals and technical experts.
        </p>
        
        <div className="bg-[#0f1218] border border-dashed border-slate-700 p-16 rounded-[3rem]">
          <h2 className="text-2xl font-black text-white uppercase mb-4">No Active Openings</h2>
          <p className="text-slate-500 text-sm mb-8 italic">
            "Our team is currently at full capacity for active mission support, but we are always scouting for top-tier cybersecurity talent."
          </p>
          <button className="bg-white/5 border border-white/10 px-8 py-4 rounded-xl text-white font-black uppercase text-[10px] tracking-[0.3em] hover:bg-red-600 transition">
            Submit CV for Future Operations
          </button>
        </div>
      </div>
    </main>
  );
}