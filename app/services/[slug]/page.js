import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const servicesConfig = {
  "consulting": {
    title: "IT Consulting & Advisory",
    subtitle: "Strategic insights and roadmaps to digitally transform and optimize enterprise IT.",
    features: [
      { title: "IT Strategy & Roadmap", desc: "Aligning technology investments with long-term business objectives.", icon: "📈" },
      { title: "Digital Transformation", desc: "Modernizing legacy systems to drive operational efficiency.", icon: "🚀" },
      { title: "Technology Assessment", desc: "Comprehensive gap analysis to identify technological vulnerabilities.", icon: "🔍" },
      { title: "IT Governance", desc: "Establishing robust policy frameworks for enterprise security.", icon: "⚖️" },
      { title: "Vendor Sourcing", desc: "Strategic technology selection and procurement strategies.", icon: "🤝" }
    ],
    methodologyTitle: "Strategic Excellence",
    methodologyDesc: "Our advisory services utilize a top-down assessment protocol, delivering actionable blueprints designed for high-stakes enterprise environments.",
    step1Title: "Assessment",
    step1Desc: "Comprehensive gap analysis",
    step2Title: "Execution",
    step2Desc: "Strategic roadmap deployment",
    badgeText: "ITA",
    badgeSub: "Advisory Services",
    cta: "Start Consulting",
    ctaSub: "Expert Guidance • Future-Ready • Optimized Operations"
  },
  "infrastructure": {
    title: "Infrastructure & Network Services",
    subtitle: "Building resilient, high-performance IT environments that support mission-critical operations.",
    features: [
      { title: "Infrastructure Design", desc: "Architecting scalable and secure physical and virtual networks.", icon: "🏢" },
      { title: "Server Management", desc: "End-to-end administration of on-premise and virtualized servers.", icon: "🖥️" },
      { title: "Network Optimization", desc: "Ensuring maximum uptime and throughput for enterprise data flow.", icon: "⚡" },
      { title: "Data Center Support", desc: "Comprehensive operations management for physical data centers.", icon: "🔋" }
    ],
    methodologyTitle: "Resilient Architecture",
    methodologyDesc: "We design networks that are self-healing and highly available, ensuring your operations never experience unplanned downtime.",
    step1Title: "Topology Design",
    step1Desc: "Scalable network mapping",
    step2Title: "Implementation",
    step2Desc: "Seamless deployment",
    badgeText: "NET",
    badgeSub: "Infrastructure Ops",
    cta: "Upgrade Your Network",
    ctaSub: "High Availability • Secure Routing • 24/7 Uptime"
  },
  "compliance": {
    title: "Compliance & Regulatory Security",
    subtitle: "Ensuring your enterprise meets and exceeds rigorous federal and commercial compliance standards.",
    features: [
      { title: "ISO 27001 Readiness", desc: "Preparing your organization for rigorous international security audits.", icon: "📋" },
      { title: "NIST Compliance", desc: "Aligning your systems with NIST 800-53 and 800-171 frameworks.", icon: "🏛️" },
      { title: "SOC 2 Reporting", desc: "Comprehensive support for SOC 2 Type I and Type II assessments.", icon: "🛡️" },
      { title: "GDPR Alignment", desc: "Ensuring strict data privacy and protection measures for global operations.", icon: "🌍" }
    ],
    methodologyTitle: "Continuous Compliance",
    methodologyDesc: "Compliance is not a one-time event. We establish automated monitoring systems to ensure continuous adherence to evolving regulatory landscapes.",
    step1Title: "Audit Preparation",
    step1Desc: "Identifying compliance gaps",
    step2Title: "Remediation",
    step2Desc: "Implementing necessary controls",
    badgeText: "CMP",
    badgeSub: "Regulatory Affairs",
    cta: "Achieve Compliance",
    ctaSub: "Audit-Ready • Secure • Policy Driven"
  },
  "software-development": {
    title: "Custom Software Development",
    subtitle: "Engineering bespoke, high-performance software applications tailored to your exact operational requirements.",
    features: [
      { title: "Enterprise Applications", desc: "Developing robust, scalable software to power large-scale operations.", icon: "💻" },
      { title: "API Development", desc: "Creating secure, high-throughput APIs for seamless system integration.", icon: "🔗" },
      { title: "SaaS Products", desc: "End-to-end development of modern Software-as-a-Service platforms.", icon: "☁️" },
      { title: "Legacy Modernization", desc: "Refactoring and migrating outdated systems to modern tech stacks.", icon: "🔄" }
    ],
    methodologyTitle: "Agile Engineering",
    methodologyDesc: "We utilize advanced DevSecOps pipelines and agile methodologies to deliver secure, feature-rich software at an accelerated pace.",
    step1Title: "Sprint Planning",
    step1Desc: "Feature prioritization",
    step2Title: "Rapid Deployment",
    step2Desc: "CI/CD integration",
    badgeText: "DEV",
    badgeSub: "Software Engineering",
    cta: "Build Your Application",
    ctaSub: "Scalable • Secure • High Performance"
  },
  "mobile-development": {
    title: "Mobile App Development",
    subtitle: "Creating intuitive, high-performance mobile experiences for iOS, Android, and cross-platform ecosystems.",
    features: [
      { title: "Native iOS & Android", desc: "Developing platform-specific applications for maximum performance.", icon: "📱" },
      { title: "Cross-Platform", desc: "Utilizing Flutter and React Native for efficient multi-platform deployment.", icon: "⚛️" },
      { title: "App Testing & QA", desc: "Rigorous automated and manual testing to ensure flawless user experiences.", icon: "🧪" },
      { title: "App Maintenance", desc: "Continuous updates and optimization post-launch.", icon: "🛠️" }
    ],
    methodologyTitle: "User-Centric Design",
    methodologyDesc: "Our mobile development process prioritizes intuitive UI/UX design backed by robust, secure backend architectures.",
    step1Title: "Prototyping",
    step1Desc: "Interactive wireframes",
    step2Title: "Development",
    step2Desc: "Iterative coding & testing",
    badgeText: "APP",
    badgeSub: "Mobile Solutions",
    cta: "Launch Your App",
    ctaSub: "Intuitive • Responsive • Secure"
  },
  "web-cms": {
    title: "Website & CMS Services",
    subtitle: "Designing and developing dynamic, highly-secure web platforms and content management systems.",
    features: [
      { title: "Web Design & Dev", desc: "Creating visually stunning, responsive websites tailored to your brand.", icon: "🌐" },
      { title: "CMS Development", desc: "Implementing robust WordPress and custom headless CMS solutions.", icon: "📝" },
      { title: "E-commerce Solutions", desc: "Building secure, high-conversion online storefronts.", icon: "🛒" },
      { title: "UI/UX Design", desc: "Crafting engaging user interfaces that drive interaction.", icon: "🎨" }
    ],
    methodologyTitle: "Digital Presence",
    methodologyDesc: "We build digital platforms that act as powerful extensions of your enterprise, ensuring fast load times, high security, and seamless user journeys.",
    step1Title: "Design System",
    step1Desc: "Visual identity creation",
    step2Title: "Implementation",
    step2Desc: "Full-stack development",
    badgeText: "WEB",
    badgeSub: "Digital Platforms",
    cta: "Elevate Your Web Presence",
    ctaSub: "Modern Design • Fast • Secure"
  },
  "seo-marketing": {
    title: "SEO & Digital Marketing",
    subtitle: "Driving targeted visibility and growth through data-driven search engine optimization and digital strategies.",
    features: [
      { title: "Technical SEO", desc: "Deep architectural optimization to ensure maximum search engine crawlability.", icon: "⚙️" },
      { title: "Content Marketing", desc: "Strategic content creation designed to capture and convert high-value traffic.", icon: "✍️" },
      { title: "Global & Local SEO", desc: "Targeting strategic demographics to dominate search results.", icon: "🌍" },
      { title: "Performance Reporting", desc: "Granular analytics and transparent reporting on ROI and traffic growth.", icon: "📊" }
    ],
    methodologyTitle: "Data-Driven Growth",
    methodologyDesc: "We don't guess. Our marketing strategies are built on rigorous data analysis, competitive intelligence, and continuous optimization.",
    step1Title: "Keyword Research",
    step1Desc: "Identifying high-value targets",
    step2Title: "Optimization",
    step2Desc: "On-page and off-page scaling",
    badgeText: "SEO",
    badgeSub: "Digital Growth",
    cta: "Dominate Search",
    ctaSub: "Data-Driven • High ROI • Targeted"
  },
  "data": {
    title: "Data Services",
    subtitle: "Transforming raw data into actionable intelligence through advanced analytics and warehousing.",
    features: [
      { title: "Data Analytics", desc: "Extracting meaningful insights from complex, high-volume datasets.", icon: "📉" },
      { title: "Business Intelligence", desc: "Deploying interactive dashboards for real-time decision making.", icon: "📊" },
      { title: "Data Migration", desc: "Securely transferring enterprise data with zero loss and minimal downtime.", icon: "🔄" },
      { title: "Data Warehousing", desc: "Architecting scalable storage solutions for structured and unstructured data.", icon: "🗄️" }
    ],
    methodologyTitle: "Intelligence Extraction",
    methodologyDesc: "We build data pipelines that are secure, highly available, and optimized for rapid querying, turning your data into your greatest asset.",
    step1Title: "Pipeline Architecture",
    step1Desc: "Designing data flow",
    step2Title: "Visualization",
    step2Desc: "Deploying BI dashboards",
    badgeText: "DAT",
    badgeSub: "Data Engineering",
    cta: "Leverage Your Data",
    ctaSub: "Insightful • Secure • Scalable"
  },
  "ai-automation": {
    title: "AI & Automation",
    subtitle: "Accelerating enterprise efficiency through applied machine learning and robotic process automation.",
    features: [
      { title: "Machine Learning", desc: "Developing custom predictive models tailored to your specific operational needs.", icon: "🧠" },
      { title: "Process Automation", desc: "Deploying RPA bots to automate repetitive, high-volume tasks.", icon: "🤖" },
      { title: "Virtual Assistants", desc: "Implementing intelligent NLP chatbots for 24/7 operational support.", icon: "💬" },
      { title: "Predictive Analytics", desc: "Forecasting trends and behaviors to maintain a strategic advantage.", icon: "🔮" }
    ],
    methodologyTitle: "Intelligent Operations",
    methodologyDesc: "Our AI solutions are designed to augment human capabilities, reducing error rates and drastically increasing operational velocity.",
    step1Title: "Model Training",
    step1Desc: "Curating & processing datasets",
    step2Title: "Deployment",
    step2Desc: "Integrating AI into workflows",
    badgeText: "AI",
    badgeSub: "Intelligent Systems",
    cta: "Automate Your Workflow",
    ctaSub: "Efficient • Cutting-Edge • Scalable"
  },
  "managed-it": {
    title: "Managed IT Services",
    subtitle: "Comprehensive, 24/7 proactive IT support and management for modern enterprises.",
    features: [
      { title: "L1/L2/L3 Support", desc: "Tiered technical support to rapidly resolve complex IT issues.", icon: "🎧" },
      { title: "Help Desk Services", desc: "Dedicated service desks ensuring minimal disruption to end-users.", icon: "📞" },
      { title: "Asset Management", desc: "Tracking and optimizing hardware and software lifecycles.", icon: "💻" },
      { title: "Patch Management", desc: "Proactive system updates to eliminate security vulnerabilities.", icon: "🛡️" }
    ],
    methodologyTitle: "Proactive Management",
    methodologyDesc: "We don't wait for things to break. Our managed IT services utilize continuous monitoring to identify and resolve issues before they impact your operations.",
    step1Title: "Monitoring",
    step1Desc: "24/7 system oversight",
    step2Title: "Resolution",
    step2Desc: "Rapid incident response",
    badgeText: "MSP",
    badgeSub: "Managed Services",
    cta: "Secure Your Operations",
    ctaSub: "Proactive • 24/7 Support • Reliable"
  },
  "devops": {
    title: "DevOps & System Operations",
    subtitle: "Streamlining the software development lifecycle through continuous integration and infrastructure automation.",
    features: [
      { title: "CI/CD Pipelines", desc: "Automating testing and deployment for rapid, reliable software releases.", icon: "🚀" },
      { title: "Containerization", desc: "Utilizing Docker and Kubernetes for highly scalable, portable applications.", icon: "📦" },
      { title: "Infrastructure as Code", desc: "Managing infrastructure through declarative configuration files.", icon: "📜" },
      { title: "Monitoring & Logging", desc: "Implementing comprehensive observability for microservices architectures.", icon: "🔍" }
    ],
    methodologyTitle: "Continuous Velocity",
    methodologyDesc: "By breaking down silos between development and operations, we engineer pipelines that allow you to deploy with confidence, multiple times a day.",
    step1Title: "Pipeline Construction",
    step1Desc: "Automating builds",
    step2Title: "Orchestration",
    step2Desc: "Managing containerized workloads",
    badgeText: "OPS",
    badgeSub: "DevOps Engineering",
    cta: "Accelerate Deployment",
    ctaSub: "Automated • Reliable • Scalable"
  },
  "erp-crm": {
    title: "ERP, CRM & Business Apps",
    subtitle: "Unifying your enterprise data and operations with customized business software implementations.",
    features: [
      { title: "ERP Implementation", desc: "Deploying comprehensive systems like Odoo, SAP, and Oracle.", icon: "🏢" },
      { title: "CRM Customization", desc: "Tailoring customer relationship tools to your specific sales processes.", icon: "🤝" },
      { title: "Workflow Automation", desc: "Streamlining intra-departmental processes for maximum efficiency.", icon: "⚙️" },
      { title: "System Integration", desc: "Connecting disparate business apps into a single, unified ecosystem.", icon: "🔗" }
    ],
    methodologyTitle: "Operational Unity",
    methodologyDesc: "We ensure your business applications work in concert, eliminating data silos and providing leadership with a holistic view of enterprise performance.",
    step1Title: "Process Mapping",
    step1Desc: "Analyzing current workflows",
    step2Title: "Integration",
    step2Desc: "Unifying disparate systems",
    badgeText: "ERP",
    badgeSub: "Enterprise Systems",
    cta: "Unify Your Business",
    ctaSub: "Integrated • Efficient • Customized"
  },
  "disaster-recovery": {
    title: "Disaster Recovery",
    subtitle: "Ensuring absolute business continuity through robust backup and failover architectures.",
    features: [
      { title: "Backup Solutions", desc: "Implementing secure, redundant, off-site data backup protocols.", icon: "💾" },
      { title: "Recovery Planning", desc: "Developing actionable strategies to minimize Recovery Time Objectives (RTO).", icon: "⏱️" },
      { title: "Business Continuity", desc: "Comprehensive planning to maintain operations during critical failures.", icon: "🛡️" },
      { title: "High Availability", desc: "Architecting zero-downtime environments for mission-critical systems.", icon: "⚡" }
    ],
    methodologyTitle: "Absolute Resilience",
    methodologyDesc: "We prepare your infrastructure for the worst-case scenario, engineering failover mechanisms that automatically engage the moment anomalies are detected.",
    step1Title: "Risk Assessment",
    step1Desc: "Identifying single points of failure",
    step2Title: "Failover Architecture",
    step2Desc: "Implementing redundant systems",
    badgeText: "DR",
    badgeSub: "Continuity Ops",
    cta: "Secure Your Future",
    ctaSub: "Resilient • Prepared • Secure"
  }
};

