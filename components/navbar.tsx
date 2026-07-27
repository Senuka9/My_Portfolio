'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Learning', href: '/learning' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-4 md:top-6 inset-x-0 z-[100] flex justify-center px-4 pointer-events-none"
      >
        <nav 
          className="pointer-events-auto flex items-center justify-between gap-4 md:gap-8 px-5 md:px-6 h-14 rounded-full bg-slate-950/70 backdrop-blur-2xl border border-white/10 shadow-[0_20px_60px_-30px_rgba(2,6,23,0.9)]"
        >
          <div className="flex items-center justify-between w-full md:w-auto md:gap-8">
            {/* Logo */}
            <Link href="/" className="relative group flex items-center gap-1 shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-400 rounded-full">
              <span className="text-slate-500 font-medium">&lt;</span>
              <span className="text-lg font-semibold tracking-tight text-white">
                Senuka
              </span>
              <span className="text-slate-500 font-medium">/&gt;</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div key={item.href} whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href={item.href}
                      className={`relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-full ${
                        isActive 
                            ? 'text-white bg-white/10 shadow-inner' 
                            : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex shrink-0 items-center gap-3">
              <motion.a whileHover={{ y: -1, scale: 1.03 }} whileTap={{ scale: 0.98 }} href="/resume.pdf" download="Senuka_Resume.pdf" className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-white border border-white/20 hover:bg-white/10 rounded-full hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400">
                Resume
              </motion.a>
              <motion.div whileHover={{ y: -1, scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 px-5 py-2 text-sm font-medium text-slate-950 bg-white rounded-full hover:scale-105 active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                >
                  Get in touch
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden relative ml-auto flex h-10 w-10 items-center justify-center rounded-full text-white transition hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5">
                <span
                  className={`absolute left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ease-out ${
                    isOpen ? 'top-2 rotate-45' : 'top-0'
                  }`}
                />
                <span
                  className={`absolute left-0 top-2 w-6 h-0.5 bg-current transform transition-all duration-300 ease-out ${
                    isOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                  }`}
                />
                <span
                  className={`absolute left-0 w-6 h-0.5 bg-current transform transition-all duration-300 ease-out ${
                    isOpen ? 'top-2 -rotate-45' : 'top-4'
                  }`}
                />
              </div>
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-slate-950/95 backdrop-blur-xl z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-x-0 top-16 z-50 bg-slate-950 border-b border-white/5 md:hidden"
            >
              <nav className="px-6 py-8 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-3 text-2xl font-medium text-white hover:text-slate-300 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="pt-6 flex flex-col gap-4"
                >
                  <a
                    href="/resume.pdf"
                    download="Senuka_Resume.pdf"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-white border border-white/20 hover:bg-white/10 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                  >
                    Download Resume
                  </a>
                  <Link
                    href="/#contact"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-medium text-slate-950 bg-white rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                  >
                    Get in touch
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
