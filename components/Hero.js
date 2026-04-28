import ContactForm from './ContactForm';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-dark">
      {/* Background Image with half-transparent overlay */}
      <div 
        className="absolute inset-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=2070')" }} 
      >
        <div className="absolute inset-0 bg-dark/80 backdrop-blur-sm" />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-block px-4 py-1 border border-primary/50 bg-primary/10 text-red-500 text-xs font-bold uppercase tracking-[0.2em] rounded-full">
              Federal Capture & Staffing Excellence
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-darktext leading-[1.1] md:leading-[0.9] uppercase tracking-tighter">
              The Standard in <br />
              <span className="text-primary">Federal</span> Growth
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
              Cognivix IT Solutions provides the specialized workforce and technical proposal leadership required to navigate the complexities of the Department of Defense and Intelligence Community.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-primary hover:bg-primary/80 text-darktext px-10 py-4 font-black uppercase transition-all shadow-2xl">
                Our Capabilities
              </button>
              <button className="border border-white/20 hover:bg-base/10 text-darktext px-10 py-4 font-black uppercase transition-all">
                Contract Vehicles
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-base/5 backdrop-blur-md p-1 border border-white/10 rounded-2xl shadow-2xl">
            <div className="bg-base rounded-xl p-2">
               <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}