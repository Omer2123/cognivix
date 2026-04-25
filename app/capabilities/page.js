// app/capabilities/page.js
export default function Capabilities() {
  return (
    <main className="bg-[#0a0c10] min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20">
          <h1 className="text-6xl font-black text-white uppercase tracking-tighter mb-4">Structural <span className="text-red-600">Integrity</span></h1>
          <p className="text-slate-500 max-w-2xl text-lg uppercase tracking-widest font-bold">Engineering the next generation of public sector infrastructure.</p>
        </header>

        <div className="grid lg:grid-cols-2 gap-16">
          <section className="space-y-8">
            <div className="p-10 bg-[#0f1218] rounded-3xl border border-slate-800 hover:border-red-600 transition group">
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">Urban Infrastructure</h3>
              <p className="text-slate-400 leading-relaxed">Developing core physical frameworks for modern administrative zones, focusing on durability and efficient public resource distribution.</p>
            </div>
            
            <div className="p-10 bg-[#0f1218] rounded-3xl border border-slate-800 hover:border-red-600 transition">
              <h3 className="text-2xl font-black text-white mb-4 uppercase tracking-tighter">Digital Grid Systems</h3>
              <p className="text-slate-400 leading-relaxed">Implementing fiber-optic backbones and automated governance systems to connect rural districts to federal hubs.</p>
            </div>
          </section>

          <aside className="bg-slate-900 rounded-3xl p-12 border border-slate-800">
             <h4 className="text-red-600 font-black uppercase tracking-widest text-xs mb-8">Official Specifications</h4>
             <ul className="space-y-6">
               <li className="flex justify-between border-b border-slate-800 pb-4 text-sm">
                 <span className="text-slate-500 uppercase font-bold">Standards</span>
                 <span className="text-white font-mono uppercase">BIS / ISO 9001</span>
               </li>
               <li className="flex justify-between border-b border-slate-800 pb-4 text-sm">
                 <span className="text-slate-500 uppercase font-bold">Compliance</span>
                 <span className="text-white font-mono uppercase">Federal Clause 12-A</span>
               </li>
               <li className="flex justify-between border-b border-slate-800 pb-4 text-sm">
                 <span className="text-slate-500 uppercase font-bold">Operations</span>
                 <span className="text-white font-mono uppercase">24/7 Command Support</span>
               </li>
             </ul>
          </aside>
        </div>
      </div>
    </main>
  );
}