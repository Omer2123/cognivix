// app/legacy/page.js
export default function Legacy() {
  const milestones = [
    { year: "2021", event: "Foundation in Computer Science & Engineering (Jaipur)", focus: "Systemic Logic" },
    { year: "2024", event: "Advancement to Cybersecurity & Federal Systems (NIET)", focus: "Hardened Protocols" },
    { year: "2026", event: "Cognivix IT Solutions Strategic Operations Activation", focus: "Nation-Building" },
  ];

  return (
    <main className="bg-[#0a0c10] min-h-screen pt-40 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-black text-white uppercase tracking-tighter mb-12">
          The <span className="text-red-600">Evolution</span> of Logic
        </h1>
        
        <div className="space-y-16 border-l border-slate-800 pl-10 relative">
          {milestones.map((m) => (
            <div key={m.year} className="relative">
              <div className="absolute -left-[53px] top-2 w-6 h-6 bg-red-600 rounded-full border-4 border-[#0a0c10] shadow-[0_0_15px_#dc2626]"></div>
              <span className="text-red-600 font-black text-xl">{m.year}</span>
              <h3 className="text-2xl font-black text-white uppercase mt-2">{m.event}</h3>
              <p className="text-slate-500 font-bold uppercase text-xs tracking-widest mt-1">Core Focus: {m.focus}</p>
              <p className="text-slate-400 mt-4 leading-relaxed italic max-w-xl">
                Cognivix IT Solutions was not born in a boardroom; it was forged through years of rigorous technical study in Rajasthan and Uttar Pradesh. We apply the precision of a debugger to the scale of a city.
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}