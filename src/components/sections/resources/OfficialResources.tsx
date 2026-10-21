'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { OFFICIAL_RESOURCES, DISCLAIMERS } from '@/lib/constants';

export default function OfficialResources() {
  return (
    <SectionWrapper background="light" id="official-resources">
      <SectionHeading
        eyebrow="Official Resources"
        title="Investor education & grievance redressal"
        subtitle="Independent resources from the industry body and regulator, outside anything we distribute."
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
        {OFFICIAL_RESOURCES.map((resource, i) => (
          <motion.a
            key={resource.title}
            href={resource.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            whileHover={{ y: -8, scale: 1.03 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="p-6 rounded-xl bg-white border border-neutral-200 hover:border-brand-200 hover:shadow-md transition-all duration-300"
          >
            <p className="text-sm md:text-base font-semibold text-brand-900 mb-2">{resource.title}</p>
            <p className="text-sm text-neutral-600 leading-relaxed">{resource.description}</p>
          </motion.a>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-neutral-500 max-w-2xl mx-auto">
        {DISCLAIMERS.riskWarning}
      </p>
    </SectionWrapper>
  );
}
