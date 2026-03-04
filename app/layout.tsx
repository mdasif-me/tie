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
  title: 'The Implant Engine',
  description:
    'The Proven Growth Engine for Full-Arch Providers. Scale All-on-X without junk leads, no-shows, or racing to the bottom on price.We build the infrastructure that turns clinical skill into predictable full-arch revenue.',
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
