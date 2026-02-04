'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (custom: number) => (({
      opacity: 1,
      scale: 1,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
      },
    })),
  };

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
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        {/* Background animation elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl"
            animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
            animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <motion.div
          className="max-w-6xl mx-auto text-center space-y-6 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="inline-block px-4 py-2 rounded-full border border-cyan-500/50 bg-cyan-500/10 backdrop-blur-md" variants={itemVariants}>
            <span className="text-sm text-cyan-400 font-medium">Get to know me</span>
          </motion.div>
          <motion.h1 className="text-6xl md:text-7xl font-bold leading-tight" variants={itemVariants}>
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">Senuka</span>
          </motion.h1>
          <motion.p className="text-xl text-slate-300 max-w-3xl mx-auto" variants={itemVariants}>
            Software Engineering undergraduate passionate about building scalable, real-world solutions that solve problems and deliver value.
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Who I Am */}
          <motion.div
            className="mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
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
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-slate-900/60 to-slate-900/30 border border-slate-800/50 rounded-xl p-8 hover:border-cyan-500/50 transition"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ y: -5 }}
              >
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
              </motion.div>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-12">Skills & Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skillGroup, groupIndex) => (
                <motion.div
                  key={skillGroup.category}
                  className="bg-slate-900/40 border border-slate-800/50 rounded-xl p-6 hover:border-cyan-500/50 hover:bg-slate-900/60 transition"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: groupIndex * 0.1, duration: 0.6 }}
                  whileHover={{ y: -4 }}
                >
                  <h3 className="text-lg font-bold text-cyan-400 mb-4">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item, itemIndex) => (
                      <motion.span
                        key={item}
                        className="px-3 py-2 bg-slate-800/50 border border-slate-700/50 text-slate-200 rounded-lg text-sm font-medium hover:border-cyan-500/50 hover:bg-slate-700/50 transition cursor-pointer"
                        custom={itemIndex}
                        variants={skillVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, borderColor: 'rgb(34, 211, 238)' }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Journey Timeline */}
          <motion.div
            className="mb-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-12">My Journey</h2>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex gap-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                >
                  <div className="flex flex-col items-center">
                    <motion.div
                      className="w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                    {index !== timeline.length - 1 && (
                      <motion.div
                        className="w-1 h-24 bg-gradient-to-b from-cyan-500/50 to-transparent mt-4"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                      />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className="text-sm font-semibold text-cyan-400">{item.year}</p>
                    <h3 className="text-2xl font-bold text-white mt-1">{item.title}</h3>
                    <p className="text-slate-300 mt-2">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Philosophy */}
          <motion.div
            className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-cyan-500/20 rounded-xl p-8 md:p-12 mb-24 hover:border-cyan-500/40 transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ borderColor: 'rgba(34, 211, 238, 0.6)' }}
          >
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
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 className="text-3xl font-bold mb-6" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              Let&apos;s Work Together
            </motion.h2>
            <motion.p className="text-slate-300 mb-8 max-w-2xl mx-auto" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              Whether you have a project in mind, want to discuss technology, or just want to connect, I&apos;m always interested in conversations about software engineering and building great systems.
            </motion.p>
            <motion.a
              href="/#contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
