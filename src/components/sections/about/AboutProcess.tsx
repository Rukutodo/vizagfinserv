'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';

const steps = [
  {
    number: '01',
    title: 'Understand Goals & Risk Comfort',
    description:
      'We begin by understanding your goals, timelines and comfort with risk before discussing any investment options.',
  },
  {
    number: '02',
    title: 'Suitable Scheme Selection & Setup',
    description:
      'We help you choose suitable mutual fund schemes and invest through SIPs, lump sums, STPs and SWPs tailored to your cash flow.',
  },
  {
    number: '03',
    title: 'Regular Portfolio Reviews',
    description:
      'We review your portfolio regularly and help you rebalance when your goals, timelines or personal circumstances change.',
  },
  {
    number: '04',
    title: 'Openness & Risk Awareness',
    description:
      'We are completely open about how we are paid through product provider commissions and transparent about the market risks involved.',
  },
];

export default function AboutProcess() {
  return (
    <SectionWrapper background="light" id="about-process">
      <SectionHeading
        eyebrow="How We Work"
        title="A disciplined approach to investing"
        subtitle="Putting your family's aspirations and long-term security at the center of every decision."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white p-6 md:p-7 rounded-2xl border border-neutral-200/80 shadow-sm hover:shadow-md transition-shadow relative flex flex-col justify-between"
          >
            <div>
              <span className="inline-block text-2xl font-bold font-heading text-brand-800 mb-4 bg-brand-50 px-3 py-1 rounded-lg">
                {step.number}
              </span>
              <h3 className="text-lg font-bold text-brand-900 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
