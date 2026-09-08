'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { PRINCIPLES } from '@/lib/constants';

export default function ApproachPrinciples() {
  return (
    <SectionWrapper background="dark" id="approach-principles" className="relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/15 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-600/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <SectionHeading
        eyebrow="Our Principles"
        title="What guides our approach"
        subtitle="Four principles that shape how we think about investing—rooted in discipline, patience and transparency."
        light={true}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 max-w-4xl mx-auto">
        {PRINCIPLES.map((principle, i) => (
          <motion.div
            key={principle.number}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="group p-6 md:p-8 rounded-2xl bg-white shadow-xl shadow-black/20 hover:-translate-y-1 transition-all duration-300"
          >
            {/* Number badge */}
            <div className="flex items-center gap-4 mb-4">
              <span className="w-12 h-12 rounded-xl bg-brand-900 text-white flex items-center justify-center font-bold text-lg shadow-md">
                {principle.number}
              </span>
              <h3 className="text-lg font-semibold text-brand-900">{principle.title}</h3>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed pl-16">
              {principle.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
