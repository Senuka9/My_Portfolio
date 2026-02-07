'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-slate-400 text-sm font-medium tracking-wider uppercase mb-4"
            >
              Full-Stack Developer
            </motion.p>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
              Building digital experiences that matter
            </h1>
            
            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-lg">
              I craft scalable web applications with clean architecture, 
              focusing on performance, accessibility, and exceptional user experiences.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-950 rounded-full font-medium text-sm hover:bg-slate-200 transition-colors duration-200"
              >
                View my work
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 text-slate-300 hover:text-white font-medium text-sm transition-colors duration-200"
              >
                About me
              </Link>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Avatar/Profile placeholder - replace with actual image */}
              <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-800 flex items-center justify-center">
                <span className="text-6xl sm:text-7xl lg:text-8xl font-semibold text-slate-700">S</span>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-slate-800/50 -z-10" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-slate-800/30 -z-10" />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-slate-500"
          >
            <span className="text-xs tracking-wider uppercase">Scroll</span>
            <div className="w-px h-8 bg-slate-700" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
