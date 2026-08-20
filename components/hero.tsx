'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BadgeCheck, Code2, Github, Linkedin, Orbit, Send, Sparkles } from 'lucide-react';

function TypewriterText({ text }: { text?: string }) {
  const phrases = ['FULL-STACK DEVELOPER', 'JAVA DEVELOPER', 'MODERN WEB BUILDER'];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = text || phrases[currentPhraseIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayed === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed === '') {
      setIsDeleting(false);
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else {
      timer = setTimeout(() => {
        const nextDisplayed = isDeleting
          ? fullText.substring(0, displayed.length - 1)
          : fullText.substring(0, displayed.length + 1);
        setDisplayed(nextDisplayed);
      }, isDeleting ? 30 : 60);
    }

    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayed, isDeleting, currentPhraseIndex, text]);


  return (
    <div className="mt-6 flex items-center gap-3" aria-live="polite" aria-atomic="true">
      <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-300">
        {displayed || 'FULL-STACK DEVELOPER'}
      </span>
      <span className="h-5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
    </div>
  );
}

const corePills = [
  'Full-Stack Systems',
  'Modern Interfaces',
  'Scalable Architecture',
  'Java • React • Node.js',
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-40">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.1),transparent_24%),radial-gradient(circle_at_bottom,rgba(16,185,129,0.08),transparent_30%)]" />
      <div className="absolute inset-x-0 top-0 h-[36rem] bg-[linear-gradient(180deg,rgba(2,6,23,0.08)_0%,rgba(2,6,23,0.7)_66%,rgba(2,6,23,1)_100%)]" />
      <div className="absolute left-1/2 top-16 h-40 w-[70%] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="section-shell relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-3xl"
          >
            <div className="section-kicker mb-6 w-fit">
              <Sparkles className="h-3.5 w-3.5" />
              Available for internships and collaborations
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-[5.2rem] lg:leading-[0.95]"
            >
              I design <span className="bg-linear-to-r bg-clip-text text-transparent from-cyan-300 via-sky-300 to-emerald-300">clean systems</span>
              <br />
              and build interfaces that feel premium.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
            >
              Software Engineering graduate focused on elegant full-stack products, thoughtful backend architecture, and interfaces that make a strong first impression.
            </motion.p>

            <TypewriterText />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-slate-950 shadow-[0_18px_45px_-22px_rgba(255,255,255,0.45)] transition duration-300 hover:-translate-y-0.5 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                Explore work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href="/resume.pdf"
                download="Senuka_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-7 py-4 text-sm font-medium text-slate-100 backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                Download Resume
              </a>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-7 py-4 text-sm font-semibold text-cyan-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-cyan-400/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                Contact Me
                <Send className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="mt-10 grid gap-3 sm:grid-cols-2"
            >
              <div className="glass-panel p-4">
                <div className="flex items-center gap-3 text-cyan-200">
                  <BadgeCheck className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-[0.28em]">Focus</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Backend architecture, frontend polish, and shipping interfaces that feel intentional.
                </p>
              </div>
              <div className="glass-panel p-4">
                <div className="flex items-center gap-3 text-emerald-200">
                  <Orbit className="h-4 w-4" />
                  <span className="text-xs font-bold uppercase tracking-[0.28em]">Approach</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Strong visuals, careful motion, and clean systems that scale beyond a single page.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="mt-8 flex flex-wrap gap-2.5"
            >
              {corePills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-300"
                >
                  {pill}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="mt-9 flex items-center gap-4 pl-1"
            >
              <a
                href="https://github.com/Senuka9"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                aria-label="GitHub profile"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/senuka-kazuhiro-703b0a366/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BTtpp9GUCRaCdicyD66yIFQ%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <div className="h-px w-24 bg-gradient-to-r from-white/20 to-transparent" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ delay: 0.15, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[460px] lg:justify-self-end"
          >
            <div className="pointer-events-none absolute -inset-10 -z-10">
              <div className="absolute inset-0 rounded-[3rem] bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_45%)] blur-2xl" />
              <motion.div
                className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/15"
                animate={{ rotate: 360 }}
                transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5"
                animate={{ rotate: -360 }}
                transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
              />

              <motion.div
                className="absolute left-[18%] top-[18%] h-3.5 w-3.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]"
                animate={{ x: [0, 26, 0], y: [0, 18, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute right-[14%] top-[28%] h-2.5 w-2.5 rounded-full bg-emerald-300 shadow-[0_0_14px_rgba(110,231,183,0.8)]"
                animate={{ x: [0, -20, 0], y: [0, 14, 0] }}
                transition={{ duration: 7.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
              />
              <motion.div
                className="absolute bottom-[22%] left-[26%] h-2.5 w-2.5 rounded-full bg-sky-300 shadow-[0_0_14px_rgba(125,211,252,0.8)]"
                animate={{ x: [0, 18, 0], y: [0, -12, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              />

              <div className="absolute inset-x-[18%] top-[34%] h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />
              <div className="absolute inset-x-[12%] bottom-[28%] h-px bg-gradient-to-r from-transparent via-emerald-300/25 to-transparent" />
              <div className="absolute left-[24%] top-[24%] h-[52%] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
              <div className="absolute right-[22%] top-[20%] h-[58%] w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            </div>

            <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/50 shadow-[0_35px_100px_-45px_rgba(2,6,23,0.95)] backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.1),transparent_28%)]" />
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.07] via-transparent to-transparent" />

              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/senuka-1.png"
                  alt="Senuka Kazuhiro portrait"
                  fill
                  sizes="(max-width: 768px) 100vw, 460px"
                  priority
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-5 backdrop-blur-lg">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-200">
                    <Code2 className="h-6 w-6" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-white">Full-Stack Developer</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.26em] text-slate-400">
                      Java • Node.js • React • Next.js
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-slate-950/75 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-200 backdrop-blur-md">
                Ready to build
              </div>
            </div>

            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-tr from-cyan-400/20 via-transparent to-emerald-400/20 blur-3xl opacity-60" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
