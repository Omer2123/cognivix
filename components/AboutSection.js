export default function AboutSection() {
  return (
    <section className="py-20 bg-base">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left: Image with Overlaid Text */}
          <div className="lg:w-1/2 relative">
            <img 
              src="https://tse1.mm.bing.net/th/id/OIP.rT8TbuMNLMJplml5pKQIhQHaGC?rs=1&pid=ImgDetMain&o=7&rm=3" 
              alt="Federal Building" 
              className="rounded-lg shadow-2xl grayscale hover:grayscale-0 transition duration-500"
            />
            <div className="absolute bottom-6 left-6 bg-primary text-darktext p-6 rounded-md shadow-lg">
              <h3 className="text-3xl font-black uppercase">About Us</h3>
              <p className="text-sm">Your Trusted GovCon Partner</p>
            </div>
          </div>

          {/* Right: Content Section */}
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl font-extrabold text-basetext leading-tight">
              Built to Help Government Contractors Win, Comply, and Scale
            </h2>
            <p className="text-lg text-basetext/70 leading-relaxed">
              We are a government contracting support firm focused on helping federal contractors navigate 
              complexity. From proposal development and cleared recruitment to compliance-ready digital solutions, 
              we work as an extension of your team to improve win rates and reduce risk.
            </p>

            {/* Mission & Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-accent text-darktext rounded-lg shadow-md border-t-4 border-primary">
                <h4 className="text-xl font-bold mb-2">Our Vision</h4>
                <p className="text-sm text-darktext/70">
                  To become the most trusted growth partner for U.S. federal contractors, known for precision and results.
                </p>
              </div>
              <div className="p-6 bg-accent text-darktext rounded-lg shadow-md border-t-4 border-primary">
                <h4 className="text-xl font-bold mb-2">Our Mission</h4>
                <p className="text-sm text-darktext/70">
                  To help government contractors win more federal opportunities by delivering compliant proposals and specialized talent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}