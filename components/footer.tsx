
export default function Footer() {
  return (
    <footer className="border-t border-slate-800/50 bg-slate-950 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-lg font-bold text-white">Senuka</span>
            </div>
            <p className="text-sm text-slate-400">Full-stack developer crafting elegant solutions for complex problems.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition">Home</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition">Projects</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition">About</a></li>
              <li><a href="#" className="text-sm text-slate-400 hover:text-cyan-400 transition">Learning</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Follow</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-cyan-500/50 hover:bg-slate-900/50 transition">
                <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20v-7.21H5.93v-2.94h2.36V7.9c0-2.33 1.42-3.61 3.5-3.61.99 0 1.85.07 2.1.1v2.43h-1.44c-1.13 0-1.35.54-1.35 1.32v1.73h2.7l-.35 2.94h-2.35V20z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-cyan-500/50 hover:bg-slate-900/50 transition">
                <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-cyan-500/50 hover:bg-slate-900/50 transition">
                <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800/50 pt-8">
          {/* Copyright */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>© 2025 Senuka. All rights reserved. Built with React, Next.js, and Tailwind CSS.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-cyan-400 transition">Privacy</a>
              <a href="#" className="hover:text-cyan-400 transition">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
