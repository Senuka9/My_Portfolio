'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { motion } from 'framer-motion';
import { Terminal, Lightbulb, Coffee, Target, ArrowRight, User, Calendar, CreditCard, MapPin, Zap, BrainCircuit, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const personalInfo = [
    {
      icon: <User className="w-5 h-5 text-cyan-400" />,
      label: 'Full Name',
      value: 'H.W. Senuka Kazuhiro',
    },
    {
      icon: <Calendar className="w-5 h-5 text-emerald-400" />,
      label: 'Date of Birth / Age',
      value: '2006 January 07 (Age 20)',
    },
    {
      icon: <CreditCard className="w-5 h-5 text-purple-400" />,
      label: 'ID Number (NIC)',
      value: '200600702685',
    },
    {
      icon: <MapPin className="w-5 h-5 text-pink-400" />,
      label: 'Address',
      value: '287/20, Silver Garden, Watareka, Padukka',
    },
  ];

  const skills = [
    { 
      category: 'Core & Languages', 
      items: [
        { name: 'Java Programming', desc: 'Object-oriented software, APIs, core data structures & logic' },
        { name: 'JavaScript & TypeScript', desc: 'Modern web scripting, async logic, type safety' }
      ] 
    },
    { 
      category: 'Frontend Frameworks', 
      items: [
        { name: 'React & Next.js', desc: 'Modern Server-Side & Client-Side UI development' },
        { name: 'Tailwind CSS', desc: 'Responsive, scalable styling & modern aesthetic UI' }
      ] 
    },
    { 
      category: 'Backend & Server', 
      items: [
        { name: 'Node.js & Express', desc: 'REST APIs, server-side microservices, middleware' },
        { name: 'System Design', desc: 'Scalable backend architecture & database optimization' }
      ] 
    },
    { 
      category: 'Databases & Tools', 
      items: [
        { name: 'MySQL & MongoDB', desc: 'Relational & NoSQL database management' },
        { name: 'Git & Docker', desc: 'Version control workflows and containerization' }
      ] 
    },
  ];

  const timeline = [
    {
      year: '2023',
      title: 'Started Software Engineering',
      description: 'Built my foundation in programming concepts, algorithms, and Java fundamentals.'
    },
    {
      year: '2024',
      title: 'Built Real Projects',
      description: 'Developed full-stack applications with Java, React, Node.js, and databases.'
    },
    {
      year: '2025',
      title: 'Focused on Backend & Next.js',
      description: 'Deepening knowledge in API design, system architecture, Next.js, and performance optimization.'
    },
    {
      year: '2026',
      title: 'Graduated from University',
      description: 'Completed my BSc (Hons) in Software Engineering, achieving a Second Class (Lower Division) degree.'
    },
  ];

  const currentlyDoing = [
    "Building full-stack applications using React, Next.js, and Node.js",
    "Developing backend services and API architectures with Java & Node.js",
    "Exploring advanced system design, database optimization, and performance"
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white antialiased">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex min-h-[50vh] items-center overflow-hidden px-6 pb-16 pt-32">
        {/* Background animation elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]"
            animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px]"
            animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <motion.div
          className="section-shell relative z-10 mt-10 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="section-kicker mx-auto mb-5 w-fit" variants={itemVariants}>
            More about me
          </motion.div>
          <motion.h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight" variants={itemVariants}>
             <span className="text-white">Beyond the </span>
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Code</span>
          </motion.h1>
          <motion.p className="section-copy mx-auto mt-6 max-w-4xl text-center text-xl md:text-2xl" variants={itemVariants}>
            I’m a Software Engineering graduate passionate about Java programming, React, Node.js, and Next.js. I thrive on building efficient systems and rapidly mastering new technologies.
          </motion.p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="relative border-t border-white/5 bg-slate-900/20 px-6 py-24">
        <div className="section-shell space-y-32">
          
          {/* Personal Overview & Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-start"
          >
            {/* Left Col: Who I am */}
            <div className="space-y-8">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-2">My Background</h2>
                <h3 className="text-4xl font-bold text-white">Who I Am</h3>
              </div>
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed font-light">
                <p>
                  I’m <strong className="font-semibold text-white">H.W. Senuka Kazuhiro</strong>, a Software Engineering graduate from NSBM Green University with a Second Class (Lower Division) degree.
                </p>
                <p>
                  My primary technical interests lie in <strong className="text-cyan-300 font-semibold">Java programming</strong>, along with modern web ecosystems like <strong className="text-emerald-300 font-semibold">React, Node.js, and Next.js</strong>. I enjoy crafting full-stack applications with a strong focus on clean architecture, scalable backends, and intuitive user experiences.
                </p>
                <p>
                  One of my core strengths is my <strong className="text-white font-semibold">rapid learning ability</strong> — I can quickly adapt to and learn any new programming language, framework, or developer tool required for a project.
                </p>
              </div>

              {/* Personal Info Grid Card */}
              <div className="mt-8 bg-slate-900/60 border border-cyan-500/20 rounded-3xl p-8 relative overflow-hidden group shadow-2xl backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <h4 className="text-lg font-bold text-white uppercase tracking-wider text-sm">Personal Details</h4>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {personalInfo.map((info, idx) => (
                    <div key={idx} className="flex gap-4 items-start bg-white/[0.03] p-4 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-colors">
                      <div className="p-2.5 rounded-xl bg-slate-950 border border-white/10 shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">{info.label}</p>
                        <p className="text-sm font-semibold text-white mt-1">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal Touch & Quick Adaptability */}
              <div className="bg-slate-900/50 border border-white/5 rounded-3xl p-8 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-center gap-3 mb-3">
                  <BrainCircuit className="w-6 h-6 text-cyan-400" />
                  <h4 className="text-xl font-bold text-white">Quick Learner & Adaptable</h4>
                </div>
                <p className="text-slate-300 leading-relaxed font-light">
                  I embrace new challenges eagerly. Beyond Java, React, Node, and Next.js, I possess a versatile mindset that allows me to pick up new tech stacks and programming languages on the fly, ensuring I can solve any engineering challenge efficiently.
                </p>
              </div>
            </div>

            {/* Right Col: Currently Doing & What I want */}
            <div className="space-y-8 mt-2 lg:mt-0">
              <div className="bg-gradient-to-br from-cyan-950/40 to-slate-900/60 border border-cyan-500/20 rounded-3xl p-8 shadow-2xl backdrop-blur-xl hover:border-cyan-500/40 transition-colors">
                <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                  <Terminal className="w-5 h-5 text-cyan-400" />
                  <h4 className="text-lg font-bold text-white uppercase tracking-wider text-sm">What I&apos;m Currently Doing</h4>
                </div>
                <ul className="space-y-4">
                  {currentlyDoing.map((item, i) => (
                    <li key={i} className="flex gap-4 text-slate-300 text-sm leading-relaxed items-start">
                      <span className="text-cyan-400 mt-0.5 font-bold">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-emerald-950/30 border border-emerald-500/20 rounded-3xl p-8 shadow-2xl backdrop-blur-xl hover:border-emerald-500/40 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-5 h-5 text-emerald-400" />
                  <h4 className="text-lg font-bold text-white uppercase tracking-wider text-sm">What I Want</h4>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  I’m currently looking for <strong className="text-emerald-300 font-semibold">internship opportunities</strong> where I can contribute to real-world software, collaborate with high-performing teams, and leverage my skills in Java, Node, React, and Next.js.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Detailed Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-2">Expertise</h2>
              <h3 className="text-4xl font-bold text-white">Skills with Depth</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skillGroup, groupIndex) => (
                <div
                  key={skillGroup.category}
                  className="bg-slate-900/40 border border-slate-800/80 rounded-3xl p-8 hover:border-cyan-500/30 transition-colors duration-500 group"
                >
                  <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                     <span className="w-2 h-2 rounded-full bg-cyan-400 opacity-50 group-hover:opacity-100 group-hover:animate-pulse transition-all"></span>
                    {skillGroup.category}
                  </h4>
                  <div className="space-y-4">
                    {skillGroup.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-white/5 border border-white/5 rounded-2xl p-4 transition-colors hover:bg-white/10">
                        <p className="font-semibold text-cyan-200">{item.name}</p>
                        <p className="text-sm text-slate-400 mt-1 font-light leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Journey Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold uppercase tracking-widest text-cyan-400 mb-2">Story-Driven</h2>
              <h3 className="text-4xl font-bold text-white">My Journey</h3>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative flex gap-8 md:gap-12"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                >
                  {/* Timeline Graphic */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full border border-cyan-500/30 bg-slate-900 z-10 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                      <span className="text-xs font-bold text-cyan-400">{item.year}</span>
                    </div>
                    {index !== timeline.length - 1 && (
                      <div className="w-px h-full bg-gradient-to-b from-cyan-500/50 to-transparent mt-2 opacity-50 absolute top-14 bottom-[-3rem] left-7" />
                    )}
                  </div>
                  
                  {/* Timeline Content */}
                  <div className="pb-4 pt-1.5">
                    <h4 className="text-2xl font-bold text-white tracking-tight">{item.title}</h4>
                    <p className="text-slate-300 mt-3 text-base leading-relaxed font-light">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Philosophy */}
          <motion.div
            className="bg-gradient-to-br from-slate-900/80 to-slate-950 border border-slate-800 rounded-[3rem] p-10 md:p-16 relative overflow-hidden group"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.05),transparent_50%)]" />
            
            <div className="text-center mb-12 relative z-10">
              <Lightbulb className="w-10 h-10 text-emerald-400 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white">My Philosophy</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 relative z-10">
               <div className="text-center">
                 <h4 className="text-lg font-bold text-emerald-300 mb-2">Build for Impact</h4>
                 <p className="text-sm text-slate-400 font-light leading-relaxed">I focus on creating software that solves real problems. Every feature should add value.</p>
               </div>
               <div className="text-center">
                 <h4 className="text-lg font-bold text-cyan-300 mb-2">Think in Systems</h4>
                 <p className="text-sm text-slate-400 font-light leading-relaxed">Great applications come from understanding how frontend, backend, and databases work together.</p>
               </div>
               <div className="text-center">
                 <h4 className="text-lg font-bold text-purple-300 mb-2">Never Stop Improving</h4>
                 <p className="text-sm text-slate-400 font-light leading-relaxed">Technology evolves fast — I stay adaptable, continuously learning and refining my skills.</p>
               </div>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center pt-8 pb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-white">
              Ready to create something great?
            </h2>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-950 rounded-full font-bold hover:bg-cyan-50 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              Let&apos;s talk
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
          
        </div>
      </section>

      <Footer />
    </div>
  );
}
