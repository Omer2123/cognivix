'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import Navbar from '@/components/Navbar';
import Agencies from '@/components/Agencies';
import AboutSection from '@/components/AboutSection';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import Capabilities from '@/components/Capabilities';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/TechnicalFooter';

function MissionSection() {
  return (
    <section id="mission" className="relative py-24 bg-dark text-darktext overflow-hidden">
      {/* Visual Image Addition for the Mission Section */}
      <div 
        className="absolute right-0 top-0 w-1/2 h-full opacity-20 grayscale pointer-events-none"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')",
          backgroundSize: 'cover'
        }}
      />
      <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/10 -skew-x-12 translate-x-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-4 italic">// Mission Statement</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            We bridge the gap between technical innovation and federal compliance.
          </h3>
          <p className="text-lg text-darktext/70 leading-relaxed mb-12">
            In an era of rising cyber threats and stringent regulatory requirements, 
            Cognivix IT Solutions ensures that prime contractors and federal agencies have access 
            to verified, cleared, and highly skilled technical talent.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            <div className="flex items-start gap-4">
              <div className="h-6 w-6 rounded-full bg-primary flex-shrink-0" />
              <p><span className="text-darktext font-bold">NIST 800-171 Compliance</span> - Internal data handling follows strict federal security guidelines.</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-6 w-6 rounded-full bg-primary flex-shrink-0" />
              <p><span className="text-darktext font-bold">CMMC Readiness</span> - Ready to support contractors in meeting Cyber Maturity Model Certifications.</p>
            </div>
          </div>

          <div className="mt-12">
            <a href="/about/mission" className="inline-flex items-center gap-3 text-primary font-black uppercase tracking-[0.2em] text-xs group">
              Full Strategy <span className="group-hover:translate-x-2 transition-transform">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  // Enhanced Online Images for the Hero Slider
  const heroImages = [
     // Cyber Security / Servers
     'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80', // High-end Corporate Architecture
    'https://as2.ftcdn.net/v2/jpg/09/02/53/83/1000_F_902538380_6CklzxlTjTxjxDhwwD3uLd0XflZ1DsSA.jpg', // Professional Meeting
    'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80',
    
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',  // Data Analytics // Original Image as Backup
  ];

  return (
    <main className="min-h-screen bg-base scroll-smooth w-full overflow-x-hidden">
      <Navbar />
      
      {/* 1. Hero Section - FULL WIDTH NO SIDE GAPS */}
      <section className="relative h-[85vh] w-full flex items-center text-darktext overflow-hidden bg-dark">
        <div className="absolute inset-0 z-0 w-full h-full">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={0} 
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            speed={1000}
            className="h-full w-full"
          >
            {heroImages.map((src, index) => (
              <SwiperSlide key={index} className="w-full h-full">
                <div className="relative w-full h-full">
                  <img 
                    src={src}
                    alt={`Federal Mission ${index + 1}`}
                    className="w-full h-full object-cover object-center block opacity-100"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent z-10 pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl space-y-8">
            {/* <div className="inline-block px-90 py-1 border border-primary text-primary text-xs font-bold uppercase tracking-widest bg-dark/50 backdrop-blur-sm">
              Est. 2026 | Federal Staffing & Capture
            </div> */}
            <h1 className="text-20xl md:text-90xl font-black leading-[1] uppercase tracking-tighter drop-shadow-lg">
              The Standard in <br />
              <span className="text-primary underline decoration-4 underline-offset-8">Federal</span> Growth
            </h1>
            <p className="text-xl text-darktext/80 max-w-lg leading-relaxed border-l-4 border-primary pl-6 drop-shadow-md">
              Providing technical proposal leadership and cleared staffing for contractors who cannot afford to lose in the federal marketplace.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <a href="#contact" className="bg-primary hover:bg-primary/80 px-10 py-4 text-lg font-black uppercase transition-all shadow-2xl active:scale-95 text-center">
                Partner With Us
              </a>
              <a href="#capabilities" className="border-2 border-white hover:bg-base hover:text-basetext px-10 py-3 text-lg font-black uppercase transition-all text-center">
                Capabilities
              </a>
            </div>
          </div>
        </div>
      </section>

      <Agencies />
      <MissionSection />
      
      <div id="about"><AboutSection /></div>
      <Stats />
      
      <div id="services"><Services /></div>
      <div id="capabilities"><Capabilities /></div>

      {/* Final Contact Section with Improved Styling */}
      <section id="contact" className="bg-base py-24 border-t">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h2 className="text-5xl font-black text-basetext mb-6 uppercase tracking-tight">Built for the Mission.</h2>
          <p className="text-basetext/70 text-xl mb-12">
            Cognivix IT Solutions is currently accepting new partnerships for FY2026/27 capture cycles. 
          </p>
          <div className="lg:max-w-2xl mx-auto bg-base p-120 shadow-2xl rounded-2xl border-t-1 border-red-200">
             <h3 className="text-3xl font-black mb-8 text-basetext uppercase"></h3>
             <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
