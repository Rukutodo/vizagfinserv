'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import ServiceCard from '@/components/ui/ServiceCard';
import Button from '@/components/ui/Button';
import {
  PRIMARY_SERVICES,
  SUPPORTING_SERVICES,
  ADDITIONAL_SERVICES,
} from '@/lib/constants';

export default function ServicesSection() {
  return (
    <SectionWrapper background="white" id="services" className="relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-brand-50/50 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-brand-50/50 rounded-full blur-[100px] -z-10" />
      <SectionHeading
        eyebrow="What We Do"
        title="Services"
        subtitle="Comprehensive mutual fund distribution and goal-based investing support, backed by personalized service."
      />

      {/* Primary Services */}
      <div className="mb-10">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-lg font-semibold text-brand-800 mb-5"
        >
          Goal-Based Investing
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {PRIMARY_SERVICES.map((service, i) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={i}
            />
          ))}
        </div>
      </div>

      {/* Supporting Services */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-16 p-5 sm:p-6 md:p-8 bg-neutral-50/70 border border-neutral-200/80 rounded-2xl relative overflow-hidden backdrop-blur-sm"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 md:mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-600"></span>
            <h4 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-brand-900">
              Operational & Execution Support
            </h4>
          </div>
          <span className="text-xs text-neutral-500 hidden sm:inline-block">
            Seamless back-office assistance
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
          {SUPPORTING_SERVICES.map((service) => (
            <div
              key={service}
              className="flex items-center gap-3 p-3.5 sm:p-4 rounded-xl bg-white border border-neutral-200/90 shadow-xs hover:border-brand-300 hover:shadow-sm transition-all duration-200"
            >
              <div className="w-8 h-8 rounded-lg bg-brand-50 text-brand-700 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-medium text-neutral-800 leading-snug">
                {service}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Additional Services */}
      <div className="mb-10">
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xl font-semibold text-brand-900 mb-6 flex items-center gap-3"
        >
          Additional Services
        </motion.h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-2xl">
          {ADDITIONAL_SERVICES.map((service, i) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              note={service.note}
              index={i}
              variant="secondary"
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <Button href="/services" variant="primary" className="bg-brand-900 text-white hover:bg-brand-800 hover:shadow-lg hover:shadow-brand-900/20 px-8 py-3 rounded-full transition-all duration-300">
          View All Services
        </Button>
      </div>
    </SectionWrapper>
  );
}
