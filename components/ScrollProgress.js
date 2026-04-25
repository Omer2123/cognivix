// components/ScrollProgress.js
'use client';
import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.documentElement;
      const scrollSource = element.scrollTop || document.body.scrollTop;
      const scrollMax = element.scrollHeight - element.clientHeight;
      setWidth((scrollSource / scrollMax) * 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-white/5">
      <div 
        className="h-full bg-red-600 shadow-[0_0_10px_#dc2626]" 
        style={{ width: `${width}%` }}
      />
    </div>
  );
}