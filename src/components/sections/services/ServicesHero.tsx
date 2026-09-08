'use client';

import { motion } from 'framer-motion';

export default function ServicesHero() {
  return (
    <section className="relative bg-brand-950 overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-800/30 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-700/20 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand-300 mb-4 border border-brand-300/30 px-3 py-1 rounded-full">
            Our Expertise
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-heading">
            Comprehensive <span className="text-brand-300">Financial</span> Solutions
          </h1>
          <p className="text-lg md:text-xl text-brand-100/80 leading-relaxed">
            From strategic goal-based planning to meticulous portfolio reviews, we provide the full spectrum of mutual fund distribution services tailored to secure your financial future.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
