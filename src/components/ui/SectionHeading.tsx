'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left';
  const maxW = align === 'center' ? 'max-w-2xl' : '';

  return (
    <div className={`mb-8 md:mb-12 ${alignClass} ${maxW} ${className}`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-3"
        >
          <span
            className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase ${
              light ? 'text-brand-300' : 'text-brand-600'
            }`}
          >
            {eyebrow}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 24, filter: 'blur(8px)', scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
        className={`text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-tight font-heading ${
          light ? 'text-white' : 'text-brand-900'
        }`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            light ? 'text-brand-200' : 'text-neutral-600'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
