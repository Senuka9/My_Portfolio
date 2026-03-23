'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Code2, Github, Linkedin, Send } from 'lucide-react';

function TypewriterText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  
  useEffect(() => {
    let current = "";
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        current += text[i];
        setDisplayed(current);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="flex items-center h-6 mt-6">
      <span className="text-sm font-bold uppercase tracking-[0.15em] text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">
        {displayed}
      </span>
      <span className="w-1.5 h-4 bg-emerald-400 ml-1.5 animate-pulse rounded-full" />
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-20 pt-28 sm:pb-32 sm:pt-36 lg:px-8 lg:pt-40 min-h-[90vh] flex items-center">
      {/* Background Glows */}
      <div className="absolute inset-x-0 top-0 h-[50rem] bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_42%)]" />
      <div className="absolute inset-x-0 top-0 h-[40rem] bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.15),transparent_50%)]" />
      <div className="absolute left-1/2 top-10 h-32 w-[60%] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[100px]" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 mt-4"
            >
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Available for internships
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="max-w-3xl text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-[4.5rem] leading-[1.1]"
            >
              Designing <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">scalable backend systems</span> and crafting modern web experiences.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <TypewriterText text="Full-Stack Developer | Java Enthusiast | React Builder" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-6 text-xl font-medium text-cyan-50"
            >
              Clean code. Smart systems. Better user experiences.
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-300/90 font-light"
            >
              Software Engineering undergraduate focused on building scalable full-stack applications using <span className="font-semibold text-white">Java, React, and Node.js</span>.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-4 sm:gap-5"
            >
              <Link
                href="/projects"
                className="group relative inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-950 transition-all duration-300 hover:scale-[1.02] hover:bg-slate-100 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
              >
                View my work
                <div className="relative flex h-5 w-5 items-center justify-center overflow-hidden">
                  <ArrowRight className="absolute h-4 w-4 transition-transform duration-300 group-hover:translate-x-5" />
                  <ArrowRight className="absolute h-4 w-4 -translate-x-5 transition-transform duration-300 group-hover:translate-x-0" />
                </div>
              </Link>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-medium text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white hover:scale-[1.02]"
              >
                Download Resume
              </a>

              <Link
                href="#contact" 
                className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-8 py-4 text-sm font-medium text-cyan-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:bg-cyan-500/20 hover:text-cyan-100 hover:scale-[1.02] shadow-[0_0_20px_-5px_rgba(6,182,212,0.3)]"
              >
                Contact Me
                <Send className="h-4 w-4" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
              className="mt-8 flex items-center gap-4 pl-2"
            >
              <a 
                href="https://github.com/Senuka9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-300"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/senuka-kazuhiro-703b0a366/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BTtpp9GUCRaCdicyD66yIFQ%3D%3D" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm lg:max-w-[400px] lg:justify-self-end group mt-10 lg:mt-0"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/50 shadow-2xl backdrop-blur-xl group-hover:border-cyan-500/30 transition-colors duration-500">
              {/* Inner subtle glow */}
              <div className="absolute inset-0 z-10 bg-gradient-to-tr from-cyan-500/10 via-transparent to-emerald-500/10 opacity-50 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
              
              {/* Glass reflection */}
              <div className="absolute inset-0 z-10 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
              <div className="absolute -inset-[100%] z-10 top-0 w-[50%] -rotate-45 block bg-gradient-to-r from-transparent via-white/10 to-transparent transform translate-x-[-200%] transition-transform duration-1000 group-hover:translate-x-[400%] pointer-events-none" />

              {/* The Actual Image */}
              <div className="absolute inset-0">
                <Image
                  src="/images/senuka-1.png"
                  alt="Senuka Kazuhiro"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  priority
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Decorative Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 z-20 rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-md transition-transform duration-500 group-hover:-translate-y-2">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-400">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Full-Stack Developer</p>
                    <p className="mt-1 text-[11px] text-slate-400 font-medium tracking-wide">Java • Node.js • React • Next.js</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Glowing ring behind the image */}
            <div className="absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
