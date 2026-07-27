'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Code, Layers } from 'lucide-react';

function AnimatedCounter({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // easeOutExpo
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(Math.floor(easeProgress * target));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, target, duration]);

  return <motion.span ref={ref} animate={{ opacity: [0.92, 1, 0.92] }} transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}>{count}</motion.span>;
}

export default function Stats() {
  const [repoCount, setRepoCount] = useState<number | null>(null);
  
  useEffect(() => {
    // Dynamically fetch public repos from GitHub
    fetch('https://api.github.com/users/Senuka9')
      .then(res => res.json())
      .then(data => setRepoCount(data.public_repos || 0))
      .catch((err) => {
        console.error(err);
        setRepoCount(5); // fallback value if fail so it becomes 10 below
      });
  }, []);

  // GitHub Repositories + 5 (fallback to 10 if fetch hasn't completed or fails)
  const projectsDelivered = repoCount !== null ? repoCount + 5 : 10;
  
  // Starting year is 2022. Auto increments every year (e.g. 2026 -> 4, 2027 -> 5)
  const yearsExperience = Math.max(1, new Date().getFullYear() - 2022);

  const stats = [
    {
      title: "Projects Delivered",
      subtitle: "Real work, shipped and maintained",
      value: projectsDelivered,
      suffix: "+",
      icon: <Briefcase className="h-7 w-7 text-fuchsia-400" />,
      color: "from-fuchsia-500 to-purple-500",
      glowColor: "rgba(217,70,239,0.3)", // border-fuchsia-400 equivalents
      borderHover: "group-hover:border-fuchsia-500/50"
    },
    {
      title: "Years Experience",
      subtitle: "Year-over-year growth in practice",
      value: yearsExperience,
      suffix: "+",
      icon: <Code className="h-7 w-7 text-pink-400" />,
      color: "from-pink-400 to-fuchsia-500",
      glowColor: "rgba(236,72,153,0.3)", 
      borderHover: "group-hover:border-pink-500/50"
    },
    {
      title: "Technologies Used",
      subtitle: "Stack breadth across frontend and backend",
      value: 15,
      suffix: "+",
      icon: <Layers className="h-7 w-7 text-purple-400" />,
      color: "from-purple-400 to-indigo-500",
      glowColor: "rgba(168,85,247,0.3)", 
      borderHover: "group-hover:border-purple-500/50"
    }
  ];

  return (
    <section className="relative z-10 py-16 sm:py-24">
      <div className="section-shell">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="section-kicker mb-4 w-fit">Proof of momentum</div>
            <h2 className="section-title max-w-2xl">Small numbers, but the work behind them is serious.</h2>
          </div>
          <p className="section-copy md:max-w-xl">
            These stats are meant to feel more like a confidence bar than decoration. They summarize the type of work I like to ship: steady, technical, and real.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 * index, ease: "easeOut" }}
            className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/40 p-8 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-35px_var(--glow-color)] ${stat.borderHover}`}
            style={{ "--glow-color": stat.glowColor } as React.CSSProperties}
          >
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-15`}
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 8 + index, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            
            <div className="relative flex h-full flex-col">
              <div className="flex items-center justify-between gap-4">
                <motion.div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-inner transition-transform duration-500 group-hover:bg-white/10`}
                  whileHover={{ rotate: 8, scale: 1.08 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-slate-300">
                  Live metric
                </div>
              </div>
              
              <div className="mt-8 flex-1">
                <div className={`h-px w-20 rounded-full bg-gradient-to-r ${stat.color}`} />
                <h3 className={`mt-6 text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b ${stat.color} drop-shadow-sm`}>
                  <AnimatedCounter target={stat.value} />
                  {stat.suffix}
                </h3>
                <p className="mt-4 text-sm font-bold uppercase tracking-[0.28em] text-slate-200 transition-colors duration-500 group-hover:text-white">
                  {stat.title}
                </p>
                <p className="mt-3 max-w-xs text-sm leading-6 text-slate-400 transition-colors duration-500 group-hover:text-slate-300">
                  {stat.subtitle}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
}
