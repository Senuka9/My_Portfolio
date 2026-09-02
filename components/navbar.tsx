'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, ArrowUpRight } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Learning', href: '/learning' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const pathname = usePathname();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 md:top-6 inset-x-0 z-[100] flex justify-center px-4 pointer-events-none"
      >
        <nav
          className={`pointer-events-auto relative flex items-center justify-between gap-4 md:gap-8 px-5 md:px-6 h-14 rounded-full border overflow-hidden transition-all duration-500 ${
            scrolled
              ? 'bg-slate-950/85 border-cyan-500/20 shadow-[0_20px_50px_-15px_rgba(34,211,238,0.25)] backdrop-blur-2xl'
              : 'bg-slate-950/70 border-white/10 shadow-[0_20px_60px_-30px_rgba(2,6,23,0.9)] backdrop-blur-2xl'
          }`}
        >
          {/* Subtle glowing halo line at top of nav bar */}
          <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

          <div className="flex items-center justify-between w-full md:w-auto md:gap-8">
            {/* Animated Logo */}
            <Link
              href="/"
              className="relative group flex items-center gap-1.5 shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 rounded-full"
            >
              <motion.span
                whileHover={{ rotate: -12, scale: 1.15 }}
                className="text-cyan-400 font-mono font-bold text-sm"
              >
                &lt;
              </motion.span>
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-cyan-200 transition-colors">
                Senuka
              </span>
              <motion.span
                whileHover={{ rotate: 12, scale: 1.15 }}
                className="text-cyan-400 font-mono font-bold text-sm"
              >
                /&gt;
              </motion.span>

              {/* Online Pulse Dot */}
              <span className="relative flex h-2 w-2 ml-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
            </Link>

            {/* Desktop Navigation with Animated Sliding Background Pill */}
            <div
              className="hidden md:flex items-center gap-1 relative"
              onMouseLeave={() => setHoveredPath(null)}
            >
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const isHovered = hoveredPath === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onMouseEnter={() => setHoveredPath(item.href)}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full ${
                      isActive ? 'text-white font-semibold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {/* Active Pill Animation */}
                    {isActive && (
                      <motion.div
                        layoutId="active-nav-pill"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-sky-500/20 to-emerald-500/20 border border-cyan-400/30 shadow-[0_0_20px_rgba(34,211,238,0.25)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}

                    {/* Hover Pill Animation */}
                    {isHovered && !isActive && (
                      <motion.div
                        layoutId="hover-nav-pill"
                        className="absolute inset-0 rounded-full bg-white/5"
                        transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      />
                    )}

                    <span className="relative z-10 flex items-center gap-1.5">
                      {item.label}
                      {isActive && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,1)]"
                        />
                      )}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTAs with Hover Animations */}
            <div className="hidden md:flex shrink-0 items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.96 }}
                href="/resume.pdf"
                download="Senuka_Resume.pdf"
                className="relative group inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-slate-200 border border-white/15 bg-white/5 rounded-full backdrop-blur-md transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:text-white"
              >
                <span>Resume</span>
                <ArrowUpRight className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 transition-opacity" />
              </motion.a>

              <motion.div whileHover={{ scale: 1.05, y: -1 }} whileTap={{ scale: 0.96 }}>
                <Link
                  href="/#contact"
                  className="relative inline-flex items-center gap-2 px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-cyan-300 via-sky-200 to-emerald-300 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(52,211,153,0.6)] transition-all duration-300"
                >
                  <Sparkles className="h-3.5 w-3.5 text-slate-950" />
                  <span>Get In Touch</span>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Toggle Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden relative ml-auto flex h-10 w-10 items-center justify-center rounded-full text-cyan-300 bg-white/5 border border-white/10 hover:bg-white/10"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-4 flex flex-col justify-between">
                <span
                  className={`block h-0.5 w-full bg-cyan-300 rounded-full transform transition-all duration-300 origin-center ${
                    isOpen ? 'translate-y-1.5 rotate-45' : ''
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-cyan-300 rounded-full transition-all duration-300 ${
                    isOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`block h-0.5 w-full bg-cyan-300 rounded-full transform transition-all duration-300 origin-center ${
                    isOpen ? '-translate-y-1.5 -rotate-45' : ''
                  }`}
                />
              </div>
            </motion.button>
          </div>
          
          {/* Scroll Progress Bar */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 opacity-75"
            style={{ scaleX }}
          />
        </nav>
      </motion.header>

      {/* Mobile Staggered Menu Curtain */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-slate-950/90 backdrop-blur-2xl z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            >
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.97 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-4 top-20 z-50 rounded-3xl border border-white/10 bg-slate-950/95 p-6 shadow-2xl md:hidden overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
              <nav className="space-y-3">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ delay: index * 0.08, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-lg font-semibold transition-all ${
                          isActive
                            ? 'bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border border-cyan-400/30 text-white'
                            : 'text-slate-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && <Sparkles className="h-4 w-4 text-cyan-300 animate-pulse" />}
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="pt-4 flex flex-col gap-3"
                >
                  <a
                    href="/resume.pdf"
                    download="Senuka_Resume.pdf"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-200 border border-white/15 bg-white/5 rounded-2xl hover:bg-white/10"
                  >
                    <span>Download Resume</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <Link
                    href="/#contact"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-300 to-emerald-300 rounded-2xl shadow-lg"
                  >
                    <Sparkles className="h-4 w-4" />
                    <span>Get In Touch</span>
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
