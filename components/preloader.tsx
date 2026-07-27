'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Sparkles } from 'lucide-react';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [statusText, setStatusText] = useState('INITIALIZING...');

  useEffect(() => {
    // Check if preloader already ran in this session for seamless navigation
    const hasLoaded = sessionStorage.getItem('preloader_shown');
    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 30) {
          setStatusText('INITIALIZING CORE ARCHITECTURE...');
          return prev + Math.floor(Math.random() * 8) + 4;
        } else if (prev < 70) {
          setStatusText('LOADING JAVA & WEB MODULES...');
          return prev + Math.floor(Math.random() * 10) + 5;
        } else if (prev < 99) {
          setStatusText('PREPARING INTERFACE...');
          return prev + Math.floor(Math.random() * 6) + 3;
        } else {
          clearInterval(interval);
          setStatusText('WELCOME');
          setTimeout(() => {
            setIsLoading(false);
            sessionStorage.setItem('preloader_shown', 'true');
          }, 300);
          return 100;
        }
      });
    }, 45);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 text-white select-none overflow-hidden"
        >
          {/* Background Ambient Glows */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_60%)]" />
          <motion.div
            className="absolute h-96 w-96 rounded-full bg-gradient-to-tr from-cyan-500/20 via-sky-500/10 to-emerald-500/20 blur-3xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />

          <div className="relative z-10 flex flex-col items-center px-6 text-center max-w-md w-full">
            {/* Spinning Cyber Emblem */}
            <div className="relative mb-8 flex items-center justify-center">
              <motion.div
                className="absolute h-24 w-24 rounded-full border-2 border-dashed border-cyan-400/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="absolute h-32 w-32 rounded-full border border-cyan-400/20"
                animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/30 bg-slate-900/80 shadow-[0_0_30px_rgba(34,211,238,0.3)] backdrop-blur-xl">
                <Code2 className="h-8 w-8 text-cyan-400" />
              </div>
            </div>

            {/* Name Header */}
            <h1 className="text-xl font-bold tracking-[0.25em] uppercase text-white flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-cyan-400" />
              Senuka Kazuhiro
              <Sparkles className="h-4 w-4 text-emerald-400" />
            </h1>
            <p className="mt-2 text-xs font-mono tracking-widest text-slate-400 uppercase">
              Portfolio Experience
            </p>

            {/* Progress Bar Container */}
            <div className="mt-8 w-full">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span className="text-cyan-300 font-semibold tracking-wider">{statusText}</span>
                <span className="text-emerald-400 font-bold">{progress}%</span>
              </div>
              <div className="relative h-2 w-full overflow-hidden rounded-full border border-white/10 bg-slate-900 shadow-inner">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>
            </div>

            {/* Footer indicator */}
            <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-slate-500">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Loading System Assets
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
