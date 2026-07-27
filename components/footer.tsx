import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-slate-950 py-16 sm:py-20">
      <div className="section-shell relative z-10">
        <div className="glass-panel mb-10 overflow-hidden p-8 sm:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="section-kicker mb-4 w-fit">Let&apos;s keep building</div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                A portfolio is only as strong as the experience it creates.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                If you want to talk about a role, a collaboration, or a project idea, the best next step is a direct message.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                Contact me
              </Link>
              <a
                href="/resume.pdf"
                download="Senuka_Resume.pdf"
                className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-6 py-3 text-sm font-medium text-slate-100 transition hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-400 text-slate-950 font-bold">
                S
              </div>
              <span className="text-lg font-bold text-white">Senuka Kazuhiro</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-400">
              Full-stack developer focused on sharp interfaces, reliable backend systems, and thoughtful product polish.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.28em] text-slate-300">Explore</h3>
            <div className="mt-4 grid gap-3 text-sm text-slate-400">
              <Link href="/" className="transition hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400">Home</Link>
              <Link href="/projects" className="transition hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400">Projects</Link>
              <Link href="/about" className="transition hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400">About</Link>
              <Link href="/learning" className="transition hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400">Learning</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.28em] text-slate-300">Connect</h3>
            <div className="mt-4 grid gap-3 text-sm text-slate-400">
              <a href="https://github.com/Senuka9" target="_blank" rel="noopener noreferrer" className="transition hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400">GitHub</a>
              <a href="https://www.linkedin.com/in/senuka-kazuhiro-703b0a366/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BTtpp9GUCRaCdicyD66yIFQ%3D%3D" target="_blank" rel="noopener noreferrer" className="transition hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400">LinkedIn</a>
              <a href="mailto:senuka501@gmail.com" className="transition hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400">Email</a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Senuka. Built with Next.js, Tailwind CSS, and a lot of iteration.</p>
          <div className="flex gap-4">
            <a href="#" className="transition hover:text-cyan-300">Privacy</a>
            <a href="#" className="transition hover:text-cyan-300">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
