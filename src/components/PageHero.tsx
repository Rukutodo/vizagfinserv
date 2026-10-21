'use client';

import { motion } from 'framer-motion';

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <div className="relative bg-brand-950 text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Dynamic Animated Ambient Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            x: [-20, 30, -20],
            y: [-15, 20, -15],
            scale: [1, 1.2, 1],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-24 -left-20 w-[450px] h-[450px] rounded-full bg-gradient-to-tr from-brand-700/60 to-brand-500/20 blur-[100px]"
        />
        <motion.div
          animate={{
            x: [30, -20, 30],
            y: [20, -25, 20],
            scale: [1, 1.25, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-brand-600/50 to-brand-400/20 blur-[120px]"
        />
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="container-narrow relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {eyebrow && (
            <motion.div
              initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-3"
            >
              <span className="inline-block text-xs font-semibold tracking-[0.25em] uppercase text-brand-300 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
                {eyebrow}
              </span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)', scale: 0.96 }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
            transition={{ duration: 0.85, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-5"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.85, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="text-brand-200/90 text-base md:text-xl leading-relaxed max-w-2xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
}
