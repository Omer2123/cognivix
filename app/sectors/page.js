'use client';

const sectors = [
  {
    title: "Federal & National Security",
    desc: "Serving highly regulated organizations that require mission-critical cybersecurity and cleared staffing support.",
    bullets: ["NIST & CMMC alignment", "Mission readiness support", "Secure cloud architectures"]
  },
  {
    title: "State & Local Government",
    desc: "Modernizing legacy systems and protecting citizen information for municipal entities.",
    bullets: ["Digital service transformation", "Risk governance", "Scalable cloud adoption"]
  },
  {
    title: "Public Safety & Justice",
    desc: "High-assurance solutions for law enforcement and emergency response systems.",
    bullets: ["Secure communications", "Incident-response readiness", "Integrated digital systems"]
  },
  {
    title: "Modernization & AI",
    desc: "Replacing outdated systems with efficient, scalable, and AI-driven secure solutions.",
    bullets: ["Cloud transformation", "Enterprise AI automation", "Agile service delivery"]
  }
];

export default function SectorsPage() {
  return (
    <main className="bg-[#0a0c10] min-h-screen pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
            Sectors <span className="text-red-600">We Serve</span>
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {sectors.map((s, idx) => (
            <div key={idx} className="bg-[#0f1218] p-12 rounded-[2.5rem] border border-white/5 hover:border-red-600/40 transition-all">
              <h2 className="text-3xl font-black text-white uppercase mb-4">{s.title}</h2>
              <p className="text-slate-500 text-sm mb-8 leading-relaxed">{s.desc}</p>
              <ul className="space-y-3">
                {s.bullets.map((b, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300 text-[10px] font-black uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span> {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}