export default async function DynamicServicePage({ params }) {
  const { slug } = await params;
  const config = servicesConfig[slug];

  if (!config) {
    notFound();
  }

  // To cleanly split title if it has multiple words for red highlighting
  const titleWords = config.title.split(' ');
  const firstWord = titleWords[0];
  const restWords = titleWords.slice(1).join(' ');

  return (
    <div className="min-h-screen bg-[#0a0c10] text-white pt-32 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500">
          <Link href="/" className="hover:text-red-600">Home</Link>
          <span>/</span>
          <Link href="/services" className="hover:text-red-600">Services</Link>
          <span>/</span>
          <span className="text-red-600">{config.title}</span>
        </div>

        {/* Header Section */}
        <div className="mb-16 border-l-4 border-red-600 pl-6">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            {firstWord} <span className="text-red-600">{restWords}</span>
          </h1>
          <p className="text-slate-400 max-w-2xl text-sm md:text-lg leading-relaxed uppercase tracking-widest font-bold">
            {config.subtitle}
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {config.features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-red-600/50 transition-all group"
            >
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-black uppercase tracking-widest mb-4 group-hover:text-red-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-loose">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Methodology */}
        <div className="bg-gradient-to-br from-[#12141a] to-[#0a0c10] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="p-10 lg:p-16">
              <h2 className="text-2xl font-black uppercase tracking-widest mb-6">{config.methodologyTitle}</h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                {config.methodologyDesc}
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-600/20 flex items-center justify-center text-red-600 font-bold">01</div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest mb-1">{config.step1Title}</h4>
                    <p className="text-[10px] text-slate-500 uppercase font-bold">{config.step1Desc}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-red-600/20 flex items-center justify-center text-red-600 font-bold">02</div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest mb-1">{config.step2Title}</h4>
                    <p className="text-[10px] text-slate-500 uppercase font-bold">{config.step2Desc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative bg-red-600/5 flex items-center justify-center p-12 border-l border-white/5">
               <div className="text-center">
                  <div className="inline-block p-4 rounded-full bg-red-600/10 mb-4">
                    <div className="w-16 h-16 border-2 border-red-600 border-dashed rounded-full animate-spin-slow flex items-center justify-center">
                      <span className="text-red-600 text-2xl font-black underline">{config.badgeText}</span>
                    </div>
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-[0.4em] text-red-600">{config.badgeSub}</p>
               </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 flex flex-col items-center">
          <Link 
            href="/#contact" 
            className="group relative inline-flex items-center gap-4 bg-red-600 px-12 py-4 rounded-lg font-black uppercase tracking-widest text-sm hover:bg-red-700 transition-all shadow-[0_0_30px_rgba(220,38,38,0.2)]"
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
