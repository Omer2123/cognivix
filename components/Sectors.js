// components/Sectors.js
const sectors = [
  { 
    title: "Urban Modernization", 
    desc: "Re-engineering legacy urban centers into high-efficiency Smart Districts.",
    tech: ["Automated Traffic Grids", "Smart Waste Logistics", "Utility Decentralization"]
  },
  { 
    title: "Strategic Energy", 
    desc: "Deployment of hardened energy distribution networks for federal facilities.",
    tech: ["Grid-Tie Photovoltaics", "Thermal Energy Storage", "Hardened Transformers"]
  },
  { 
    title: "Public Connectivity", 
    desc: "Constructing the physical backbone for nation-wide fiber and 6G uplinks.",
    tech: ["Subterranean Ducting", "Signal Hub Architecture", "Secure Data Silos"]
  }
];

export default function Sectors() {
  return (
    <section className="bg-[#0a0c10] py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-16 border-l-8 border-red-600 pl-8">
          Operational <span className="text-red-600">Sectors</span>
        </h2>
        <div className="grid lg:grid-cols-3 gap-10">
          {sectors.map((s) => (
            <div key={s.title} className="p-12 bg-[#0f1218] border border-slate-800 rounded-3xl hover:bg-slate-900 transition duration-500">
              <h3 className="text-2xl font-black text-white mb-6 uppercase italic">{s.title}</h3>
              <p className="text-slate-400 mb-8 text-sm leading-relaxed">{s.desc}</p>
              <div className="space-y-2">
                {s.tech.map(t => (
                  <div key={t} className="text-[10px] font-bold text-red-500 uppercase tracking-widest border-b border-slate-800 pb-2">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}