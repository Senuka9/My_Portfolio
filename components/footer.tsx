
export default function Footer() {
  return (
    <footer className="border-t border-slate-800/50 bg-slate-950 py-20 px-6">
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
            <div className="flex gap-3 mt-6">
              <a href="https://github.com/Senuka9" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-cyan-500/50 hover:bg-slate-900/50 transition">
                <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/senuka-kazuhiro-703b0a366/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BTtpp9GUCRaCdicyD66yIFQ%3D%3D" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center hover:border-cyan-500/50 hover:bg-slate-900/50 transition">
                <svg className="w-5 h-5 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.814 0-9.752h3.554v1.381c.43-.664 1.199-1.608 2.925-1.608 2.136 0 3.738 1.395 3.738 4.393v5.586zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.708 0-.956.768-1.708 1.959-1.708 1.19 0 1.914.752 1.939 1.708 0 .949-.749 1.708-1.983 1.708zm1.582 11.597H3.635V9.236h3.284v11.216zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-sm text-slate-400 hover:text-cyan-400 transition">Home</a></li>
              <li><a href="/projects" className="text-sm text-slate-400 hover:text-cyan-400 transition">Projects</a></li>
              <li><a href="/about" className="text-sm text-slate-400 hover:text-cyan-400 transition">About</a></li>
              <li><a href="/learning" className="text-sm text-slate-400 hover:text-cyan-400 transition">Learning</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#contact" className="text-sm text-slate-400 hover:text-cyan-400 transition">Contact</a></li>
              <li><a href="/projects" className="text-sm text-slate-400 hover:text-cyan-400 transition">Portfolio</a></li>
              <li><a href="/learning" className="text-sm text-slate-400 hover:text-cyan-400 transition">Tech Stack</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li><a href="https://github.com/Senuka9" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-cyan-400 transition flex items-center gap-2">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/senuka-kazuhiro-703b0a366/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BTtpp9GUCRaCdicyD66yIFQ%3D%3D" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 hover:text-cyan-400 transition flex items-center gap-2">LinkedIn</a></li>
              <li><a href="mailto:senuka501@gmail.com" className="text-sm text-slate-400 hover:text-cyan-400 transition flex items-center gap-2">Email</a></li>
            </ul>
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
