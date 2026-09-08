'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import Image from 'next/image';

const BELIEFS = [
  {
    title: 'Your goals shape the plan',
    description:
      'Every investment we recommend starts with a deep understanding of what you\u0027re working towards—not what\u0027s trending in the market.',
  },
  {
    title: 'Discipline beats timing',
    description:
      'Consistent, regular investing through market cycles has historically served investors better than attempting to predict the next move.',
  },
  {
    title: 'Compounding rewards patience',
    description:
      'The most powerful force in investing works silently over time. Staying invested through volatility is often the hardest—and most rewarding—choice.',
  },
];

export default function ApproachPhilosophy() {
  return (
    <SectionWrapper background="white" id="philosophy">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeading
            eyebrow="Our Philosophy"
            title="Goals come before products"
            subtitle="The right investment approach starts with understanding what you're working towards—not which fund is trending today."
            align="left"
          />

          <div className="space-y-6 mt-8">
            {BELIEFS.map((belief, i) => (
              <motion.div
                key={belief.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="shrink-0 mt-1 w-8 h-8 rounded-lg bg-brand-900 text-white flex items-center justify-center text-sm font-bold shadow-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-brand-900 mb-1">{belief.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{belief.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-brand-900/10">
            <Image
              src="/images/philosophy.webp"
              alt="Family discussing long-term financial goals"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-950/40 via-transparent to-transparent" />
          </div>

          {/* Floating card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute -bottom-6 -left-4 md:left-8 bg-white rounded-xl shadow-xl p-4 md:p-5 border border-brand-100 max-w-[220px]"
          >
            <p className="text-sm font-semibold text-brand-900">30+ Years of Trust</p>
            <p className="text-xs text-neutral-600 mt-1">
              Multi-generational experience guiding families towards their financial goals.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
