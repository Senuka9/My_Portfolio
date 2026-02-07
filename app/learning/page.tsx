'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { motion } from 'framer-motion';

export default function LearningPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
      },
    }),
    hover: {
      y: -8,
      transition: { duration: 0.3 },
    },
  };

  const currentlyLearning = [
    {
      title: 'Advanced React',
      icon: '⚛',
      topics: [
        'Component architecture',
        'Performance optimization',
        'State management patterns'
      ]
    },
    {
      title: 'Backend Architecture',
      icon: '🧠',
      topics: [
        'Layered architecture',
        'Separation of concerns',
        'Scalable backend design'
      ]
    },
    {
      title: 'REST API Development',
      icon: '🔌',
      topics: [
        'API structure',
        'Authentication basics',
        'Request/response handling'
      ]
    },
    {
      title: 'Database Design',
      icon: '🗄',
      topics: [
        'Normalization',
        'Relationships',
        'Query optimization'
      ]
    }
  ];

  const exploring = [
    {
      title: 'AI Integration in Applications',
      description: 'Using AI features in web systems and understanding how to integrate AI capabilities.'
    },
    {
      title: 'Cloud Concepts',
      description: 'Deployment basics, hosting, environments, and cloud-native architecture.'
    },
    {
      title: 'System Design Fundamentals',
      description: 'Understanding how large systems are structured and scale.'
    }
  ];

  const practices = [
    'Building small feature-based projects',
    'Improving code structure and refactoring',
    'Refactoring old projects for better practices',
    'Reading documentation and technical blogs',
    'Exploring GitHub repositories for learning patterns'
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        {/* Background animation elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
            animate={{ y: [0, 40, 0], x: [0, 30, 0] }}
            transition={{ duration: 9, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
            animate={{ y: [0, -40, 0], x: [0, -30, 0] }}
            transition={{ duration: 11, repeat: Infinity }}
          />
        </div>

        <motion.div
          className="max-w-6xl mx-auto text-center space-y-6 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="inline-block px-4 py-2 rounded-full border border-cyan-500/50 bg-cyan-500/10 backdrop-blur-md" variants={itemVariants}>
            <span className="text-sm text-cyan-400 font-medium">Growth Mindset</span>
          </motion.div>
          <motion.h1 className="text-6xl md:text-7xl font-bold leading-tight" variants={itemVariants}>
            <span className="text-white">My </span>
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">Learning Journey</span>
          </motion.h1>
          <motion.p className="text-xl text-slate-300 max-w-3xl mx-auto" variants={itemVariants}>
            I don&apos;t believe in staying at beginner level. I focus on understanding deeper software concepts, architecture, and building systems that scale.
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Currently Learning */}
          <motion.div
            className="mb-32"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div className="mb-12" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-4xl font-bold mb-4">Currently Learning</h2>
              <p className="text-slate-300 text-lg">
                These are the areas I&apos;m actively focused on right now. I dive deep into understanding the principles and patterns that make systems scalable and maintainable.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {currentlyLearning.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-slate-900/60 to-slate-900/30 border border-slate-800/50 rounded-xl p-8 hover:border-cyan-500/50 hover:bg-slate-900/50 transition group cursor-pointer"
                  custom={index}
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <motion.span className="text-4xl" animate={{ rotate: [0, 10, -10, 0] }} transition={{ duration: 4, repeat: Infinity, delay: index * 0.3 }}>
                      {item.icon}
                    </motion.span>
                    <h3 className="text-2xl font-bold text-cyan-400 group-hover:text-cyan-300 transition">{item.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {item.topics.map((topic, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-3 text-slate-300 group-hover:text-slate-200 transition"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <span className="text-cyan-400 font-bold mt-1">•</span>
                        <span>{topic}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Exploring Next */}
          <motion.div
            className="mb-32"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div className="mb-12" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-4xl font-bold mb-4">Exploring Next</h2>
              <p className="text-slate-300 text-lg">
                These are the areas I&apos;m preparing to explore. I believe in having a clear learning roadmap for continuous growth.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {exploring.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-slate-900/40 border border-slate-800/50 rounded-xl p-8 hover:border-cyan-500/50 hover:bg-slate-900/60 transition group cursor-pointer"
                  custom={index}
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition">{item.title}</h3>
                  <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* What I Practice Regularly */}
          <motion.div
            className="mb-32"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div className="mb-12" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h2 className="text-4xl font-bold mb-4">What I Practice Regularly</h2>
              <p className="text-slate-300 text-lg">
                Learning is active, not passive. Here&apos;s how I stay engaged and continuously improve.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-cyan-500/20 rounded-xl p-12 hover:border-cyan-500/40 transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                {practices.map((practice, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <motion.div
                      className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-1"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                    >
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <span className="text-slate-200 text-lg">{practice}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Learning Philosophy */}
          <motion.div
            className="bg-gradient-to-br from-slate-900/60 to-slate-900/30 border border-slate-800/50 rounded-xl p-12 text-center hover:border-cyan-500/50 transition"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{ borderColor: 'rgba(34, 211, 238, 0.5)' }}
          >
            <motion.h2 className="text-3xl font-bold mb-6" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              My Learning Philosophy
            </motion.h2>
            <motion.p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed" variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              I believe learning in software engineering never stops. I focus on understanding how systems work internally rather than only learning surface-level tools. My goal is to build software that is reliable, scalable, and maintainable. This journey from student to builder to engineer in progress is powered by curiosity and a commitment to mastery.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
