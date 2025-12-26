import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Arovis - AI-Powered Growth Infrastructure',
  description: 'We build growth systems that don\'t guess. AI-powered growth infrastructure for advertisers and publishers who care about real performance.',
  keywords: ['AI', 'Growth', 'Marketing', 'Advertising', 'Analytics', 'Performance'],
  openGraph: {
    title: 'Arovis - AI-Powered Growth Infrastructure',
    description: 'We build growth systems that don\'t guess.',
    type: 'website',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arovis - AI-Powered Growth Infrastructure',
    description: 'We build growth systems that don\'t guess.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
