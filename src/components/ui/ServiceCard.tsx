'use client';

import { motion } from 'framer-motion';
import {
  TargetIcon,
  SearchIcon,
  LayersIcon,
  ArrowLeftRightIcon,
  RefreshCwIcon,
  StarIcon,
  ShieldIcon,
  FileTextIcon,
} from './Icons';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  target: TargetIcon,
  search: SearchIcon,
  layers: LayersIcon,
  arrows: ArrowLeftRightIcon,
  refresh: RefreshCwIcon,
  star: StarIcon,
  shield: ShieldIcon,
  document: FileTextIcon,
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  note?: string;
  index: number;
  variant?: 'primary' | 'secondary';
}

export default function ServiceCard({
  title,
  description,
  icon,
  note,
  index,
  variant = 'primary',
}: ServiceCardProps) {
  const IconComponent = iconMap[icon] || TargetIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className={`group relative p-5 md:p-6 rounded-2xl border transition-transform duration-300 ${
        variant === 'primary'
          ? 'bg-white border-brand-900 shadow-xl shadow-brand-900/10 hover:-translate-y-1'
          : 'bg-white border-brand-200 shadow-lg shadow-brand-900/5 hover:-translate-y-1'
      }`}
    >
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${
          variant === 'primary'
            ? 'bg-brand-900 text-white'
            : 'bg-brand-800 text-white shadow-sm'
        }`}
      >
        <IconComponent className="w-5 h-5" />
      </div>
      <h3 className="text-base md:text-lg font-semibold text-brand-900 mb-2">{title}</h3>
      <p className="text-sm text-neutral-600 leading-relaxed">{description}</p>
      {note && (
        <span className="inline-block mt-3 text-xs font-medium text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
          {note}
        </span>
      )}
    </motion.div>
  );
}
