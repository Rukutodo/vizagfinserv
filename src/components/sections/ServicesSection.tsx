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
        className="mb-16 p-6 md:p-8 bg-white rounded-2xl border border-neutral-200 shadow-sm relative overflow-hidden group hover:border-brand-200 transition-colors duration-300"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-50 rounded-full blur-3xl -z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
        <h4 className="text-sm font-bold uppercase tracking-widest text-brand-900 mb-5 flex items-center gap-2">
          <span className="w-8 h-px bg-brand-900/20"></span>
          Supporting Services
        </h4>
        <ul className="flex flex-wrap gap-2 md:gap-3">
          {SUPPORTING_SERVICES.map((service) => (
            <li
              key={service}
              className="text-sm font-medium text-white bg-brand-900 px-4 py-2 md:px-5 md:py-2.5 rounded-full border border-brand-900 shadow-md transition-transform duration-300 hover:-translate-y-0.5 cursor-default"
            >
              {service}
            </li>
          ))}
        </ul>
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
