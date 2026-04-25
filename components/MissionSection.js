export default function MissionSection() {
  return (
    <section id="mission" className="relative py-24 bg-slate-900 text-white overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-red-600/10 -skew-x-12 translate-x-20" />
      <div className="container mx-auto px-6 relative z-10 text-left">
        <div className="max-w-3xl">
          <h2 className="text-sm font-bold text-red-600 uppercase tracking-widest mb-4 italic">// Mission Statement</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            We bridge the gap between technical innovation and federal compliance.
          </h3>
          <p className="text-lg text-gray-400 leading-relaxed mb-12">
            In an era of rising cyber threats and stringent regulatory requirements, 
            Cognivix IT Solutions ensures that prime contractors and federal agencies have access 
            to verified, cleared, and highly skilled technical talent.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            <div className="flex items-start gap-4">
              <div className="h-6 w-6 rounded-full bg-red-600 flex-shrink-0" />
              <p><span className="text-white font-bold">NIST 800-171 Compliance</span> - Following strict federal security guidelines.</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-6 w-6 rounded-full bg-red-600 flex-shrink-0" />
              <p><span className="text-white font-bold">CMMC Readiness</span> - Supporting Cyber Maturity Model Certifications.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}