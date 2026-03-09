import type { Metadata } from 'next';
import { Geist_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const satoshi = localFont({
  src: [
    {
      path: '../public/fonts/fonts/Satoshi-Variable.woff2',
      style: 'normal',
    },
    {
      path: '../public/fonts/fonts/Satoshi-VariableItalic.woff2',
      style: 'italic',
    },
  ],
  variable: '--font-satoshi',
  display: 'swap',
  weight: '300 900',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://theimplantengine.vercel.app/'),
  title: 'The Implant Engine | Full-Arch Dental Growth Engine',
  description:
    'The Proven Growth Engine for Full-Arch Providers. Scale All-on-X without junk leads, no-shows, or racing to the bottom on price. We build the infrastructure that turns clinical skill into predictable full-arch revenue.',
  keywords: [
    'full-arch dental marketing',
    'all-on-x marketing',
    'dental implant marketing',
    'implant lead generation',
    'dental practice growth',
    'dental implant seo',
    'full-arch patient acquisition',
    'implant case acceptance',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'The Implant Engine',
    title: 'The Implant Engine | Full-Arch Dental Growth Engine',
    description:
      'Scale All-on-X without junk leads, no-shows, or racing to the bottom on price. The Implant Engine helps full-arch providers build predictable revenue.',
    images: [
      {
        url: '/hero.webp',
        width: 1200,
        height: 630,
        alt: 'The Implant Engine for Full-Arch Providers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Implant Engine | Full-Arch Dental Growth Engine',
    description:
      'Scale All-on-X with qualified patients and predictable full-arch revenue.',
    images: ['/hero.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${satoshi.variable} ${geistMono.variable} antialiased`}
        style={{ fontFamily: 'var(--font-satoshi), sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
