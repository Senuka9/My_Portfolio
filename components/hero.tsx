'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const [projectCount, setProjectCount] = useState(5);

  useEffect(() => {
    const fetchProjectCount = async () => {
      try {
        const response = await fetch('https://api.github.com/users/Senuka9/repos?per_page=1');
        if (response.ok) {
          const linkHeader = response.headers.get('link');
          if (linkHeader) {
            const match = linkHeader.match(/&page=(\d+)>; rel="last"/);
            if (match) {
              const count = parseInt(match[1]);
              setProjectCount(5 + count);
            }
          }
        }
      } catch (error) {
        console.log('Failed to fetch project count');
      }
    };
    
    fetchProjectCount();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-12 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        className="max-w-4xl text-center space-y-8 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Badge */}
        <motion.div className="flex justify-center" variants={itemVariants}>
          <motion.div
            className="inline-block px-4 py-2 rounded-full border border-cyan-500/50 bg-cyan-500/10 backdrop-blur-md hover:border-cyan-400/80 hover:bg-cyan-500/20 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-sm text-cyan-300 flex items-center gap-2 font-medium">
              <motion.span
                className="text-lg"
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                👋
              </motion.span>
              Welcome to my digital portfolio
            </span>
          </motion.div>
        </motion.div>

        {/* Main Heading */}
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            <span className="text-white block">Hi, I'm</span>
            <motion.span
              className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent block mt-2"
              animate={{
                backgroundPosition: ['0% center', '100% center', '0% center'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Senuka Kazuhiro
            </motion.span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.div className="space-y-4" variants={itemVariants}>
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Full-Stack Developer & Problem Solver
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I build scalable web applications using modern technologies, focusing on clean architecture and real-world problem solving.
          </p>
        </motion.div>

        {/* Stats with Enhanced Animation */}
        <motion.div
          className="grid grid-cols-3 gap-4 md:gap-8 py-8 border-y border-slate-800/50 backdrop-blur-sm bg-slate-900/20 px-6 rounded-2xl"
          variants={itemVariants}
        >
          {[
            { number: '3+', label: 'Years Coding' },
            { number: projectCount + '+', label: 'Projects Built' },
            { number: 'Full-Stack', label: 'Focused' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={statVariants}
              className="group cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="text-2xl md:text-4xl font-bold text-cyan-400 group-hover:text-blue-400 transition duration-300"
                animate={{ opacity: [1, 0.8, 1] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-xs md:text-sm text-slate-400 mt-2 group-hover:text-slate-300 transition">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons with Enhanced Styling */}
        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center pt-4" variants={itemVariants}>
          {[
            { href: '/projects', text: 'Explore My Work', icon: '→', variant: 'primary' },
            { href: 'https://drive.google.com/file/d/1m3NS0lfr-uZCPlukm-TQw5c_m2WMWyt1/view?usp=sharing', text: 'Download CV', icon: '📄', variant: 'secondary', target: '_blank' },
            { href: '#contact', text: 'Get in Touch', icon: '↓', variant: 'secondary' },
          ].map((btn, index) => (
            <motion.a
              key={index}
              href={btn.href}
              target={btn.target}
              rel={btn.target ? "noopener noreferrer" : undefined}
              className={`px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition duration-300 ${
                btn.variant === 'primary'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-cyan-500/30'
                  : 'border border-cyan-500/50 text-cyan-300 hover:border-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-200'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {btn.text}
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {btn.icon}
              </motion.span>
            </motion.a>
          ))}
        </motion.div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="pt-8"
          variants={itemVariants}
        >
          <motion.div
            className="flex justify-center cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <motion.div
              className="w-10 h-10 rounded-full border-2 border-cyan-400/50 flex items-center justify-center hover:border-cyan-300 transition"
              whileHover={{ borderColor: 'rgba(34, 211, 238, 0.8)' }}
            >
              <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
