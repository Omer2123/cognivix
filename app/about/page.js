'use client';

export default function AboutPage() {
  return (
    <main className="bg-[#0a0c10] min-h-screen pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="border-l-4 border-red-600 pl-8 mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
            Our <span className="text-red-600">Mission</span>
          </h1>
          <p className="text-slate-400 font-bold uppercase tracking-[0.2em] mt-4 max-w-2xl">
            Engineering national-scale resilience through specialized digital transformation and federal-grade technical governance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 text-slate-300 leading-relaxed">
            <p>
              Cognivix IT Solutions stands at the intersection of innovation and security. We specialize in navigating the complexities of government contracting, providing the technical backbone for agencies that cannot afford to fail.
            </p>
            <p>
              Our team is comprised of specialists in <strong>Cybersecurity, Cloud Architecture, and Proposal Engineering</strong>, dedicated to ensuring that our partners remain compliant, secure, and competitive in a rapidly evolving landscape.
            </p>
          </div>
          <div className="bg-[#0f1218] p-10 rounded-[3rem] border border-white/5">
            <h3 className="text-red-600 font-black uppercase tracking-widest text-xs mb-4">// Core Values</h3>
            <ul className="space-y-4 font-black uppercase tracking-tighter text-white text-xl">
              <li>01. Absolute Compliance</li>
              <li>02. Mission Readiness</li>
              <li>03. Technical Integrity</li>
              <li>04. Strategic Growth</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}