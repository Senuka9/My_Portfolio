'use client';

import { motion } from 'framer-motion';

export default function ProjectsHeader() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
          },
        },
      }}
      className="mx-auto max-w-4xl text-center"
    >
      <motion.div 
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
        }}
        className="section-kicker mx-auto mb-5 w-fit"
      >
        Selected work
      </motion.div>
      
      <motion.h1 
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
        }}
        className="section-title"
      >
        A more curated look at what I&apos;ve built.
      </motion.h1>
      
      <motion.p 
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
        }}
        className="section-copy mx-auto mt-6 max-w-3xl text-center"
      >
        These are live repositories pulled from GitHub, but presented more like case studies than a simple grid. The goal is to make the work feel easier to scan and more premium to explore.
      </motion.p>
    </motion.div>
  );
}
