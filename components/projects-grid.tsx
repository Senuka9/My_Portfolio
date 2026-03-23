'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Star, Code2, GitFork, Github } from 'lucide-react';
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
    'JavaScript': 'bg-yellow-500/10 text-yellow-300 border-yellow-500/20',
    'TypeScript': 'bg-blue-500/10 text-blue-300 border-blue-500/20',
    'Python': 'bg-blue-600/10 text-blue-300 border-blue-600/20',
    'React': 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    'Next.js': 'bg-slate-700/10 text-slate-200 border-slate-700/20',
    'HTML': 'bg-orange-500/10 text-orange-300 border-orange-500/20',
    'CSS': 'bg-pink-500/10 text-pink-300 border-pink-500/20',
    'Java': 'bg-orange-600/10 text-orange-300 border-orange-600/20',
    'C++': 'bg-blue-700/10 text-blue-300 border-blue-700/20',
    'Kotlin': 'bg-purple-500/10 text-purple-300 border-purple-500/20',
  };
  return colors[language || ''] || 'bg-slate-700/10 text-slate-300 border-slate-700/20';
};

const ProjectCard = ({ repo, idx }: { repo: Project; idx: number }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
      className="group relative flex flex-col justify-between p-8 rounded-[2rem] border border-white/5 bg-slate-900/40 shadow-xl backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(6,182,212,0.15)]"
    >
      {/* Spotlight Border Glow (Tracks Mouse) */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: isHovered 
            ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34,211,238,0.15), transparent 40%)`
            : undefined,
        }}
      />
      
      {/* Subtle Inner Spotlight Background */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: isHovered 
            ? `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56,189,248,0.05), transparent 60%)`
            : undefined,
        }}
      />

      <div className="relative z-10 flex-col flex h-full">
        {/* Header / Title */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 border border-white/10 group-hover:bg-cyan-500/20 group-hover:border-cyan-500/50 transition-colors duration-300">
              <Code2 className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all line-clamp-1">
              {repo.name.replace(/[-_]/g, ' ')}
            </h3>
          </div>
          <ExternalLink className="w-5 h-5 text-slate-500 group-hover:text-cyan-400 transition-colors opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0" />
        </div>

        {/* Description / Extracted README */}
        <div className="flex-1 mb-6">
          <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
            {repo.readmeExcerpt || repo.description || 'A fascinating project pushing technical boundaries.'}
          </p>
        </div>

        {/* Language Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {repo.languages.length > 0 ? (
            repo.languages.map((lang) => (
              <span
                key={lang}
                className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold border transition-all duration-300 ${getLanguageColor(lang)}`}
              >
                {lang}
              </span>
            ))
          ) : repo.language ? (
            <span className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold border ${getLanguageColor(repo.language)}`}>
              {repo.language}
            </span>
          ) : null}
        </div>

        {/* Footer Metrics */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
          <div className="flex gap-4">
            {repo.stargazers_count > 0 && (
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold group-hover:text-yellow-400 transition-colors">
                <Star className="w-4 h-4" />
                {repo.stargazers_count}
              </div>
            )}
            {repo.fork && (
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold">
                <GitFork className="w-4 h-4" />
                Forked
              </div>
            )}
          </div>
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider group-hover:text-slate-400 transition-colors">
            {new Date(repo.updated_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return (
      <div className="text-center py-20 bg-slate-900/40 rounded-3xl border border-white/5 backdrop-blur-sm">
        <Github className="w-12 h-12 text-slate-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">No projects found</h3>
        <p className="text-slate-400">Repositories from GitHub will appear here automatically.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {projects.map((repo, idx) => (
        <ProjectCard key={repo.id} repo={repo} idx={idx} />
      ))}
    </div>
  );
}
