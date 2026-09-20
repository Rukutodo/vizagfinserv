'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';

const DETAILED_SERVICES = [
  {
    title: 'Goal-Based SIP & Investment Planning',
    shortDesc: 'Systematic investment plans designed around your specific life goals.',
    fullDesc:
      'We don\'t just start SIPs; we map them to what truly matters. Whether you are building a retirement corpus, saving for your child\'s higher education, or planning to buy a home, we calculate the required corpus and structure Systematic Investment Plans (SIPs) to reach those milestones with discipline. We factor in inflation, your time horizon, and risk appetite to create a realistic path to financial freedom.',
    image: '/images/service-goal-planning.jpg',
  },
  {
    title: 'Fund Selection & Distribution',
    shortDesc: 'Access to schemes across 24+ mutual fund houses.',
    fullDesc:
      'With thousands of mutual fund schemes available, picking the right one can be overwhelming. We cut through the noise by rigorously analyzing schemes from over 24 AMCs. Our selection process looks beyond recent returns to evaluate consistency, fund manager track records, portfolio quality, and risk-adjusted performance. We help you build a diversified portfolio that aligns perfectly with your investment temperament.',
    image: '/images/service-fund-selection.jpg',
  },
  {
    title: 'Lumpsum & One-Time Investments',
    shortDesc: 'Structured deployment of lumpsum amounts into suitable schemes.',
    fullDesc:
      'Received a bonus, sold an asset, or have surplus savings? Deploying a large sum at once requires careful consideration of market valuations and risk. We provide strategic advice on whether to invest the lumpsum immediately, stagger it over time via STPs, or park it in liquid funds. We ensure your one-time investments are optimized for growth while managing potential downside risks.',
    image: '/images/service-lumpsum.jpg',
  },
  {
    title: 'STP / SWP Structuring',
    shortDesc: 'Systematic Transfer and Withdrawal Plans for phased investing or income.',
    fullDesc:
      'Systematic Transfer Plans (STP) are crucial for mitigating timing risk when investing large amounts into equities. We structure STPs to gradually move your funds from debt to equity. Conversely, when you need regular income—like during retirement—we design tax-efficient Systematic Withdrawal Plans (SWP) that provide a steady cash flow while keeping the principal invested for continued growth.',
    image: '/images/service-stp-swp.jpg',
  },
  {
    title: 'Portfolio Review & Rebalancing',
    shortDesc: 'Periodic assessment of your mutual fund portfolio.',
    fullDesc:
      'A "set it and forget it" approach doesn\'t work in a dynamic economic environment. We conduct periodic reviews of your entire mutual fund portfolio to ensure it remains aligned with your initial goals. If asset allocation drifts due to market movements, or if a fund consistently underperforms, we recommend and execute strategic rebalancing to keep your investments on the right track.',
    image: '/images/service-portfolio-review.jpg',
  },
  {
    title: 'Specialized Investment Funds (SIF)',
    shortDesc: 'Access to SIF schemes for eligible investors.',
    fullDesc:
      'For eligible investors seeking exposure beyond traditional mutual funds, we facilitate access to Specialized Investment Funds. These strategies often focus on unique themes, concentrated portfolios, or specific market opportunities that can provide potential alpha generation. We evaluate if these sophisticated instruments fit within your broader wealth accumulation strategy.',
    image: '/images/service-sif.jpg',
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

      <div className="max-w-6xl mx-auto mt-16 space-y-20 md:space-y-28">
        {DETAILED_SERVICES.map((service, i) => {
          const isEven = i % 2 === 0;
          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col gap-8 lg:gap-14 items-center ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Image Side */}
              <div className="w-full lg:w-1/2">
                <div className="relative group rounded-2xl overflow-hidden shadow-2xl shadow-brand-900/15">
                  {/* Gradient overlay on image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-brand-950/10 to-transparent z-10 pointer-events-none" />

                  {/* Number badge */}
                  <div className="absolute top-5 left-5 z-20">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm text-brand-900 font-bold text-sm shadow-lg">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <Image
                    src={service.image}
                    alt={service.title}
                    width={720}
                    height={480}
                    className="w-full h-64 sm:h-72 md:h-80 lg:h-[360px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Bottom label on image */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-5">
                    <span className="inline-block text-xs font-semibold tracking-widest uppercase text-white/80">
                      {service.shortDesc}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <div className="space-y-5">
                  {/* Thin accent line */}
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-px bg-brand-600" />
                    <span className="text-xs font-semibold tracking-widest uppercase text-brand-600">
                      Service {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-brand-900 leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
                    {service.fullDesc}
                  </p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
