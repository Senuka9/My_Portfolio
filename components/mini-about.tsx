'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, GraduationCap, MonitorSmartphone, Rocket, Sprout } from 'lucide-react';

const highlights = [
  {
    icon: <GraduationCap className="h-5 w-5 text-cyan-400" />,
    text: "Software Engineering Undergraduate"
  },
  {
    icon: <MonitorSmartphone className="h-5 w-5 text-emerald-400" />,
    text: "Java • React • Node.js • Next.js"
  },
  {
    icon: <Rocket className="h-5 w-5 text-purple-400" />,
    text: "Full-Stack Architecture & Scalable Systems"
  },
  {
    icon: <Sprout className="h-5 w-5 text-pink-400" />,
    text: "Fast Learner — Quickly adapts to any tech stack"
  }
];

export default function MiniAbout() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="section-shell relative z-10">
        <div className="grid gap-x-12 gap-y-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="section-kicker mb-4 w-fit">
              About the builder
            </div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Who I Am
            </h2>
            <p className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Building systems that scale. Designing interfaces that <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">captivate.</span>
            </p>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-300">
              <p>
                I’m <strong className="text-white font-semibold">Senuka Kazuhiro</strong>, a Software Engineering student passionate about building scalable and high-performance software. My core strengths reside in Java backend development, along with modern web technologies including React, Node.js, and Next.js.
              </p>
              <p>
                I possess strong analytical thinking and quick learning capabilities — capable of rapidly picking up any new programming language or framework required to build top-tier solutions.
              </p>
            </div>
            
            <div className="mt-10">
              <motion.div whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.99 }} className="inline-block">
                <Link
                  href="/about"
                  className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-cyan-400/25 bg-cyan-400/10 px-8 py-4 text-sm font-semibold text-cyan-200 transition-all duration-300 hover:bg-cyan-400/15 hover:text-cyan-100 hover:shadow-[0_20px_35px_-25px_rgba(34,211,238,0.6)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                >
                  Learn more about me
                  <div className="relative flex h-5 w-5 items-center justify-center overflow-hidden">
                    <ArrowRight className="absolute h-4 w-4 transition-transform duration-300 group-hover:translate-x-5" />
                    <ArrowRight className="absolute h-4 w-4 -translate-x-5 transition-transform duration-300 group-hover:translate-x-0" />
                  </div>
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Highlights Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="glass-panel p-8 sm:p-10 relative overflow-hidden group"
          >
            {/* Background glowing glow */}
            <div className={`absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`} />

            <div className="relative">
              <div className="section-kicker mb-5 w-fit">Quick highlights</div>
              <h3 className="text-lg font-semibold text-white mb-8 border-b border-white/10 pb-4">
                Quick Highlights
              </h3>
              
              <ul className="space-y-6">
                {highlights.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ x: 4 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                    className="flex items-center gap-4 text-slate-300 transition-colors hover:text-white"
                  >
                    <motion.div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/5 bg-white/5 shadow-inner transition-transform duration-300 hover:scale-110" whileHover={{ rotate: 6, scale: 1.08 }}>
                      {item.icon}
                    </motion.div>
                    <span className="font-medium text-[15px] sm:text-base leading-snug">
                      {item.text}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
