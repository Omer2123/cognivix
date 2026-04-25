// app/solutions/smart-cities/page.js
export default function SmartCities() {
  return (
    <main className="bg-[#0a0c10] min-h-screen text-slate-300">
      <section className="pt-40 pb-20 px-6 border-b border-slate-900">
        <div className="max-w-7xl mx-auto">
          <span className="text-red-600 font-black tracking-[0.4em] uppercase text-xs">Sector: Infrastructure</span>
          <h1 className="text-7xl font-black text-white uppercase tracking-tighter mt-4 mb-8">
            Urban <span className="text-red-600">Orchestration</span>
          </h1>
          <p className="max-w-3xl text-xl leading-relaxed text-slate-400 font-medium italic">
            "Engineering the digital and physical nexus of the 21st-century metropolis through automated governance and structural resilience."
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight mb-6">Technical Framework</h2>
            <p className="mb-8 leading-relaxed">Our approach to Smart City development utilizes decentralized logic hubs to manage traffic, waste, and energy in real-time. By deploying subterranean fiber-optic backbones, we ensure 99.99% uptime for federal administrative services.</p>
            <ul className="space-y-4">
              {['Automated Traffic Grids', 'High-Density Utility Vaults', 'Federal Uplink Silos'].map(item => (
                <li key={item} className="flex items-center gap-4 font-black uppercase text-xs tracking-widest text-red-500">
                  <span className="w-2 h-2 bg-red-600 rounded-full"></span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-900/50 p-12 rounded-3xl border border-slate-800 shadow-2xl">
            <h3 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Deployment Statistics</h3>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between text-[10px] font-black uppercase mb-2"><span>Latency Reduction</span><span>88%</span></div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden"><div className="bg-red-600 h-full w-[88%] shadow-[0_0_10px_#dc2626]"></div></div>
              </div>
              <div>
                <div className="flex justify-between text-[10px] font-black uppercase mb-2"><span>Grid Efficiency</span><span>94%</span></div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden"><div className="bg-red-600 h-full w-[94%] shadow-[0_0_10px_#dc2626]"></div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}