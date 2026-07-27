'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const { scrollYProgress } = useScroll();

  // Scroll-reactive parallax transformations
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const orb3Y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const beamY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const beamOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.3, 0.8, 0.5, 0.9, 0.4]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none">
      {/* Scroll-reactive Background Grid */}
      <motion.div
        style={{ y: prefersReducedMotion ? 0 : gridY }}
        className="absolute inset-0 bg-grid-pattern opacity-[0.4] transition-opacity duration-1000"
      />

      {/* Scroll-reactive Laser Beam / Section Transition Light Sweep */}
      {!prefersReducedMotion && (
        <motion.div
          style={{ top: beamY, opacity: beamOpacity }}
          className="absolute left-0 right-0 h-40 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent blur-xl pointer-events-none"
        />
      )}

      {/* Primary Orb - Cyan (Scroll-reactive) */}
      <motion.div
        style={{ y: prefersReducedMotion ? 0 : orb1Y }}
        className="absolute -top-40 -right-40 w-[30rem] h-[30rem] bg-gradient-to-br from-cyan-500/25 via-sky-500/15 to-blue-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, -60, 40, 0],
          scale: [1, 1.1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: prefersReducedMotion ? 0.1 : 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Secondary Orb - Steel / Emerald accent */}
      <motion.div
        style={{ y: prefersReducedMotion ? 0 : orb2Y }}
        className="absolute top-1/3 -left-32 h-[26rem] w-[26rem] rounded-full bg-gradient-to-tr from-emerald-500/20 via-cyan-400/15 to-slate-300/10 blur-3xl"
        animate={{
          x: [0, -60, 50, -80, 0],
          scale: [1, 1.05, 0.9, 1.08, 1],
        }}
        transition={{
          duration: prefersReducedMotion ? 0.1 : 28,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Tertiary Orb - Cyan highlight */}
      <motion.div
        style={{ y: prefersReducedMotion ? 0 : orb3Y }}
        className="absolute -bottom-40 right-1/4 h-[32rem] w-[32rem] rounded-full bg-gradient-to-tl from-cyan-500/20 via-blue-600/10 to-transparent blur-3xl"
        animate={{
          x: [0, 80, -70, 50, 0],
          scale: [1, 0.92, 1.1, 0.98, 1],
        }}
        transition={{
          duration: prefersReducedMotion ? 0.1 : 32,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating Animated Light Particles on Grid */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-[15%] left-[20%] w-2 h-2 rounded-full bg-cyan-400/60 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
            animate={{
              y: [0, 120, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute top-[45%] right-[15%] w-2.5 h-2.5 rounded-full bg-emerald-400/60 shadow-[0_0_14px_rgba(52,211,153,0.8)]"
            animate={{
              y: [0, -100, 0],
              opacity: [0.3, 0.9, 0.3],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          />
          <motion.div
            className="absolute top-[75%] left-[35%] w-2 h-2 rounded-full bg-sky-400/60 shadow-[0_0_12px_rgba(56,189,248,0.8)]"
            animate={{
              y: [0, -140, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          />
        </div>
      )}

      {/* Grain Overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="2" /%3E%3C/filter%3E%3Crect width="400" height="400" fill="white" filter="url(%23noiseFilter)" /%3E%3C/svg%3E")',
          backgroundSize: '200px 200px',
        }}
      />
    </div>
  );
}
