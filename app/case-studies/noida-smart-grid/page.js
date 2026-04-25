// app/case-studies/noida-smart-grid/page.js
export default function CaseStudy() {
  const specs = [
    { label: "Deployment Zone", value: "Sector 62, Greater Noida" },
    { label: "Infrastructure Type", value: "Digital-Physical Hybrid Grid" },
    { label: "Execution Time", value: "14 Months" },
    { label: "Compliance", value: "BIS Level 4" }
  ];

  return (
    <main className="bg-[#0a0c10] min-h-screen text-slate-300 pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        <span className="text-red-600 font-black tracking-widest text-[10px] uppercase">Case Study: 08-2025</span>
        <h1 className="text-5xl font-black text-white uppercase tracking-tighter mt-4 mb-12">Greater Noida <span className="text-red-600">Smart Grid</span></h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 border-y border-slate-800 py-10">
          {specs.map(s => (
            <div key={s.label}>
              <p className="text-[10px] font-black text-slate-500 uppercase mb-1">{s.label}</p>
              <p className="text-white font-bold text-sm uppercase">{s.value}</p>
            </div>
          ))}
        </div>

        <section className="prose prose-invert max-w-none space-y-8">
          <h2 className="text-2xl font-black text-white uppercase italic">Executive Summary</h2>
          <p className="text-lg leading-relaxed">
            The mission involved the overhaul of legacy utility frameworks within the Noida special economic zone. Cognivix IT Solutions deployed a subterranean fiber-optic backbone integrated with automated load-balancing sensors to stabilize the regional power surge by 34%.
          </p>
          
          <h2 className="text-2xl font-black text-white uppercase italic">Technical Challenges</h2>
          <ul className="list-disc pl-5 space-y-4 text-slate-400">
            <li>Legacy system incompatibility during the initial "hot-swap" phase.</li>
            <li>Seismic reinforcement requirements exceeding standard IS:1893 protocols.</li>
            <li>Maintaining 99.9% uptime for federal administrative uplinks during construction.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}