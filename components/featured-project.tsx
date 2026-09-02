'use client';

import { motion } from 'framer-motion';
import { Code2, ArrowUpRight, Github } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';

export default function FeaturedProject() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-[2rem] border border-cyan-400/30 bg-slate-900/60 p-6 md:p-8 shadow-[0_30px_60px_-35px_rgba(2,6,23,0.95)] backdrop-blur-md mb-8 transition-all hover:shadow-[0_40px_80px_-45px_rgba(34,211,238,0.4)]"
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: isHovered
            ? `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34,211,238,0.18), transparent 40%)`
            : undefined,
        }}
      />
      
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      
      <div className="absolute right-6 top-6 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-cyan-200 shadow-[0_0_12px_rgba(34,211,238,0.3)] z-10">
        Main Project
      </div>

      <div className="relative z-10 grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="flex flex-col pt-6 lg:pt-0">
          <div className="flex items-center gap-3">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/40 bg-cyan-400/15 shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              <Code2 className="h-6 w-6 text-cyan-300" />
            </div>
            <div>
              <h3 className="text-3xl font-bold tracking-tight text-white transition group-hover:text-cyan-50">
                Silent Help
              </h3>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">Featured Work</p>
            </div>
          </div>
          
          <p className="mt-6 text-lg leading-8 text-slate-300">
            A specialized support platform designed to provide accessible and seamless assistance, focusing on clean user experience and robust features.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border bg-cyan-500/10 text-cyan-200 border-cyan-500/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em]">React</span>
            <span className="rounded-full border bg-slate-700/10 text-slate-200 border-slate-700/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em]">Next.js</span>
            <span className="rounded-full border bg-blue-500/10 text-blue-200 border-blue-500/20 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.24em]">TypeScript</span>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://silent-help-six.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400/10 border border-cyan-400/30 px-7 py-3.5 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:bg-cyan-400/20 hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(34,211,238,0.4)]"
            >
              Visit Live Site
              <ArrowUpRight className="h-4 w-4" />
            </a>
            
            <a
              href="https://github.com/Senuka9/silent-help"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-7 py-3.5 text-sm font-semibold text-slate-300 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:text-white"
            >
              <Github className="h-4 w-4" />
              Source Code
            </a>
          </div>
        </div>
        
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl group-hover:border-cyan-400/40 transition-all duration-500 lg:scale-[1.02] group-hover:shadow-[0_20px_40px_-20px_rgba(34,211,238,0.3)]">
          <Image 
            src="/images/silent-help.jpg"
            alt="Silent Help Dashboard Mockup"
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <a 
            href="https://silent-help-six.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-20"
            aria-label="Visit Silent Help"
          />
        </div>
      </div>
    </motion.div>
  );
}
