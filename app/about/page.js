import Link from 'next/link';
import dbConnect from '@/lib/dbConnect';
import { unstable_noStore as noStore } from 'next/cache';
import Config from '@/models/Config';

const aboutCategories = [
  {
    category: "IDENTITY & MISSION",
    icon: "🎯",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
    items: [
      {
        title: "Mission & Vision",
        href: "/about/mission",
        list: ["National-scale resilience", "Digital transformation leadership", "Mission-critical governance", "Strategic innovation"]
      },
      {
        title: "Core Values",
        href: "/about/values",
        list: ["Absolute Compliance", "Mission Readiness", "Technical Integrity", "Strategic Growth"]
      }
    ]
  },
  {
    category: "GOVERNANCE & TRUST",
    icon: "🏛️",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000",
    items: [
      {
        title: "Compliance & Certs",
        href: "/about/compliance",
        list: ["NIST 800-171 / 800-53", "ISO 27001 / 9001 Readiness", "CMMC Maturity Level Support", "ITAR / EAR Compliance"]
      },
      {
        title: "NAICS & Identifiers",
        href: "/about/naics-codes",
        list: ["Primary: 541519 (IT VAR)", "Secondary: 541511, 541512", "UEI & CAGE Code Management", "Small Business Designations"]
      }
    ]
  },
  {
    category: "EXPERIENCE & IMPACT",
    icon: "🚀",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
    items: [
      {
        title: "Past Performance",
        href: "/about/performance",
        list: ["DoD Project Successes", "DHS Cloud Initiatives", "NASA Technical Support", "State & Local (SLED) Impact"]
      },
      {
        title: "Case Studies",
        href: "/about/case-studies",
        list: ["Legacy Modernization for GSA", "Cloud Security for Health Agencies", "Staff Augmentation Success", "Technical Proposal Leadership"]
      }
    ]
  },
  {
    category: "STRATEGIC LEADERSHIP",
    icon: "👔",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000",
    items: [
      {
        title: "Executive Team",
        href: "/about/leadership",
        list: ["Visionary Leadership", "Strategic Advisory", "Operational Excellence", "Technical Stewardship"]
      }
    ]
  }
];

export default async function AboutPage() {
  noStore();
  let config = null;
  try {
    await dbConnect();
    config = await Config.findOne();
  } catch (error) {
    console.error("Config fetch error:", error);
  }
  const isGrayscale = config ? config.servicesGrayscaleBanners : true;
  const bannerOpacity = config && typeof config.servicesBannerOpacity === 'number' ? config.servicesBannerOpacity / 10 : 0.3;

  return (
    <main className="bg-secondary min-h-screen pt-32 pb-20 px-6 text-darktext">
      <div className="max-w-7xl mx-auto">
        <div className="border-l-4 border-primary pl-8 mb-20">
          <h1 className="text-6xl font-black uppercase tracking-tighter">
            About <span className="text-primary">Cognivix</span>
          </h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest mt-4">Engineering National-Scale Resilience & Technical Governance</p>
        </div>

        <div className="space-y-24">
          {aboutCategories.map((group, idx) => (
            <section key={idx} className="relative">
              {/* Image Banner for each Category */}
              <div className="relative h-64 w-full rounded-3xl overflow-hidden mb-12 border border-slate-800 shadow-2xl">
                <img 
                  src={group.image} 
                  alt={group.category}
                  className={`w-full h-full object-cover hover:grayscale-0 transition-all duration-700 hover:scale-105 ${isGrayscale ? 'grayscale' : ''}`}
                  style={{ opacity: bannerOpacity }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-secondary via-transparent to-transparent flex items-center px-10">
                  <div className="flex items-center gap-6">
                    <span className="text-5xl">{group.icon}</span>
                    <h2 className="text-4xl font-black tracking-tight uppercase">{group.category}</h2>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {group.items.map((item, i) => (
                  <Link 
                    href={item.href || '#'} 
                    key={i} 
                    className="bg-accent p-8 rounded-3xl border border-slate-800 hover:border-primary transition group shadow-xl block cursor-pointer"
                  >
                    <h3 className="text-xl font-bold text-primary mb-6 uppercase tracking-tight group-hover:text-darktext transition-colors">{item.title}</h3>
                    <ul className="space-y-3">
                      {item.list.map((li, j) => (
                        <li key={j} className="text-slate-400 text-sm flex items-start gap-3 group-hover:text-slate-300 transition-colors">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 shrink-0 shadow-[0_0_8px_rgba(220,38,38,0.5)] group-hover:bg-base transition-colors"></span>
                          {li}
                        </li>
                      ))}
                    </ul>
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}