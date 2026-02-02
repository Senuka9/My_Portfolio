import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased relative">
      <Navbar />
      <Hero />
      <Contact />
      <Footer />
    </div>
  );
}
