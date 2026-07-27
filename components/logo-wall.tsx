'use client';

const skills = [
  "Java", "React", "Node.js", "Next.js", "TypeScript", 
  "Tailwind CSS", "Spring Boot", "Express", "Supabase", 
  "PostgreSQL", "MongoDB", "Git"
];

// Duplicate the skills array 3 times so the scroll is perfectly seamless
const scrollingItems = [...skills, ...skills, ...skills];

export default function LogoWall() {
  return (
    <section className="relative overflow-hidden border-y border-white/5 bg-slate-950/50 py-12 backdrop-blur-md">
      <div className="section-shell mb-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-slate-400">Stack</p>
          <p className="mt-2 text-sm text-slate-300">Tools and technologies I keep close while building.</p>
        </div>
        <div className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent sm:block" />
      </div>

      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-hidden group">
        <div className="animate-logo-scroll flex w-max items-center justify-around gap-8 px-4 sm:gap-12 sm:px-6">
          {scrollingItems.map((skill, index) => (
            <div 
              key={index}
              className="cursor-default whitespace-nowrap rounded-full border border-white/5 bg-white/[0.02] px-6 py-3 text-xs font-medium uppercase tracking-widest text-slate-300 transition-all hover:border-cyan-400/30 hover:bg-white/10 hover:text-cyan-300 sm:text-sm"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes logo-scroll {
          from { transform: translateX(0); }
          /* Translate by exactly 1/3 since we tripled the array */
          to { transform: translateX(calc(-100% / 3)); }
        }
        .animate-logo-scroll {
          animation: logo-scroll 40s linear infinite;
        }
        .group:hover .animate-logo-scroll {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-logo-scroll {
            animation-duration: 200s;
          }
        }
      `}</style>
    </section>
  );
}
