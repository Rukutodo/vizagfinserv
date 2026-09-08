'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { SUPPORTING_SERVICES } from '@/lib/constants';
import { FileTextIcon } from '@/components/ui/Icons'; // Using FileTextIcon as a generic support icon

export default function SupportingServices() {
  return (
    <SectionWrapper background="light" id="supporting-services" className="border-y border-brand-100/50">
      <SectionHeading
        eyebrow="Beyond Advice"
        title="Operational Excellence"
        subtitle="We handle the administrative heavy lifting so you can focus on your life, not paperwork."
      />

      <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {SUPPORTING_SERVICES.map((service, i) => (
          <motion.div
            key={service}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white p-6 md:p-8 rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md hover:border-brand-200 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-full bg-brand-50 text-brand-900 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-900 group-hover:text-white transition-all duration-300">
              <FileTextIcon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold text-brand-900 mb-3">
              {service.split(' support')[0]} {/* Clean up title if it ends in support */}
            </h3>
            <p className="text-sm text-neutral-600">
              {service === 'Folio & KYC/KYD servicing'
                ? 'Seamless handling of your investment folios, Know Your Customer (KYC), and other regulatory documentation.'
                : service === 'Transaction execution support'
                ? 'Flawless execution of your buy, sell, and switch orders ensuring timely processing.'
                : 'Dedicated assistance in resolving any queries or grievances with Asset Management Companies and RTAs.'}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
