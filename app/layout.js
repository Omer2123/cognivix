import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Cognivix IT Solutions | Federal Strategy',
  description: 'Enterprise IT and Government Contracting Excellence',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0a0c10] antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}