'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Learning', href: '/learning' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-linear-to-b from-slate-950/95 to-slate-950/80 backdrop-blur-lg border-b border-slate-800/50 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <a href="#" className="text-lg font-bold text-white">Senuka</a>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-10 items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-300 hover:text-cyan-400 transition duration-300 text-sm font-medium relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-blue-400 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex gap-4">
          <a
            href="/#contact"
            className="px-6 py-2.5 bg-linear-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-blue-500/30 transition duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800/50 px-6 py-4 space-y-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-slate-300 hover:text-cyan-400 transition text-sm font-medium py-2"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/#contact"
            className="block w-full text-center px-6 py-2.5 bg-linear-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium text-sm mt-4"
          >
            Get In Touch
          </a>
        </div>
      )}
    </nav>
  );
}