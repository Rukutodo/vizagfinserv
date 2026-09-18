'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { GLOSSARY } from '@/lib/constants';

export default function ResourcesGlossary() {
  return (
    <SectionWrapper background="white" id="glossary">
      <SectionHeading
        eyebrow="Glossary"
        title="Mutual fund terms, explained"
        subtitle="Common terms you'll come across while investing—explained simply."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
        {GLOSSARY.map((item, i) => (
          <motion.div
            key={item.term}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="p-5 md:p-6 rounded-xl bg-neutral-50 border border-neutral-100 hover:border-brand-200 transition-colors duration-300"
          >
            <p className="text-sm md:text-base font-semibold text-brand-900 mb-2">{item.term}</p>
            <p className="text-sm text-neutral-600 leading-relaxed">{item.definition}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
