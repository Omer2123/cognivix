export default function Agencies() {
  const labels = ["DHS", "DoD", "DoJ", "GSA", "NASA", "DoE", "HHS"];
  return (
    <div className="bg-white py-12 border-b">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {labels.map((name) => (
            <a 
              key={name} 
              href="#capabilities" 
              className="text-2xl font-black text-slate-300 hover:text-red-600 transition-colors cursor-pointer uppercase tracking-tighter"
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}