import './globals.css';
import SiteShell from '@/components/SiteShell';

export const metadata = {
  title: 'Cognivix IT Solutions | Federal Strategy',
  description: 'Enterprise IT and Government Contracting Excellence',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0a0c10] antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}