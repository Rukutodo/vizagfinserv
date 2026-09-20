'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { ADDITIONAL_SERVICES } from '@/lib/constants';
import { ShieldIcon, FileTextIcon as DocumentIcon } from '@/components/ui/Icons';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  shield: ShieldIcon,
  document: DocumentIcon,
};

export default function AdditionalServices() {
  return (
    <SectionWrapper background="brand" id="additional-services">
      <SectionHeading
        eyebrow="Holistic Wealth Management"
        title="Complementary Services"
        subtitle="Protecting and preserving your wealth through comprehensive planning and strategic partnerships."
      />

      <div className="max-w-4xl mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
        {ADDITIONAL_SERVICES.map((service, i) => {
          const IconComponent = iconMap[service.icon] || ShieldIcon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-brand-900/5 relative overflow-hidden group"
            >
              {/* Decorative corner accent */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-50 rounded-full group-hover:scale-150 transition-transform duration-700 ease-out" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-brand-100 text-brand-900 flex items-center justify-center mb-6">
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-brand-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-base text-neutral-600 leading-relaxed mb-6">
                  {service.title === 'Insurance Planning'
                    ? 'Protecting your family and assets is the bedrock of any financial plan. We help assess your risk coverage needs and provide life and health insurance solutions under a separate, dedicated IRDAI licensing arrangement, ensuring you are adequately covered against life\'s uncertainties.'
                    : 'Wealth creation is only half the journey; preservation and transfer are equally important. We facilitate tax optimization and estate planning by coordinating with trusted, independent Chartered Accountants and legal professionals to structure your wealth efficiently.'}
                </p>
                <div className="inline-block px-4 py-1.5 bg-neutral-100 rounded-full text-xs font-semibold tracking-wide text-neutral-500 uppercase">
                  {service.note}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
