// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-accent border-t border-slate-800 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2">
          <h3 className="text-2xl font-black text-darktext uppercase tracking-tighter mb-6">
            Cognivix <span className="text-primary">IT Solutions</span>
          </h3>
          <p className="text-darktext/70 max-w-sm text-sm leading-relaxed uppercase font-bold tracking-tight">
            The architect of modern digital and physical infrastructure. 
            Engineering resilience through federal-grade strategy and structural modernization.
          </p>
        </div>
        <div>
          <h4 className="text-darktext font-black uppercase text-xs tracking-widest mb-6">Strategic Divisions</h4>
          <ul className="space-y-4 text-[10px] font-bold text-darktext/70 uppercase tracking-widest">
            <li><a href="/services" className="hover:text-primary transition">Cyber Governance</a></li>
            <li><a href="/services" className="hover:text-primary transition">Digital Grids</a></li>
            <li><a href="/governance" className="hover:text-primary transition">Policy Control</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-darktext font-black uppercase text-xs tracking-widest mb-6">Address</h4>
          <p className="text-[10px] font-bold text-darktext/70 uppercase tracking-widest">16 Mystic LN Malvern, Pennsylvania 19355-1942, United States</p>
          <p className="text-[12px] font-bold text-primary uppercase tracking-widest mt-2 underline">info@cognivix.in</p>
    <p className="text-[12px] font-bold text-primary uppercase tracking-widest mt-2 underline">hr@cognivix.in</p>
    {/* <p className="text-[12px] font-bold text-primary uppercase tracking-widest mt-2 underline">sales@cognivix.in</p> */}
     <p className="text-[12px] font-bold text-primary uppercase tracking-widest mt-2 underline">+13129129535</p>
        </div>
      </div>

      {/* Attribution & Legal Strip */}
      <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-[8px] font-black text-darktext/70 uppercase tracking-[0.3em]">
        <div className="flex flex-col gap-2">
          <span>© 2026 Cognivix Strategic Operations</span>
           <span className="text-darktext/70">
            Developed by <a href="https://www.cognivix.in" target="_blank" className="text-primary/50 hover:text-primary transition underline">Cognivix It Solutions
2026 Copyright ©️</a>
          </span>
  {/* <span className="text-darktext/70">
            Licence <a href="####" target="_blank" className="text-primary/50 hover:text-primary transition underline">Copyright ©️</a>
          </span>
  <span className="text-darktext/70">
            Engineered by <a href="https://github.com/UniqueThinker-Rahul" target="_blank" className="text-primary/50 hover:text-primary transition underline">UniqueThinker-Rahul</a>
          </span>
          <span className="text-darktext/70">
            Maintained by <a href="https://www.growthservice.in/" target="_blank" className="text-primary/50 hover:text-primary transition underline">Growth Service | Professional Digital Solutions Agency</a>
          </span> */}
          
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
            Secure Session: Active
          </span>
        </div>
      </div>
    </footer>
  );
}
