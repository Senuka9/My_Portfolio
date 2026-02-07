'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

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
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Primary Orb - Cyan */}
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 rounded-full blur-3xl"
        animate={{
          y: [0, 100, -100, 50, 0],
          x: [0, 50, -80, 120, 0],
        }}
        transition={{
          duration: prefersReducedMotion ? 0.1 : 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Secondary Orb - Blue */}
      <motion.div
        className="absolute top-1/3 -left-32 w-80 h-80 bg-gradient-to-tr from-blue-500/15 to-purple-500/10 rounded-full blur-3xl"
        animate={{
          y: [0, -80, 100, -50, 0],
          x: [0, -60, 70, -100, 0],
        }}
        transition={{
          duration: prefersReducedMotion ? 0.1 : 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Tertiary Orb - Cyan accent */}
      <motion.div
        className="absolute -bottom-40 right-1/4 w-96 h-96 bg-gradient-to-tl from-cyan-500/15 to-blue-500/5 rounded-full blur-3xl"
        animate={{
          y: [0, -60, 80, 20, 0],
          x: [0, 100, -90, 70, 0],
        }}
        transition={{
          duration: prefersReducedMotion ? 0.1 : 30,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Grain Overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="2" /%3E%3C/filter%3E%3Crect width="400" height="400" fill="white" filter="url(%23noiseFilter)" /%3E%3C/svg%3E")',
          backgroundSize: '200px 200px',
        }}
      />
    </div>
  );
}
