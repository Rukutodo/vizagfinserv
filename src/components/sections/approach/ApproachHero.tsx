'use client';

import { motion } from 'framer-motion';

export default function ApproachHero() {
  return (
    <section className="relative bg-brand-950 overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-20 w-[500px] h-[500px] bg-brand-800/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-700/20 rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="container-narrow relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand-300 mb-4">
            Our Approach
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 font-heading">
            Investing with{' '}
            <span className="text-brand-300">purpose & discipline</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-200/80 leading-relaxed">
            We don&apos;t chase trends. We build portfolios around what matters most to you—your
            goals, your timeline, and your peace of mind.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
