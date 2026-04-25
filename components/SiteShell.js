'use client';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';

const NO_CHROME_ROUTES = ['/admin', '/login'];

export default function SiteShell({ children }) {
  const pathname = usePathname();
  const hideChrome = NO_CHROME_ROUTES.some((r) => pathname.startsWith(r));

  if (hideChrome) return <>{children}</>;

  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
