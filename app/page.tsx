import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Stats from '@/components/stats';
import LogoWall from '@/components/logo-wall';
import MiniAbout from '@/components/mini-about';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import AnimatedBackground from '@/components/animated-background';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white antialiased">
      <AnimatedBackground />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.18)_0%,rgba(2,6,23,0.72)_45%,rgba(2,6,23,1)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Stats />
        <LogoWall />
        <MiniAbout />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
