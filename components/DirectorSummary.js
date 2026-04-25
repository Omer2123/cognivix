// components/DirectorSummary.js
export default function DirectorSummary() {
  return (
    <div className="bg-[#0f1218] p-12 rounded-[3rem] border border-slate-800 grid md:grid-cols-3 gap-12 mt-20">
      <div className="space-y-4">
        <p className="text-red-600 font-black text-xs uppercase tracking-[0.3em]">Operational Status</p>
        <p className="text-4xl font-black text-white uppercase tracking-tighter">Active</p>
        <p className="text-slate-500 text-xs">National Grid Uplink Stable</p>
      </div>
      <div className="space-y-4 border-l border-slate-800 pl-12">
        <p className="text-red-600 font-black text-xs uppercase tracking-[0.3em]">Lead Architect</p>
        <p className="text-2xl font-black text-white uppercase tracking-tighter">R. Kumawat</p>
        <p className="text-slate-500 text-xs italic">B.Tech Cybersecurity | CS Diploma</p>
      </div>
      <div className="space-y-4 border-l border-slate-800 pl-12">
        <p className="text-red-600 font-black text-xs uppercase tracking-[0.3em]">Security Protocol</p>
        <p className="text-2xl font-black text-white uppercase tracking-tighter">L4-Federal</p>
        <p className="text-slate-500 text-xs font-mono">ENCRYPT_AES_256_ACTIVE</p>
      </div>
    </div>
  );
}