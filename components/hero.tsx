'use client';

import { useEffect, useState } from 'react';

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

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24">
      <div className="max-w-4xl text-center space-y-8">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm">
            <span className="text-sm text-cyan-400 flex items-center gap-2">
              <span className="text-lg">👋</span>
              Welcome to my digital portfolio
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <div>
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            <span className="text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">Senuka</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">
            Full-Stack Developer & Problem Solver
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I build scalable web applications using modern technologies, focusing on clean architecture and real-world problem solving.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 py-8 border-y border-slate-800/50">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-cyan-400">3+</div>
            <div className="text-sm text-slate-400 mt-2">Years Coding</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-cyan-400">{projectCount}+</div>
            <div className="text-sm text-slate-400 mt-2">Projects Built</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-cyan-400">Full-Stack</div>
            <div className="text-sm text-slate-400 mt-2">Focused</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a href="/projects" className="px-8 py-3 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition duration-300 flex items-center justify-center gap-2">
            Explore My Work
            <span>→</span>
          </a>
          <a href="#contact" className="px-8 py-3 border border-cyan-500 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition duration-300 flex items-center justify-center gap-2">
            Get in Touch
            <span>↓</span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-8">
          <div className="flex justify-center animate-bounce">
            <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
