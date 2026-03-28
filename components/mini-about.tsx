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
    text: "Full-Stack Developer"
  },
  {
    icon: <Rocket className="h-5 w-5 text-purple-400" />,
    text: "Interested in scalable systems & UI/UX"
  },
  {
    icon: <Sprout className="h-5 w-5 text-pink-400" />,
    text: "Currently learning React & Node.js deeper"
  }
];

export default function MiniAbout() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-2 lg:items-center">
          
          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Who I Am
            </h2>
            <p className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Building systems that scale. Designing interfaces that <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">captivate.</span>
            </p>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-300">
              <p>
                I’m a 3rd-year Software Engineering student passionate about building scalable and user-friendly applications. I enjoy working across the full stack, from designing backend systems to crafting modern, responsive interfaces.
              </p>
              <p>
                Currently exploring real-world projects and continuously improving my skills in Java, React, and Node.js. My goal is to bridge the gap between heavy engineering and beautiful design.
              </p>
            </div>
            
            <div className="mt-10">
              <Link
                href="/about"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-cyan-500/10 border border-cyan-500/30 px-8 py-4 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:bg-cyan-500/20 hover:text-cyan-100 hover:scale-[1.02] hover:border-cyan-500/50 hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.4)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                Learn more about me
                <div className="relative flex h-5 w-5 items-center justify-center overflow-hidden">
                  <ArrowRight className="absolute h-4 w-4 transition-transform duration-300 group-hover:translate-x-5" />
                  <ArrowRight className="absolute h-4 w-4 -translate-x-5 transition-transform duration-300 group-hover:translate-x-0" />
                </div>
              </Link>
            </div>
          </motion.div>

          {/* Highlights Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="rounded-[2.5rem] border border-white/5 bg-slate-900/60 p-8 shadow-2xl backdrop-blur-xl sm:p-10 relative overflow-hidden group"
          >
            {/* Background glowing glow */}
            <div className={`absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`} />

            <div className="relative">
              <h3 className="text-lg font-semibold text-white mb-8 border-b border-white/10 pb-4">
                Quick Highlights
              </h3>
              
              <ul className="space-y-6">
                {highlights.map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
                    className="flex items-center gap-4 text-slate-300 transition-colors hover:text-white"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/5 bg-white/5 shadow-inner transition-transform duration-300 hover:scale-110">
                      {item.icon}
                    </div>
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
