'use client';

import { motion } from 'framer-motion';

export default function ApproachHero() {
  return (
    <section className="relative bg-brand-950 overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Decorative Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [-20, 25, -20],
            y: [-15, 20, -15],
            scale: [1, 1.2, 1],
            opacity: [0.35, 0.6, 0.35],
          }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 -left-20 w-[500px] h-[500px] bg-brand-800/50 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [25, -20, 25],
            y: [15, -20, 15],
            scale: [1, 1.25, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-brand-600/30 rounded-full blur-[110px]"
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-narrow relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand-300 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
              Our Approach
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)', scale: 0.96 }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-heading"
          >
            Investing with{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-200 via-brand-300 to-emerald-300">
              purpose & discipline
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.85, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-brand-200/90 leading-relaxed"
          >
            We don&apos;t chase trends. We build portfolios around what matters most to you: your
            goals, your timeline, and your peace of mind.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
