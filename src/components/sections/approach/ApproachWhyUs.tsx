'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { DIFFERENTIATORS } from '@/lib/constants';
import {
  UserIcon,
  CalendarIcon,
  EyeIcon,
  HandshakeIcon,
  GridIcon,
  FocusIcon,
} from '@/components/ui/Icons';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  user: UserIcon,
  calendar: CalendarIcon,
  eye: EyeIcon,
  handshake: HandshakeIcon,
  grid: GridIcon,
  focus: FocusIcon,
};

export default function ApproachWhyUs() {
  return (
    <SectionWrapper background="light" id="approach-why-us">
      <SectionHeading
        eyebrow="Why Work With Us"
        title="Built for trust, not transactions"
        subtitle="What makes our approach different—focused on relationships, transparency and your long-term financial well-being."
      />

      <div className="max-w-4xl mx-auto">
        {DIFFERENTIATORS.map((item, i) => {
          const IconComponent = iconMap[item.icon] || UserIcon;
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: isEven ? -25 : 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`flex items-start gap-5 md:gap-8 p-5 md:p-6 rounded-2xl mb-4 transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-brand-900/5 ${
                isEven ? '' : 'md:flex-row-reverse md:text-right'
              }`}
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-900 text-white flex items-center justify-center shadow-md">
                <IconComponent className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold text-brand-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
