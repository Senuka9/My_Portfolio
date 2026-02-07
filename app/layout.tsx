import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import AnimatedBackground from '@/components/animated-background';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Senuka Kazuhiro – Software Engineer Portfolio',
  description:
    'Official portfolio of Senuka Kazuhiro, software engineering undergraduate building scalable real-world applications.',
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
      <body className={inter.className}>
        <AnimatedBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
