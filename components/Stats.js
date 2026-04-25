// components/Stats.js
export default function Stats() {
  const stats = [
    { label: "Contract Value Supported", value: "$500M+" },
    { label: "Cleared Technical Staff", value: "250+" },
    { label: "Years of Federal Service", value: "12+" },
    { label: "Satisfied Contractors", value: "200+" }
  ];

  return (
    <section className="bg-slate-900 py-24 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="space-y-2 group">
              <div className="text-5xl md:text-6xl font-black text-red-600 transition-transform group-hover:scale-110 duration-300">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}