import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function AboutPage() {
  const skills = [
    { category: 'Languages', items: ['Java', 'JavaScript', 'HTML/CSS'] },
    { category: 'Frontend', items: ['React', 'JSP/Servlets', 'Next.js','Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'RESTful APIs', 'System Design'] },
    { category: 'Databases', items: ['MySQL', 'Database Design','Docker','MongoDB'] },
  ];

  const timeline = [
    {
      year: '2023-Present',
      title: 'Software Engineering Student',
      description: 'Pursuing a degree in Software Engineering with focus on full-stack development and system design.'
    },
    {
      year: '2024',
      title: 'Full-Stack Projects',
      description: 'Built booking systems and monitoring applications integrating frontend, backend, and database layers.'
    },
    {
      year: '2025-Present',
      title: 'Open Source & Continuous Learning',
      description: 'Contributing to projects and deepening expertise in backend architecture, APIs, and scalable systems.'
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-6">
          <div className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm">
            <span className="text-sm text-cyan-400">Get to know me</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">Senuka</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Software Engineering undergraduate passionate about building scalable, real-world solutions that solve problems and deliver value.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Who I Am */}
          <div className="mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Who I Am</h2>
                <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
                  <p>
                    I&apos;m Senuka, a Software Engineering undergraduate with a passion for full-stack development. I believe in writing code that matters—software built to solve real problems and scale reliably in production.
                  </p>
                  <p>
                    I enjoy understanding how the entire stack works: frontend interfaces, backend systems, and database design. I&apos;m drawn to system architecture, API design, and the challenge of building applications that perform well under load. I also enjoy collaborating with others, learning from feedback, and improving through teamwork.
                  </p>
                  <p>
                    Every project is an opportunity to deliver value. Whether it&apos;s a booking system, monitoring tool, or web application, I focus on creating solutions that are reliable, maintainable, and genuinely useful.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-900/60 to-slate-900/30 border border-slate-800/50 rounded-xl p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-sm font-semibold text-cyan-400 mb-2">ROLE</h3>
                    <p className="text-2xl font-bold text-white">Software Engineering Undergraduate</p>
                  </div>
                  <div className="border-t border-slate-800/50 pt-4">
                    <h3 className="text-sm font-semibold text-cyan-400 mb-2">SPECIALIZATION</h3>
                    <p className="text-xl font-semibold text-white">Full-Stack Development</p>
                  </div>
                  <div className="border-t border-slate-800/50 pt-4">
                    <h3 className="text-sm font-semibold text-cyan-400 mb-2">INTERESTS</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-semibold">Backend Systems</span>
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-semibold">System Design</span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold">AI/ML</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold mb-12">Skills & Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category} className="bg-slate-900/40 border border-slate-800/50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-cyan-400 mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-2 bg-slate-800/50 border border-slate-700/50 text-slate-200 rounded-lg text-sm font-medium hover:border-cyan-500/50 transition"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Journey Timeline */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold mb-12">My Journey</h2>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"></div>
                    {index !== timeline.length - 1 && (
                      <div className="w-1 h-24 bg-gradient-to-b from-cyan-500/50 to-transparent mt-4"></div>
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="text-sm font-semibold text-cyan-400">{item.year}</p>
                    <h3 className="text-2xl font-bold text-white mt-1">{item.title}</h3>
                    <p className="text-slate-300 mt-2">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy */}
          <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-cyan-500/20 rounded-xl p-8 md:p-12 mb-24">
            <h2 className="text-3xl font-bold mb-6">My Philosophy</h2>
            <div className="space-y-4 text-lg text-slate-300 leading-relaxed">
              <p>
                <span className="text-cyan-400 font-semibold">Build for Impact:</span> I focus on creating software that solves real problems. Every line of code should serve a purpose and deliver value.
              </p>
              <p>
                <span className="text-cyan-400 font-semibold">Understand the Full Picture:</span> Great software engineers understand how frontend, backend, and databases work together. I believe in this holistic approach to development.
              </p>
              <p>
                <span className="text-cyan-400 font-semibold">Continuous Growth:</span> Technology evolves rapidly. I&apos;m committed to staying current with best practices in system design, backend architecture, and modern development tools.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Let&apos;s Work Together</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Whether you have a project in mind, want to discuss technology, or just want to connect, I&apos;m always interested in conversations about software engineering and building great systems.
            </p>
            <a
              href="/#contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
