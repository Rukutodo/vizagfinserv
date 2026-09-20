'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function ServicesCTA() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-white">
      <div className="container-narrow relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-brand-900 font-heading leading-tight mb-6">
            Take the next step in your <span className="text-brand-600">financial journey</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-10">
            Let&apos;s discuss how our tailored mutual fund distribution services can help you achieve your unique life goals. We&apos;re ready when you are.
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
              href="/our-approach"
              variant="ghost"
              size="lg"
              className="text-brand-900 border-2 border-brand-200 hover:border-brand-900 hover:bg-brand-50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              Discover Our Approach
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
