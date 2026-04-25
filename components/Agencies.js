export default function Agencies() {
  const agencies = [
    { name: "DHS", logo: "/logos/dhs.svg" },
    { name: "DoD", logo: "/logos/dod.svg" },
    { name: "DoJ", logo: "/logos/doj.svg" },
    { name: "GSA", logo: "/logos/gsa.svg" },
    { name: "NASA", logo: "/logos/nasa.svg" },
    { name: "DoE", logo: "/logos/doe.svg" },
    { name: "HHS", logo: "/logos/hhs.svg" },
  ];

  return (
    <div className="bg-white py-12 border-b border-slate-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {agencies.map((agency) => (
            <a 
              key={agency.name} 
              href="#capabilities" 
              className="group flex flex-col items-center gap-3 transition-all duration-300 hover:scale-105"
              title={agency.name}
            >
              <div className="relative h-12 md:h-16 w-auto flex items-center justify-center">
                <img 
                  src={agency.logo} 
                  alt={agency.name} 
                  className="h-full w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
                />
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-red-600 transition-colors">
                {agency.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}