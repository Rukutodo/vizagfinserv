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

export default function WhyWorkWithUs() {
  return (
    <SectionWrapper background="dark" id="why-us" className="relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/20 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-600/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      
      <SectionHeading
        eyebrow="Why Work With Us"
        title="Built for trust, not transactions"
        subtitle="What makes our approach different—focused on relationships, transparency and your long-term financial well-being."
        light={true}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 relative z-10">
        {DIFFERENTIATORS.map((item, i) => {
          const IconComponent = iconMap[item.icon] || UserIcon;
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-5 md:p-7 rounded-2xl bg-white shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-brand-900/40 transition-all duration-300 hover:-translate-y-1 border border-white/10"
            >
              <div className="w-11 h-11 rounded-lg bg-brand-50 text-brand-900 flex items-center justify-center mb-4 group-hover:bg-brand-900 group-hover:text-white transition-all duration-300 shadow-sm group-hover:scale-110">
                <IconComponent className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-brand-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed group-hover:text-neutral-700 transition-colors">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
