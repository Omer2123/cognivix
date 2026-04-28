import Link from 'next/link';
import { notFound } from 'next/navigation';
import dbConnect from '@/lib/dbConnect';
import Config from '@/models/Config';

const aboutConfig = {
  "mission": {
    title: "Mission & Vision",
    subtitle: "Engineering national-scale resilience through specialized digital transformation and federal-grade technical governance.",
    features: [
      { title: "National Resilience", desc: "Building systems that withstand the most rigorous operational stresses.", icon: "🛡️" },
      { title: "Digital Evolution", desc: "Driving the shift towards modern, efficient federal IT ecosystems.", icon: "🚀" },
      { title: "Strategic Governance", desc: "Ensuring every technical decision aligns with mission-critical goals.", icon: "⚖️" },
      { title: "Technical Excellence", desc: "Maintaining the highest standards of engineering integrity.", icon: "💎" }
    ],
    methodologyTitle: "Mission First",
    methodologyDesc: "We prioritize the mission above all else, ensuring that technology serves as a robust enabler for national objectives.",
    step1Title: "Alignment",
    step1Desc: "Synchronizing with agency goals",
    step2Title: "Implementation",
    step2Desc: "Deploying resilient solutions",
    badgeText: "MSN",
    badgeSub: "Mission Driven",
    cta: "Partner With Us",
    ctaSub: "Resilient • Scalable • Compliant"
  },
  "values": {
    title: "Core Values",
    subtitle: "The principles that drive our technical integrity and mission readiness.",
    features: [
      { title: "Absolute Compliance", desc: "Zero compromise on regulatory and security standards.", icon: "📋" },
      { title: "Mission Readiness", desc: "Prepared to deploy and support at the speed of the mission.", icon: "⚡" },
      { title: "Technical Integrity", desc: "Honest, high-grade engineering that stands up to scrutiny.", icon: "🏗️" },
      { title: "Strategic Growth", desc: "Expanding capabilities to meet future federal challenges.", icon: "📈" }
    ],
    methodologyTitle: "Value Driven",
    methodologyDesc: "Our values are not just words; they are the operational framework for every project we undertake.",
    step1Title: "Integrity Check",
    step1Desc: "Ensuring technical honesty",
    step2Title: "Quality Assurance",
    step2Desc: "Delivering beyond expectations",
    badgeText: "VAL",
    badgeSub: "Integrity First",
    cta: "Join Our Mission",
    ctaSub: "Principled • Reliable • Expert"
  },
  "compliance": {
    title: "Compliance & Certifications",
    subtitle: "Meeting and exceeding the highest standards of federal and commercial security frameworks.",
    features: [
      { title: "NIST Frameworks", desc: "Full adherence to NIST 800-171 and 800-53 security controls.", icon: "🏛️" },
      { title: "ISO Readiness", desc: "Preparing for ISO 27001 and 9001 certifications.", icon: "🌐" },
      { title: "CMMC Support", desc: "Navigating the complexities of Cyber Maturity Model Certifications.", icon: "🛡️" },
      { title: "ITAR/EAR", desc: "Managing sensitive technical data within federal export guidelines.", icon: "📦" }
    ],
    methodologyTitle: "Compliant by Design",
    methodologyDesc: "We build compliance into the architecture, not as an afterthought, ensuring seamless audits and maximum security.",
    step1Title: "Gap Analysis",
    step1Desc: "Identifying compliance needs",
    step2Title: "Fortification",
    step2Desc: "Closing security loopholes",
    badgeText: "CRT",
    badgeSub: "Federal Grade",
    cta: "Secure Your Operations",
    ctaSub: "Audit-Ready • Secure • Compliant"
  },
  "naics-codes": {
    title: "NAICS & Identifiers",
    subtitle: "Strategic industry classifications and government identification markers.",
    features: [
      { title: "541519 (Primary)", desc: "Other Computer Related Services (IT VAR).", icon: "🔢" },
      { title: "541511 / 541512", desc: "Custom Computer Programming and Systems Design.", icon: "💻" },
      { title: "UEI Management", desc: "Maintaining unique entity identifiers for federal contracting.", icon: "🆔" },
      { title: "CAGE Code", desc: "Strategic positioning within the Commercial and Government Entity system.", icon: "🏢" }
    ],
    methodologyTitle: "Strategic Positioning",
    methodologyDesc: "Our NAICS codes are selected to maximize our value proposition to federal prime contractors and agencies.",
    step1Title: "Classification",
    step1Desc: "Identifying key NAICS codes",
    step2Title: "Registration",
    step2Desc: "Ensuring SAM.gov accuracy",
    badgeText: "ID",
    badgeSub: "Industry Identifiers",
    cta: "Review Our NAICS",
    ctaSub: "Categorized • Accurate • Ready"
  },
  "performance": {
    title: "Past Performance",
    subtitle: "A track record of excellence in supporting the federal mission across multiple agencies.",
    features: [
      { title: "DoD Support", desc: "Critical technical staffing and proposal support for defense projects.", icon: "🎖️" },
      { title: "DHS Initiatives", desc: "Facilitating secure cloud migrations for homeland security.", icon: "🛡️" },
      { title: "NASA Collaboration", desc: "Providing specialized technical expertise for aerospace missions.", icon: "🚀" },
      { title: "SLED Impact", desc: "Delivering enterprise-grade IT to state and local governments.", icon: "🏙️" }
    ],
    methodologyTitle: "Proven Success",
    methodologyDesc: "Our past performance is the foundation of our future partnerships, demonstrating reliability and technical prowess.",
    step1Title: "Engagement",
    step1Desc: "Understanding project needs",
    step2Title: "Delivery",
    step2Desc: "Meeting all KPIs and goals",
    badgeText: "EXP",
    badgeSub: "Proven Impact",
    cta: "See Our Work",
    ctaSub: "Reliable • Experienced • Success"
  },
  "case-studies": {
    title: "Case Studies",
    subtitle: "Detailed technical breakdowns of our high-impact project deliveries.",
    features: [
      { title: "GSA Modernization", desc: "Refactoring legacy infrastructure for the General Services Administration.", icon: "🔄" },
      { title: "Health IT Security", desc: "Implementing HIPAA-compliant cloud architectures.", icon: "🏥" },
      { title: "Staffing Success", desc: "Rapidly scaling cleared technical teams for DoD primes.", icon: "👥" },
      { title: "Proposal Leadership", desc: "Winning technical responses for multi-million dollar contracts.", icon: "✍️" }
    ],
    methodologyTitle: "In-Depth Analysis",
    methodologyDesc: "Each case study represents a unique challenge solved through innovative engineering and strategic thinking.",
    step1Title: "Challenge",
    step1Desc: "Identifying the roadblock",
    step2Title: "Solution",
    step2Desc: "Engineering the fix",
    badgeText: "CS",
    badgeSub: "Technical Detail",
    cta: "Read Full Studies",
    ctaSub: "Detailed • Technical • Results"
  },
  "leadership": {
    title: "Executive Leadership",
    subtitle: "Meet the visionaries behind Cognivix's strategic growth and technical excellence.",
    team: [
      { name: "Marcus Thorne", position: "Founder", image: "/images/team/founder.png" },
      { name: "Sarah Chen", position: "Co-Founder", image: "/images/team/cofounder.png" }
    ],
    features: [
      { title: "Visionary Strategy", desc: "Leading the company with a long-term focus on federal resilience.", icon: "👁️" },
      { title: "Expert Guidance", desc: "Decades of combined experience in GovCon and IT.", icon: "🧠" },
      { title: "Mission Alignment", desc: "Ensuring every project meets national security standards.", icon: "🛡️" },
      { title: "Growth Mindset", desc: "Scaling operations to meet the evolving needs of federal agencies.", icon: "📈" }
    ],
    methodologyTitle: "Strategic Oversight",
    methodologyDesc: "Our leadership team maintains a hands-on approach to quality control and strategic alignment for every client engagement.",
    step1Title: "Vision",
    step1Desc: "Defining the strategic path",
    step2Title: "Execution",
    step2Desc: "Ensuring operational success",
    badgeText: "EXE",
    badgeSub: "Leadership",
    cta: "Connect With Us",
    ctaSub: "Strategic • Experienced • Visionary"
  }
};

