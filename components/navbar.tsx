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
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4"
      >
        <nav 
          className={`max-w-5xl mx-auto px-6 rounded-full transition-all duration-500 ${
            scrolled
              ? 'bg-slate-950/80 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/20'
              : 'bg-transparent'
          }`}
        >
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <Link href="/" className="relative group flex items-center gap-1">
              <span className="text-slate-500 font-medium">&lt;</span>
              <span className="text-lg font-semibold tracking-tight text-white">
                Senuka
              </span>
              <span className="text-slate-500 font-medium">/&gt;</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-3 py-1.5 text-sm font-medium transition-all duration-200 rounded-full ${
                      isActive 
                        ? 'text-white bg-white/10' 
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-slate-950 bg-white rounded-full hover:bg-slate-200 transition-colors duration-200"
              >
                Get in touch
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center text-white"
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
            </button>
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
                  className="pt-6"
                >
                  <Link
                    href="/#contact"
                    onClick={() => setIsOpen(false)}
                    className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-slate-950 bg-white rounded-full"
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
