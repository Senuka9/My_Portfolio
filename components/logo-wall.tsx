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
    <section className="relative overflow-hidden py-10 border-y border-white/5 bg-slate-950/50 backdrop-blur-md">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-hidden group">
        <div className="animate-logo-scroll flex w-max items-center justify-around gap-8 sm:gap-12 px-4 sm:px-6">
          {scrollingItems.map((skill, index) => (
            <div 
              key={index}
              className="px-6 py-3 rounded-full border border-white/5 bg-white/[0.02] text-slate-300 font-medium uppercase tracking-widest text-xs sm:text-sm whitespace-nowrap hover:bg-white/10 hover:text-cyan-400 hover:border-cyan-400/30 transition-all cursor-default"
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
      `}</style>
    </section>
  );
}
