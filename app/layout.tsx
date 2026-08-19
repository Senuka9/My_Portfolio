import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import AnimatedBackground from '@/components/animated-background';
import Preloader from '@/components/preloader';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Senuka Kazuhiro – Software Engineer Portfolio',
  description:
    'Official portfolio of Senuka Kazuhiro, software engineering graduate building scalable real-world applications.',
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/icon.png',
  },
  verification: {
    google: "hoel7_Ji4Vcs6iQyC9-_M52KNNb5cqd-dvwsjXlxSL4",
  },
  keywords: [
    'Senuka Kazuhiro',
    'Senuka portfolio',
    'software engineer Senuka',
    'Senuka developer',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body className={`${inter.className} ${spaceGrotesk.className}`}>
        <Preloader />
        <AnimatedBackground />
        <div className="relative z-10">{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
