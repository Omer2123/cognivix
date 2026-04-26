import './globals.css';
import SiteShell from '@/components/SiteShell';

const BASE_URL = 'https://cognivix.in';

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Cognivix IT Solutions | Federal Contracting & Proposal Development',
    template: '%s | Cognivix IT Solutions',
  },
  description:
    'Expert federal contracting, proposal writing, and bid management solutions. Helping government contractors win with NAICS code selection, contract vehicles, SLED contracting, and proposal development for DoD, DHS, GSA, and federal agencies.',
  keywords: [
    'proposal writing',
    'federal contracting',
    'bidding',
    'bid management',
    'contract vehicles',
    'naics',
    'contracting',
    'proposal development',
    'SLED',
    'federal',
    'government contracting',
    'GovCon',
    'federal IT solutions',
    'government IT services',
    'cybersecurity',
    'cleared staffing',
    'FedRAMP',
    'CMMC',
    'NIST',
    'federal agencies',
    'DoD',
    'DHS',
    'GSA',
    'capture management',
    'prime contractor',
    'subcontractor',
    'SAM.gov',
    'RFP response',
    'RFQ response',
    'technical proposal',
    'past performance',
    'small business federal contracting',
    'Cognivix IT Solutions',
  ],
  authors: [{ name: 'Cognivix IT Solutions', url: BASE_URL }],
  creator: 'Cognivix IT Solutions',
  publisher: 'Cognivix IT Solutions',
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Cognivix IT Solutions',
    title: 'Cognivix IT Solutions | Federal Contracting & Proposal Development',
    description:
      'Expert federal contracting, proposal writing, bid management, and government IT solutions. Supporting contractors with NAICS selection, contract vehicles, and SLED contracting.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Cognivix IT Solutions — Federal Contracting & Proposal Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cognivix IT Solutions | Federal Contracting & Proposal Development',
    description:
      'Expert federal contracting, proposal writing, bid management, and government IT solutions.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Cognivix IT Solutions',
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  description:
    'Federal contracting and government IT solutions firm specializing in proposal writing, bid management, contract vehicles, NAICS code strategy, SLED contracting, and cleared IT staffing.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '16 Mystic LN',
    addressLocality: 'Malvern',
    addressRegion: 'PA',
    postalCode: '19355-1942',
    addressCountry: 'US',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+13129129535',
      email: 'info@cognivix.in',
      contactType: 'customer service',
      areaServed: 'US',
    },
    {
      '@type': 'ContactPoint',
      email: 'hr@cognivix.in',
      contactType: 'human resources',
      areaServed: 'US',
    },
  ],
  knowsAbout: [
    'Federal Contracting',
    'Proposal Writing',
    'Bid Management',
    'Contract Vehicles',
    'NAICS Code Strategy',
    'SLED Contracting',
    'Government IT Solutions',
    'Cybersecurity',
    'FedRAMP',
    'CMMC',
    'Cleared Staffing',
    'SAM.gov',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="bg-[#0a0c10] antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
