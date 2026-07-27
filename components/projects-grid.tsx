'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Star, Code2, GitFork, Github, ArrowUpRight } from 'lucide-react';
import React, { useState } from 'react';

interface Project {
  id: number;
  name: string;
  description: string | null;
  readmeExcerpt: string | null;
  html_url: string;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
  fork: boolean;
  languages: string[];
}

const getLanguageColor = (language: string | null): string => {
  const colors: { [key: string]: string } = {
    JavaScript: 'bg-yellow-500/10 text-yellow-200 border-yellow-500/20',
    TypeScript: 'bg-blue-500/10 text-blue-200 border-blue-500/20',
    Python: 'bg-blue-600/10 text-blue-200 border-blue-600/20',
    React: 'bg-cyan-500/10 text-cyan-200 border-cyan-500/20',
    'Next.js': 'bg-slate-700/10 text-slate-200 border-slate-700/20',
    HTML: 'bg-orange-500/10 text-orange-200 border-orange-500/20',
    CSS: 'bg-pink-500/10 text-pink-200 border-pink-500/20',
    Java: 'bg-orange-600/10 text-orange-200 border-orange-600/20',
    'C++': 'bg-blue-700/10 text-blue-200 border-blue-700/20',
    Kotlin: 'bg-purple-500/10 text-purple-200 border-purple-500/20',
  };

  return colors[language || ''] || 'bg-slate-700/10 text-slate-300 border-slate-700/20';
};

const ProjectCard = ({ repo, idx, featured = false }: { repo: Project; idx: number; featured?: boolean }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate 3D tilt angle
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setMousePosition({ x, y });
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: featured ? -12 : -10, scale: featured ? 1.02 : 1.01 }}
      whileTap={{ scale: 0.985 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.55, delay: idx * 0.08, ease: 'easeOut' }}
      style={{
        transformStyle: 'preserve-3d',
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
      }}
      className={`group relative flex flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/40 p-7 shadow-[0_30px_60px_-35px_rgba(2,6,23,0.95)] backdrop-blur-md transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_40px_80px_-45px_rgba(34,211,238,0.4)] ${featured ? 'min-h-[32rem] lg:col-span-2 lg:row-span-2 lg:p-8' : ''}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: isHovered
            ? `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34,211,238,0.18), transparent 40%)`
            : undefined,
        }}
      />

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      {featured && (
        <div className="absolute right-5 top-5 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-cyan-200 shadow-[0_0_12px_rgba(34,211,238,0.3)]">
          Featured
        </div>
      )}
      <div className={`pointer-events-none absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-500/10 via-transparent to-emerald-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`} />

      <div className="relative z-10 flex h-full flex-col" style={{ transform: 'translateZ(20px)' }}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <motion.div
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/15 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
              whileHover={{ rotate: 8, scale: 1.1 }}
            >
              <Code2 className="h-5 w-5 text-slate-300 transition-colors group-hover:text-cyan-300" />
            </motion.div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400">Project</p>
              <h3 className={`mt-1 font-bold tracking-tight text-white transition group-hover:text-cyan-50 ${featured ? 'text-2xl' : 'text-xl'}`}>
                {repo.name.replace(/[-_]/g, ' ')}
              </h3>
            </div>
          </div>
          <motion.div
            className="rounded-full border border-white/10 bg-white/[0.04] p-2 text-slate-400 transition group-hover:border-cyan-400/40 group-hover:text-cyan-300"
            whileHover={{ rotate: 45, scale: 1.1 }}
          >
            <ArrowUpRight className="h-4 w-4" />
          </motion.div>
        </div>

        <p className={`mt-6 text-sm leading-7 text-slate-300 ${featured ? 'line-clamp-none max-w-2xl text-base sm:text-lg' : 'line-clamp-3'}`}>
          {repo.readmeExcerpt || repo.description || 'A focused project exploring clean architecture and polished user experience.'}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {repo.languages.length > 0 ? (
            repo.languages.map((lang) => (
              <span
                key={lang}
                className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-md ${getLanguageColor(lang)}`}
              >
                {lang}
              </span>
            ))
          ) : repo.language ? (
            <span className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.24em] ${getLanguageColor(repo.language)}`}>
              {repo.language}
            </span>
          ) : null}
        </div>

        <div className="mt-8 border-t border-white/10 pt-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
              {repo.stargazers_count > 0 && (
                <motion.div className="flex items-center gap-1.5 transition group-hover:text-yellow-300" whileHover={{ y: -1 }}>
                  <Star className="h-4 w-4" />
                  {repo.stargazers_count}
                </motion.div>
              )}
              {repo.fork && (
                <motion.div className="flex items-center gap-1.5" whileHover={{ y: -1 }}>
                  <GitFork className="h-4 w-4" />
                  Forked
                </motion.div>
              )}
            </div>
            <div className="text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500 transition group-hover:text-slate-300">
              Updated {new Date(repo.updated_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
            </div>
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return (
      <div className="glass-panel px-8 py-20 text-center">
        <Github className="mx-auto mb-4 h-12 w-12 text-slate-500" />
        <h3 className="text-2xl font-bold text-white">No projects found</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-400">
          Repositories from GitHub will appear here automatically once they are available.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[minmax(18rem,auto)] lg:gap-8">
      {projects.map((repo, idx) => (
        <ProjectCard key={repo.id} repo={repo} idx={idx} featured={idx === 0} />
      ))}
    </div>
  );
}