export default async function DynamicAboutPage({ params }) {
  const { slug } = await params;
  
  let dbConfig = null;
  try {
    await dbConnect();
    dbConfig = await Config.findOne();
  } catch (e) {
    console.error("Config fetch error:", e);
  }

  let config = aboutConfig[slug];

  if (!config) {
    notFound();
  }

  // Use team from DB if available for leadership page
  if (slug === 'leadership' && dbConfig?.leadershipTeam && dbConfig.leadershipTeam.length > 0) {
    config = { ...config, team: dbConfig.leadershipTeam };
  }

  const titleWords = config.title.split(' ');
  const firstWord = titleWords[0];
  const restWords = titleWords.slice(1).join(' ');

  return (
    <div className="min-h-screen bg-secondary text-darktext pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
          <Link href="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link href="/about" className="hover:text-primary">About</Link>
          <span>/</span>
          <span className="text-primary">{config.title}</span>
        </div>

        {/* Header Section */}
        <div className="mb-16 border-l-4 border-primary pl-6">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            {firstWord} <span className="text-primary">{restWords}</span>
          </h1>
          <p className="text-slate-400 max-w-2xl text-sm md:text-lg leading-relaxed uppercase tracking-widest font-bold">
            {config.subtitle}
          </p>
        </div>

        {/* Leadership Team Section (Conditional) */}
        {config.team && (
          <div className="grid md:grid-cols-2 gap-12 mb-24 max-w-4xl mx-auto">
            {config.team.map((member, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="relative w-64 h-64 mb-8">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/40 transition-all duration-500" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-slate-800 group-hover:border-primary transition-all duration-500">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover transition-all duration-500 scale-110 hover:scale-100"
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter text-primary mb-2 transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-[0.3em]">
                  {member.position || member.role}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {config.features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-base/5 border border-white/10 p-8 rounded-2xl hover:border-primary/50 transition-all group"
            >
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-black uppercase tracking-widest mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-loose">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Methodology / Focus */}
        <div className="bg-gradient-to-br from-[#12141a] to-secondary border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-10 lg:p-16">
              <h2 className="text-2xl font-black uppercase tracking-widest mb-6">{config.methodologyTitle}</h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                {config.methodologyDesc}
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold">01</div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest mb-1">{config.step1Title}</h4>
                    <p className="text-[10px] text-slate-500 uppercase font-bold">{config.step1Desc}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold">02</div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest mb-1">{config.step2Title}</h4>
                    <p className="text-[10px] text-slate-500 uppercase font-bold">{config.step2Desc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative bg-primary/5 flex items-center justify-center p-12 border-l border-white/5">
               <div className="text-center">
                  <div className="inline-block p-4 rounded-full bg-primary/10 mb-4">
                    <div className="w-16 h-16 border-2 border-primary border-dashed rounded-full animate-spin-slow flex items-center justify-center">
                      <span className="text-primary text-2xl font-black underline">{config.badgeText}</span>
                    </div>
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">{config.badgeSub}</p>
               </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 flex flex-col items-center">
          <Link 
            href="/#contact" 
            className="group relative inline-flex items-center gap-4 bg-primary px-12 py-4 rounded-lg font-black uppercase tracking-widest text-sm hover:bg-primary/80 transition-all shadow-[0_0_30px_rgba(220,38,38,0.2)]"
          >
            {config.cta}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
          <p className="mt-6 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
            {config.ctaSub}
          </p>
        </div>
      </div>
    </div>
  );
}
