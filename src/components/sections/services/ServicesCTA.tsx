'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function ServicesCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-brand-950">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-800/30 rounded-full blur-[150px]" />
      </div>

      <div className="container-narrow relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white font-heading leading-tight mb-6">
            Take the next step in your <span className="text-brand-300">financial journey</span>
          </h2>
          <p className="text-lg md:text-xl text-brand-200/80 leading-relaxed mb-10">
            Let's discuss how our tailored mutual fund distribution services can help you achieve your unique life goals. We're ready when you are.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              className="bg-white !text-brand-900 hover:bg-brand-50 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/20 transition-all duration-300 font-semibold"
              size="lg"
            >
              Start a Conversation
            </Button>
            <Button
              href="/our-approach"
              variant="ghost"
              size="lg"
              className="text-white border-2 border-brand-500/30 hover:border-brand-300 hover:bg-brand-800/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              Discover Our Approach
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
