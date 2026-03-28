'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [useFormFallback, setUseFormFallback] = useState(false);
  const { toast } = useToast();

  const handleEmailjsSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    try {
      const SERVICE_ID = "service_eox73kx";
      const TEMPLATE_ID = "ptp2crc";
      const PUBLIC_KEY = "XTyI25B_tOx2wQ0xi";

      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      formRef.current.reset();
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        variant: "destructive",
        title: "Failed to send",
        description: "Something went wrong. Please try again or email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
    hover: {
      y: -8,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <section id="contact" className="relative py-24 px-6 bg-gradient-to-b from-slate-950 to-slate-900/50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="flex items-center gap-2 mb-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="w-2 h-2 bg-cyan-500 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-sm font-semibold text-cyan-400">LET'S TALK</span>
        </motion.div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="text-white">Let&apos;s Build Something</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">Amazing</span>
          </h2>
          <p className="text-cyan-400 text-lg font-semibold mt-4 mb-4">
            Open to internships, collaborations, and tech discussions.
          </p>
          <p className="text-slate-300 mt-2 max-w-2xl">
            Whether you have an exciting project in mind, need technical consultation, or just want to discuss technology—I&apos;d love to hear from you.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* GitHub */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="p-6 border border-slate-800 rounded-lg hover:border-cyan-500/50 transition bg-slate-900/30 hover:bg-slate-900/50 group cursor-pointer"
          >
            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:from-cyan-600 group-hover:to-blue-600 transition duration-300"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </motion.div>
            <h3 className="text-lg font-semibold text-white mb-1">GitHub</h3>
            <p className="text-sm text-slate-400 mb-4">Check out my repositories</p>
            <motion.a
              href="https://github.com/Senuka9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 font-semibold text-sm hover:text-cyan-300 transition flex items-center gap-1"
              whileHover={{ x: 4 }}
            >
              Connect <span>→</span>
            </motion.a>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="p-6 border border-slate-800 rounded-lg hover:border-cyan-500/50 transition bg-slate-900/30 hover:bg-slate-900/50 group cursor-pointer"
          >
            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:from-blue-600 group-hover:to-cyan-600 transition duration-300"
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
            >
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.814 0-9.752h3.554v1.381c.43-.664 1.199-1.608 2.925-1.608 2.136 0 3.738 1.395 3.738 4.393v5.586zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.708 0-.956.768-1.708 1.959-1.708 1.19 0 1.914.752 1.939 1.708 0 .949-.749 1.708-1.983 1.708zm1.582 11.597H3.635V9.236h3.284v11.216zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
              </svg>
            </motion.div>
            <h3 className="text-lg font-semibold text-white mb-1">LinkedIn</h3>
            <p className="text-sm text-slate-400 mb-4">Let's connect professionally</p>
            <motion.a
              href="https://www.linkedin.com/in/senuka-kazuhiro-703b0a366/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BTtpp9GUCRaCdicyD66yIFQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 font-semibold text-sm hover:text-cyan-300 transition flex items-center gap-1"
              whileHover={{ x: 4 }}
            >
              Connect <span>→</span>
            </motion.a>
          </motion.div>

          {/* Email */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className="p-6 border border-slate-800 rounded-lg hover:border-cyan-500/50 transition bg-slate-900/30 hover:bg-slate-900/50 group cursor-pointer"
          >
            <motion.div
              className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:from-cyan-600 group-hover:to-blue-600 transition duration-300"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.div>
            <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
            <p className="text-sm text-slate-400 mb-4">Send me an email</p>
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=senuka501@gmail.com"
              className="text-cyan-400 font-semibold text-sm hover:text-cyan-300 transition flex items-center gap-1"
              whileHover={{ x: 4 }}
            >
              Connect <span>→</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="max-w-2xl mx-auto mt-16 p-8 border border-slate-800 rounded-2xl bg-slate-900/30 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mb-6 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Send me a message</h3>
            <p className="text-slate-400">Fill out the form below and I'll get back to you as soon as possible.</p>
          </div>
          
          <form ref={formRef} onSubmit={handleEmailjsSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="user_name" className="text-sm font-medium text-slate-300">Your Name</label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors outline-none"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="user_email" className="text-sm font-medium text-slate-300">Your Email</label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors outline-none"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-300">Your Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="How can I help you?"
                className="w-full px-4 py-3 rounded-lg bg-slate-950 border border-slate-800 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors outline-none resize-none"
              ></textarea>
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-lg font-semibold text-white transition duration-300 flex items-center justify-center gap-2 ${
                isSubmitting 
                  ? 'bg-slate-800 text-slate-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-lg hover:shadow-cyan-500/25 cursor-pointer'
              }`}
              whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-500">
              Prefer to email directly? <a href="mailto:senuka501@gmail.com" className="text-cyan-400 hover:underline">senuka501@gmail.com</a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
