'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { CONTACT, DISCLAIMERS } from '@/lib/constants';

export default function ApproachCTA() {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-brand-50">
      <div className="container-narrow relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand-600 mb-3">
            Get Started
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-900 font-heading leading-tight mb-5">
            Ready to invest with purpose?
          </h2>
          <p className="text-base md:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed mb-10">
            Reach out for a no-obligation conversation about your investment goals. Whether
            you&apos;re just starting or looking to review your existing portfolio, we&apos;re
            here to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              className="bg-brand-900 !text-white hover:bg-brand-800 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/20 transition-all duration-300 font-semibold"
              size="lg"
            >
              Start a Conversation
            </Button>
            <Button
              href="/services"
              variant="outline"
              size="lg"
              className="hover:-translate-y-1 transition-all duration-300"
            >
              View Our Services
            </Button>
          </div>

          {/* Disclaimer */}
          <p className="mt-10 text-[11px] text-neutral-400 max-w-xl mx-auto">
            {DISCLAIMERS.notAdvisor}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
