'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { PROCESS_STEPS, DISCLAIMERS } from '@/lib/constants';

export default function HowWeWork() {
  return (
    <SectionWrapper background="white" id="how-we-work" className="relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-50/60 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-brand-50/40 rounded-full blur-[80px] -z-10" />

      <SectionHeading
        eyebrow="Our Process"
        title="How we work together"
        subtitle="A simple, transparent process designed to put your goals at the centre of every decision."
      />

      {/* Process Timeline */}
      <div className="max-w-3xl mx-auto mt-12">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-brand-200/60" />

          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative flex gap-6 md:gap-8 mb-10 last:mb-0"
            >
              {/* Number circle */}
              <div className="relative z-10 shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-brand-900 text-white flex items-center justify-center font-bold text-lg md:text-xl shadow-lg shadow-brand-900/20">
                {step.number}
              </div>

              {/* Content */}
              <div className="pt-1 md:pt-3">
                <h3 className="text-lg md:text-xl font-semibold text-brand-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Risk note */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="max-w-3xl mx-auto mt-14 p-5 bg-white/60 rounded-xl border border-brand-100"
      >
        <p className="text-xs text-neutral-500 leading-relaxed">
          <strong className="text-neutral-600">Important:</strong>{' '}
          {DISCLAIMERS.riskWarning} {DISCLAIMERS.investmentRisk}
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
