'use client';
import Link from 'next/link';

const homepageServices = [
  {
    title: "Government & Enterprise Support",
    desc: "Technical proposal leadership and cleared staffing for federal contractors.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800", // Proposal development
    tags: ["RFP/RFQ Engineering", "Compliance Matrices", "Capability Statements"]
  },
  {
    title: "Cybersecurity & Risk Governance",
    desc: "Federal-grade protection through advanced penetration testing and audits.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800", // Cyber security
    tags: ["ISO 27001 Readiness", "Vulnerability Analysis", "SOC 2 Reporting"]
  },
  {
    title: "Cloud & Infrastructure Modernization",
    desc: "Scalable cloud architecture and infrastructure engineering for high-uptime missions.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800", // Cloud/Infrastructure
    tags: ["AWS/Azure GovCloud", "Hybrid-Cloud Setup", "FinOps Optimization"]
  },
  {
    title: "Enterprise Systems & AI Operations",
    desc: "Custom software development and AI-driven process automation.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800", // Tech/Code
    tags: ["Legacy Modernization", "RPA Automation", "Machine Learning"]
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-base py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-basetext uppercase tracking-tighter inline-block border-b-4 border-primary pb-2">
            Our Strategic <span className="text-primary">Services</span>
          </h2>
          <p className="text-basetext/70 mt-4 font-bold uppercase text-xs tracking-widest">
            Delivering Comprehensive Federal & Enterprise Solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {homepageServices.map((service, index) => (
            <div key={index} className="group relative bg-dark rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-2">
              {/* Service Image with Dark Overlay */}
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>
              </div>

              {/* Service Content */}
              <div className="p-8 lg:p-10 relative -mt-32 z-10 flex flex-col h-[calc(100%-16rem+8rem)]">
                <h3 className="text-xl lg:text-2xl font-black text-darktext uppercase tracking-tight mb-6 group-hover:text-primary transition">
                  {service.title}
                </h3>
                <p className="text-basetext/70 text-xs leading-relaxed mb-8 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                  {service.desc}
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-3 mb-10">
                  {service.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-black uppercase tracking-widest bg-primary/10 text-primary border border-primary/20 px-3 py-1.5 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="w-8 h-1 bg-primary group-hover:w-full transition-all duration-500 mt-auto"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/services" 
            className="inline-block bg-dark text-darktext font-black uppercase text-xs tracking-[0.3em] px-10 py-5 rounded-full hover:bg-primary transition-all shadow-xl"
          >
            Explore Full 17-Point Service Matrix →
          </Link>
        </div>
      </div>
    </section>
  );
}