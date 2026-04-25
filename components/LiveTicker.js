// components/LiveTicker.js
export default function LiveTicker() {
  return (
    <div className="fixed bottom-0 w-full bg-red-600 text-white py-2 z-50 overflow-hidden select-none">
      <div className="whitespace-nowrap animate-marquee font-black uppercase text-[10px] tracking-[0.3em]">
        PROJECT ALPHA: ACTIVE // GRID SECURED // LOGISTICS CORRIDOR 12: OPERATIONAL // STRUCTURAL INTEGRITY: 100% // FEDERAL UPLINK: STABLE // 
      </div>
    </div>
  );
}