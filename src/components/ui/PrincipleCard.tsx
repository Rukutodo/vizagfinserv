'use client';

import { motion } from 'framer-motion';

interface PrincipleCardProps {
  number: string;
  title: string;
  description: string;
  index: number;
  variant?: 'light' | 'dark';
}

export default function PrincipleCard({
  number,
  title,
  description,
  index,
  variant = 'light',
}: PrincipleCardProps) {
  const isDark = variant === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className={`group relative p-5 md:p-7 rounded-xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
        isDark 
          ? 'bg-white/5 border-white/10 hover:border-brand-400 hover:bg-white/10 hover:shadow-brand-900/50' 
          : 'bg-white border-neutral-200 hover:border-brand-300 hover:shadow-brand-50'
      }`}
    >
      <span className={`block text-4xl md:text-5xl font-bold transition-colors duration-300 font-heading mb-3 ${
        isDark 
          ? 'text-brand-500/40 group-hover:text-brand-400' 
          : 'text-brand-100 group-hover:text-brand-200'
      }`}>
        {number}
      </span>
      <h3 className={`text-lg font-semibold mb-2 ${isDark ? 'text-white' : 'text-brand-900'}`}>{title}</h3>
      <p className={`text-sm leading-relaxed ${isDark ? 'text-brand-100/80' : 'text-neutral-600'}`}>
        {description}
      </p>
    </motion.div>
  );
}
