// components/InfrastructureStats.js
const stats = [
  { label: "Urban Development Projects", value: "450+" },
  { label: "Strategic Districts", value: "12" },
  { label: "Public Service Uplinks", value: "1.2M" },
  { label: "Structural Reliability", value: "99.9%" },
];

export default function InfrastructureStats() {
  return (
    <div className="bg-[#0f1218] py-20 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-4xl font-black text-white mb-2">{s.value}</p>
            <p className="text-red-600 text-[10px] font-black uppercase tracking-[0.2em]">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}