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

  return <span ref={ref}>{count}</span>;
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
      value: projectsDelivered,
      suffix: "+",
      icon: <Briefcase className="h-7 w-7 text-fuchsia-400" />,
      color: "from-fuchsia-500 to-purple-500",
      glowColor: "rgba(217,70,239,0.3)", // border-fuchsia-400 equivalents
      borderHover: "group-hover:border-fuchsia-500/50"
    },
    {
      title: "Years Experience",
      value: yearsExperience,
      suffix: "+",
      icon: <Code className="h-7 w-7 text-pink-400" />,
      color: "from-pink-400 to-fuchsia-500",
      glowColor: "rgba(236,72,153,0.3)", 
      borderHover: "group-hover:border-pink-500/50"
    },
    {
      title: "Technologies Used",
      value: 15,
      suffix: "+",
      icon: <Layers className="h-7 w-7 text-purple-400" />,
      color: "from-purple-400 to-indigo-500",
      glowColor: "rgba(168,85,247,0.3)", 
      borderHover: "group-hover:border-purple-500/50"
    }
  ];

  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-16 sm:py-24">
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 * index, ease: "easeOut" }}
            className={`group relative overflow-hidden rounded-[2rem] border border-white/5 bg-slate-900/40 p-10 backdrop-blur-md transition-all duration-500 hover:shadow-[0_0_40px_-15px_var(--glow-color)] ${stat.borderHover}`}
            style={{ "--glow-color": stat.glowColor } as React.CSSProperties}
          >
            {/* Background glowing glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-10`} />
            
            <div className="relative flex flex-col items-center justify-center gap-6 text-center">
              <div className={`flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/10`}>
                {stat.icon}
              </div>
              
              <div>
                <h3 className={`text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-b ${stat.color} drop-shadow-sm`}>
                  <AnimatedCounter target={stat.value} />
                  {stat.suffix}
                </h3>
                <p className="mt-4 text-xs font-bold uppercase tracking-[0.25em] text-slate-300 transition-colors duration-500 group-hover:text-white">
                  {stat.title}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
