'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, Mail, Sparkles, MessageSquareText, MapPin, Clock3, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleEmailjsSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const userName = (formData.get('user_name') as string)?.trim() || '';
    const userEmail = (formData.get('user_email') as string)?.trim() || '';
    const message = (formData.get('message') as string)?.trim() || '';

    if (!userName || !userEmail || !message) {
      toast({
        variant: 'destructive',
        title: 'Missing fields',
        description: 'Please enter your name, email, and message.',
      });
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      user_name: userName,
      from_name: userName,
      name: userName,
      user_email: userEmail,
      from_email: userEmail,
      email: userEmail,
      reply_to: userEmail,
      message: message,
      to_name: 'Senuka Kazuhiro',
    };

    const SERVICE_ID = 'service_eox73kx';
    const TEMPLATE_ID = 'ptp2crc';
    const PUBLIC_KEY = 'Y-5qg-RXi4N63dbJq';

    try {
      emailjs.init({ publicKey: PUBLIC_KEY });

      // Attempt 1: Send via emailjs.send with dictionary params
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);

      setIsSuccess(true);
      toast({
        title: 'Message sent successfully! 🚀',
        description: 'Thanks for reaching out. I will get back to you soon.',
      });
      formRef.current.reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.warn('EmailJS dictionary send failed, trying sendForm...', error);

      try {
        // Attempt 2: Send via emailjs.sendForm
        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);

        setIsSuccess(true);
        toast({
          title: 'Message sent successfully! 🚀',
          description: 'Thanks for reaching out. I will get back to you soon.',
        });
        formRef.current.reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } catch (fallbackError) {
        console.error('All EmailJS methods failed, triggering mailto fallback:', fallbackError);

        // Attempt 3: Direct mailto link fallback with clipboard copy
        try {
          await navigator.clipboard.writeText(`Name: ${userName}\nEmail: ${userEmail}\nMessage: ${message}`);
        } catch (_) {}

        const mailtoUrl = `mailto:senuka501@gmail.com?subject=${encodeURIComponent(
          `Portfolio Contact from ${userName}`
        )}&body=${encodeURIComponent(`Name: ${userName}\nEmail: ${userEmail}\n\nMessage:\n${message}`)}`;

        window.location.href = mailtoUrl;

        toast({
          title: 'Opened Email Client',
          description: 'EmailJS service unavailable. Pre-filled email client & copied message to clipboard!',
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactLinks = [
    {
      icon: <Github className="h-4 w-4" />,
      label: 'GitHub',
      value: 'Senuka9',
      href: 'https://github.com/Senuka9',
    },
    {
      icon: <Linkedin className="h-4 w-4" />,
      label: 'LinkedIn',
      value: 'Senuka Kazuhiro',
      href: 'https://www.linkedin.com/in/senuka-kazuhiro-703b0a366/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BTtpp9GUCRaCdicyD66yIFQ%3D%3D',
    },
    {
      icon: <Mail className="h-4 w-4" />,
      label: 'Email',
      value: 'senuka501@gmail.com',
      href: 'mailto:senuka501@gmail.com',
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.08),transparent_24%)]" />
      <div className="section-shell relative z-10">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="section-kicker mb-4 w-fit">
              <Sparkles className="h-3.5 w-3.5" />
              Let&apos;s build something sharp
            </div>
            <h2 className="section-title max-w-2xl">A contact section that feels as polished as the work itself.</h2>
          </div>
          <p className="section-copy md:max-w-xl">
            If you want to collaborate, hire, or just talk architecture and product design, send a message through the form or reach me directly through one of the links.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.7 }}
            className="glass-panel relative overflow-hidden p-8"
          >
            <div className="glow-ring" />
            <div className="relative">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-200">
                  <MessageSquareText className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-cyan-200">Contact</p>
                  <p className="mt-1 text-sm text-slate-400">Fastest way to reach me</p>
                </div>
              </div>

              <div className="space-y-4">
                {contactLinks.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ y: -3, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 text-sm transition duration-300 hover:-translate-y-0.5 hover:border-cyan-400/20 hover:bg-white/[0.05] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400"
                  >
                    <span className="flex items-center gap-3 text-slate-200">
                      <motion.span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-slate-950/70 text-cyan-200" whileHover={{ rotate: 6, scale: 1.08 }}>
                        {item.icon}
                      </motion.span>
                      <span>
                        <span className="block text-[11px] font-bold uppercase tracking-[0.22em] text-slate-500">{item.label}</span>
                        <span className="block mt-1 font-medium text-white">{item.value}</span>
                      </span>
                    </span>
                    <motion.div whileHover={{ x: 3 }}>
                      <ArrowRight className="h-4 w-4 text-slate-500" />
                    </motion.div>
                  </motion.a>
                ))}
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center gap-2 text-cyan-200">
                    <MapPin className="h-4 w-4" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.22em]">Location</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">Based in Sri Lanka, open to remote and collaborative opportunities.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <div className="flex items-center gap-2 text-emerald-200">
                    <Clock3 className="h-4 w-4" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.22em]">Response</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">I usually reply within a day or two depending on workload.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass-panel relative overflow-hidden p-8 sm:p-10"
          >
            <div className="glow-ring" />
            <div className="relative">
              <div className="mb-6">
                <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-cyan-200">Send a message</p>
                <h3 className="mt-2 text-3xl font-bold text-white">Tell me about your project</h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
                  A short note is enough. Share what you need, the timeline, and what outcome you want.
                </p>
              </div>

              <form ref={formRef} onSubmit={handleEmailjsSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="user_name" className="text-sm font-medium text-slate-300">Your Name</label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      required
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/40"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="user_email" className="text-sm font-medium text-slate-300">Your Email</label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      required
                      placeholder="Your Email"
                      className="w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/40"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Describe your idea, timeline, or what you need help with."
                    className="w-full resize-none rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/40"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.01, y: -1 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.99 } : {}}
                  animate={!isSubmitting ? { y: [0, -1, 0] } : undefined}
                  transition={!isSubmitting ? { duration: 4, repeat: Infinity, ease: 'easeInOut' } : undefined}
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-2xl px-5 py-4 text-sm font-semibold transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400 ${
                    isSubmitting
                      ? 'cursor-not-allowed bg-slate-800 text-slate-400'
                      : 'bg-linear-to-r from-cyan-400 to-emerald-400 text-slate-950 shadow-[0_20px_40px_-25px_rgba(34,211,238,0.6)] hover:shadow-[0_25px_50px_-25px_rgba(16,185,129,0.6)]'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
