'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import {
  TargetIcon,
  SearchIcon,
  LayersIcon,
  ArrowLeftRightIcon,
  RefreshCwIcon,
  StarIcon,
} from '@/components/ui/Icons';

const DETAILED_SERVICES = [
  {
    title: 'Goal-Based SIP & Investment Planning',
    shortDesc: 'Systematic investment plans designed around your specific life goals.',
    fullDesc:
      'We don’t just start SIPs; we map them to what truly matters. Whether you are building a retirement corpus, saving for your child’s higher education, or planning to buy a home, we calculate the required corpus and structure Systematic Investment Plans (SIPs) to reach those milestones with discipline. We factor in inflation, your time horizon, and risk appetite to create a realistic path to financial freedom.',
    icon: TargetIcon,
  },
  {
    title: 'Fund Selection & Distribution',
    shortDesc: 'Access to schemes across 24+ mutual fund houses.',
    fullDesc:
      'With thousands of mutual fund schemes available, picking the right one can be overwhelming. We cut through the noise by rigorously analyzing schemes from over 24 AMCs. Our selection process looks beyond recent returns to evaluate consistency, fund manager track records, portfolio quality, and risk-adjusted performance. We help you build a diversified portfolio that aligns perfectly with your investment temperament.',
    icon: SearchIcon,
  },
  {
    title: 'Lumpsum & One-Time Investments',
    shortDesc: 'Structured deployment of lumpsum amounts into suitable schemes.',
    fullDesc:
      'Received a bonus, sold an asset, or have surplus savings? Deploying a large sum at once requires careful consideration of market valuations and risk. We provide strategic advice on whether to invest the lumpsum immediately, stagger it over time via STPs, or park it in liquid funds. We ensure your one-time investments are optimized for growth while managing potential downside risks.',
    icon: LayersIcon,
  },
  {
    title: 'STP / SWP Structuring',
    shortDesc: 'Systematic Transfer and Withdrawal Plans for phased investing or income.',
    fullDesc:
      'Systematic Transfer Plans (STP) are crucial for mitigating timing risk when investing large amounts into equities. We structure STPs to gradually move your funds from debt to equity. Conversely, when you need regular income—like during retirement—we design tax-efficient Systematic Withdrawal Plans (SWP) that provide a steady cash flow while keeping the principal invested for continued growth.',
    icon: ArrowLeftRightIcon,
  },
  {
    title: 'Portfolio Review & Rebalancing',
    shortDesc: 'Periodic assessment of your mutual fund portfolio.',
    fullDesc:
      'A "set it and forget it" approach doesn\'t work in a dynamic economic environment. We conduct periodic reviews of your entire mutual fund portfolio to ensure it remains aligned with your initial goals. If asset allocation drifts due to market movements, or if a fund consistently underperforms, we recommend and execute strategic rebalancing to keep your investments on the right track.',
    icon: RefreshCwIcon,
  },
  {
    title: 'Specialized Investment Funds (SIF)',
    shortDesc: 'Access to SIF schemes for eligible investors.',
    fullDesc:
      'For eligible investors seeking exposure beyond traditional mutual funds, we facilitate access to Specialized Investment Funds. These strategies often focus on unique themes, concentrated portfolios, or specific market opportunities that can provide potential alpha generation. We evaluate if these sophisticated instruments fit within your broader wealth accumulation strategy.',
    icon: StarIcon,
  },
];

export default function DetailedPrimaryServices() {
  return (
    <SectionWrapper background="white" id="core-services">
      <SectionHeading
        eyebrow="Core Offerings"
        title="Our Primary Services"
        subtitle="In-depth, personalized mutual fund distribution services designed to build, manage, and protect your wealth over the long term."
      />

      <div className="max-w-5xl mx-auto mt-16 space-y-16 md:space-y-24">
        {DETAILED_SERVICES.map((service, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row gap-8 lg:gap-16 items-center ${
                isEven ? '' : 'md:flex-row-reverse'
              }`}
            >
              {/* Icon/Visual Side */}
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full bg-brand-50/50 flex items-center justify-center before:absolute before:inset-0 before:border before:border-brand-200 before:rounded-full before:scale-110">
                  <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-brand-900 text-white flex items-center justify-center shadow-2xl shadow-brand-900/30">
                    <service.icon className="w-10 h-10 md:w-14 md:h-14" />
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full md:w-2/3 text-center md:text-left">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-brand-100 text-brand-900 font-bold text-sm mb-4">
                  {i + 1}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-brand-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-lg font-medium text-brand-700 mb-4">
                  {service.shortDesc}
                </p>
                <p className="text-base text-neutral-600 leading-relaxed">
                  {service.fullDesc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
