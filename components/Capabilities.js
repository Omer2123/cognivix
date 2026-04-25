'use client';

export default function Capabilities() {
  const capabilities = [
    {
      title: "PROPOSAL DEVELOPMENT",
      desc: "Full-lifecycle support including Red Team reviews, compliance matrices, and technical writing for complex RFPs.",
    },
    {
      title: "CLEARED STAFFING",
      desc: "Rapid recruitment of Secret, Top Secret, and Polygraph cleared professionals across IT and engineering domains.",
    },
    {
      title: "CYBERSECURITY COMPLIANCE",
      desc: "NIST 800-171 and CMMC readiness assessments to ensure your firm meets all federal security requirements.",
    },
    {
      title: "GSA SCHEDULE SUPPORT",
      desc: "Navigating the complexities of GSA Schedule acquisition, management, and price list maintenance.",
    }
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image with Professional Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=2000" 
          alt="Data Center" 
          className="w-full h-full object-cover grayscale opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c10] via-[#0a0c10]/80 to-[#0a0c10]/40"></div>
      </div>

      <div className="max-w-14xl mx-auto px-4 relative z-10 py-20">
        <div className="grid lg:grid-cols-1 gap-16 items-center">
          
          {/* Left Column: Mission Text */}
          <div className="space-y-6">
            <span className="text-red-600 font-black tracking-[0.4em] text-xs uppercase">
              // Core Capabilities 
            </span>
            <h2 className="text-6xl font-black text-white leading-none uppercase tracking-tighter">
              A Partner in Federal 
              <span className="text-red-600"> Mission Success</span>
            </h2>
            <div className="w-24 h-3 bg-red-700 mt-9"></div>
          </div>

          {/* Right Column: Grid of Details */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {capabilities.map((cap, index) => (
              <div key={index} className="space-y-8 group">
                <h3 className="text-sm font-black text-white uppercase tracking-widest group-hover:text-red-600 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed font- medium">
                  {cap.desc}
                </p>
                <div className="w-full h-[10px] bg-white/10 group-hover:bg-red-600/50 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
