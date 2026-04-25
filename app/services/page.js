'use client';

const serviceData = [
  {
    category: "CORE IT SERVICES",
    icon: "🖥️",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000",
    items: [
      {
        title: "1. IT Consulting & Advisory",
        list: ["IT strategy & roadmap development", "Digital transformation consulting", "Technology assessment & gap analysis", "IT governance & policy development", "Vendor selection & technology sourcing", "IT cost optimization & budgeting"]
      }
    ]
  },
  {
    category: "CLOUD & INFRASTRUCTURE",
    icon: "☁️",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000",
    items: [
      {
        title: "2. Cloud Services",
        list: ["Cloud strategy & architecture", "Cloud migration (AWS, Azure, GCP)", "Hybrid & multi-cloud setup", "Cloud security & compliance", "Cloud cost optimization (FinOps)", "Cloud monitoring & performance tuning"]
      },
      {
        title: "3. Infrastructure & Network Services",
        list: ["IT infrastructure design & deployment", "Server setup & management (on-prem / virtual)", "Network design, configuration & optimization", "LAN/WAN/Wi-Fi setup", "Data center support & operations", "Infrastructure monitoring & maintenance"]
      }
    ]
  },
  {
    category: "CYBERSECURITY SERVICES",
    icon: "🛡️",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000",
    items: [
      {
        title: "4. Security & Risk Management",
        list: ["Cybersecurity strategy & governance", "Risk assessments & vulnerability analysis", "Penetration testing (basic to advanced)", "Threat detection & incident response", "Identity & access management (IAM)", "Security operations (SOC support)"]
      },
      {
        title: "5. Compliance & Regulatory Security",
        list: ["ISO 27001 readiness & audits", "NIST 800-53 / 800-171 compliance", "SOC 2 readiness & reporting", "GDPR compliance support", "Security policies & procedures", "Business continuity & disaster recovery"]
      }
    ]
  },
  {
    category: "SOFTWARE & DEVELOPMENT",
    icon: "💻",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000",
    items: [
      {
        title: "6. Custom Software Development",
        list: ["Web application development", "Enterprise application development", "API development & integration", "SaaS product development", "Legacy system modernization"]
      },
      {
        title: "7. Mobile App Development",
        list: ["Android app development", "iOS app development", "Cross-platform apps (Flutter, React Native)", "App testing & QA", "App maintenance & updates"]
      }
    ]
  },
  {
    category: "WEB & DIGITAL SERVICES",
    icon: "🌐",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    items: [
      {
        title: "8. Website & CMS Services",
        list: ["Website design & development", "WordPress / CMS development", "E-commerce solutions", "Website maintenance & support", "UI/UX design"]
      },
      {
        title: "9. SEO & Digital Marketing",
        list: ["Search engine optimization (SEO)", "Technical SEO audits", "Local & global SEO", "Content marketing", "Conversion rate optimization (CRO)", "Analytics & performance reporting"]
      }
    ]
  },
  {
    category: "DATA, AI & ANALYTICS",
    icon: "📊",
    image: "https://images.unsplash.com/photo-1551288049-bbda38a5f977?auto=format&fit=crop&q=80&w=1000",
    items: [
      {
        title: "10. Data Services",
        list: ["Data analytics & visualization", "Business intelligence (BI) solutions", "Data migration & management", "Data warehousing", "Reporting & dashboards"]
      },
      {
        title: "11. AI & Automation",
        list: ["AI solution development", "Machine learning models", "Process automation (RPA)", "Chatbots & virtual assistants", "Predictive analytics"]
      }
    ]
  },
  {
    category: "IT OPERATIONS & DEVOPS",
    icon: "🔧",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000",
    items: [
      {
        title: "12. Managed IT Services",
        list: ["Managed IT support (L1/L2/L3)", "Help desk & service desk", "Remote IT support", "IT asset management", "Patch & update management"]
      },
      {
        title: "13. DevOps & System Operations",
        list: ["CI/CD pipeline setup", "DevOps automation", "Containerization (Docker, Kubernetes)", "Monitoring & logging", "System performance optimization"]
      }
    ]
  },
  {
    category: "ENTERPRISE SYSTEMS",
    icon: "📁",
    image: "https://www.megaplus.ae/_next/image?url=%2Fimages%2Fenterprise-systems.jpg&w=3840&q=75",
    items: [
      {
        title: "14. ERP, CRM & Business Apps",
        list: ["ERP implementation (Odoo, SAP, Oracle)", "CRM implementation & customization", "Workflow automation", "System integration services", "Training & user adoption"]
      }
    ]
  },
  {
    category: "GOVERNMENT & STRATEGY",
    icon: "🧾",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000",
    items: [
      {
        title: "15. Proposal & Compliance Services",
        list: ["Technical proposal writing", "RFP/RFQ/RFI responses", "Compliance matrices & gap analysis", "Capability statements", "Pricing & cost narratives"]
      },
      {
        title: "16. IT Staffing & Augmentation",
        list: ["Contract staffing", "Dedicated development teams", "IT recruitment support", "On-site / remote resources"]
      },
      {
        title: "17. Disaster Recovery",
        list: ["Backup & recovery solutions", "Disaster recovery planning", "Business continuity planning", "High availability architecture"]
      }
    ]
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-[#0a0c10] min-h-screen pt-32 pb-20 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="border-l-4 border-red-600 pl-8 mb-20">
          <h1 className="text-6xl font-black uppercase tracking-tighter">
            Cognivix <span className="text-red-600">Enterprise Services</span>
          </h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest mt-4">Full-Spectrum IT Solutions & Government Support</p>
        </div>

        <div className="space-y-24">
          {serviceData.map((group, idx) => (
            <section key={idx} className="relative">
              {/* Image Banner for each SBU */}
              <div className="relative h-64 w-full rounded-3xl overflow-hidden mb-12 border border-slate-800 shadow-2xl">
                <img 
                  src={group.image} 
                  alt={group.category}
                  className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0c10] via-transparent to-transparent flex items-center px-10">
                  <div className="flex items-center gap-6">
                    <span className="text-5xl">{group.icon}</span>
                    <h2 className="text-4xl font-black tracking-tight uppercase">{group.category}</h2>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {group.items.map((item, i) => (
                  <div key={i} className="bg-[#0f1218] p-8 rounded-3xl border border-slate-800 hover:border-red-600 transition group shadow-xl">
                    <h3 className="text-xl font-bold text-red-600 mb-6 uppercase tracking-tight">{item.title}</h3>
                    <ul className="space-y-3">
                      {item.list.map((li, j) => (
                        <li key={j} className="text-slate-400 text-sm flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 shrink-0 shadow-[0_0_8px_rgba(220,38,38,0.5)]"></span>
                          {li}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}