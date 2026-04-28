'use client';
import Link from 'next/link';
import Image from 'next/image'; // Importing Next.js Image component for optimization
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // LOGO URL
  const logoUrl = "/logo.png";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'About',
      href: '/about',
      subLinks: [
        { name: 'Mission & Vision', href: '/about/mission' },
        { name: 'Core Values', href: '/about/values' },
        { name: 'Leadership', href: '/about/leadership' },
        { name: 'Compliance & Certs', href: '/about/compliance' },
        { name: 'Past Performance', href: '/about/performance' }
      ]
    },
    {
      name: 'Services',
      href: '/services',
      subLinks: [
        { name: 'Cybersecurity', href: '/services/cyber' },
        { name: 'Cloud Architecture', href: '/services/cloud' },
        { name: 'Technical Governance', href: '/services/governance' },
        { name: 'GIS & Remote Sensing', href: '/services/gis' },
        { name: 'Proposal Engineering', href: '/services/proposal' },
        { name: 'Recruitment & Staffing', href: '/services/recruitment' }
      ]
    },
    {
      name: 'Sectors',
      href: '/sectors',
      subLinks: [
        { name: 'Federal', href: '/sectors#federal' },
        { name: 'Commercial', href: '/sectors#commercial' }
      ]
    },
    { name: 'Contractor’s Corner', href: '/contractors-corner' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${isScrolled || isOpen ? 'bg-secondary/95 backdrop-blur-lg border-b border-white/10' : 'bg-transparent'
      } py-4 md:py-6`}>
      {/* Increased padding slightly to accommodate larger logo */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center relative">

        {/* Brand Identity with Increased Logo Size */}
        <Link href="/" className="z-[110] flex items-center gap-4" onClick={() => setIsOpen(false)}>
          <img
            src={logoUrl}
            alt="Cognivix Logo"
            className="h-12 md:h-16 w-auto object-contain brightness-0 invert transition-all"
          /> {/* Increased height from h-8/h-10 to h-12/h-16 */}
          <div className="flex flex-col">
            {/* <span className="text-base md:text-3xl font-black text-darktext tracking-tighter uppercase leading-none">
              COGNIVIX <span className="text-primary">IT</span>
              <span className="text-primary"> SOLUTIONS</span>
            </span> */}
            <span className="hidden sm:block text-[7px] md:text-[10px] font-bold text-darktext/70 uppercase tracking-[0.3em]">
              Strategic Operations
            </span>
          </div>
        </Link>

        {/* Right Section: Nav */}
        <div className="flex items-center gap-3 md:gap-8 z-[110]">
          <div className="hidden lg:flex gap-6 xl:gap-8 items-center mr-4">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  href={link.href}
                  className="text-[10px] xl:text-[11px] font-black uppercase tracking-widest text-darktext/70 group-hover:text-primary transition-colors py-4"
                >
                  {link.name}
                </Link>

                {link.subLinks && (
                  <div className="absolute top-full left-0 w-48 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="bg-secondary border border-white/10 rounded-lg shadow-2xl overflow-hidden backdrop-blur-xl">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="block px-4 py-3 text-[9px] font-bold text-darktext/70 hover:text-darktext hover:bg-primary transition-colors uppercase tracking-widest border-b border-white/5 last:border-0"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-darktext p-2 hover:bg-base/5 rounded-lg transition-colors"
            aria-label="Toggle Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-end">
              <span className={`h-0.5 bg-base transition-all duration-300 ${isOpen ? 'w-7 -rotate-45 translate-y-2' : 'w-7'}`}></span>
              <span className={`h-0.5 bg-base transition-all duration-300 ${isOpen ? 'opacity-0' : 'w-5'}`}></span>
              <span className={`h-0.5 bg-base transition-all duration-300 ${isOpen ? 'w-7 rotate-45 -translate-y-2.5' : 'w-7'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Slide-Out Menu */}
        <div className={`lg:hidden fixed top-0 right-0 h-screen w-[280px] sm:w-[350px] bg-secondary border-l border-white/10 shadow-2xl transition-transform duration-500 ease-in-out z-[105] p-10 pt-24 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
          <div className="flex flex-col gap-8">
            <span className="text-[11px] font-black text-primary uppercase tracking-[0.5em] mb-4">Navigational Matrix</span>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-black uppercase tracking-widest text-darktext/70 hover:text-darktext transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Backdrop Overlay */}
        {isOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    </nav>
  );
}
