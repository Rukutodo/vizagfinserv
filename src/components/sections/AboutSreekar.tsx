'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';
import { CONTACT } from '@/lib/constants';
import { UserIcon } from '@/components/ui/Icons';

interface AboutSreekarProps {
  linkToPage?: boolean;
  imageSrc?: string | null;
}

export default function AboutSreekar({
  linkToPage = true,
  imageSrc = null, // Pass image path once replacement photo is ready
}: AboutSreekarProps) {
  return (
    <SectionWrapper background="white" id="about-sreekar">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center">
        {/* Portrait / Executive Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.93, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.025 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-2 flex justify-center"
        >
          {imageSrc ? (
            <div className="relative w-64 h-72 md:w-80 md:h-[360px] rounded-2xl overflow-hidden shadow-xl shadow-brand-100/40">
              <Image
                src={imageSrc}
                alt={`${CONTACT.name}, AMFI-Registered Mutual Fund Distributor`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 280px, 320px"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/30 via-transparent to-transparent" />

              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-semibold text-lg font-heading">
                  {CONTACT.name}
                </p>
                <p className="text-brand-200 text-xs mt-0.5">
                  {CONTACT.designation}
                </p>
              </div>
            </div>
          ) : (
            <div className="relative w-64 h-72 md:w-80 md:h-[360px] rounded-2xl overflow-hidden shadow-xl shadow-brand-900/10 border border-brand-800/20 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-950 flex flex-col items-center justify-center p-6 text-center group">
              {/* Ambient background glow */}
              <div className="absolute -top-16 -right-16 w-44 h-44 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-44 h-44 bg-brand-400/15 rounded-full blur-3xl pointer-events-none" />

              {/* Subtle dashed inner boundary */}
              <div className="absolute inset-3 rounded-xl border border-dashed border-white/15 pointer-events-none" />

              {/* Avatar silhouette */}
              <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/25 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300 mb-4">
                <UserIcon className="w-10 h-10 md:w-12 md:h-12 text-brand-200" />
              </div>

              {/* Distributor details */}
              <div className="relative z-10">
                <p className="text-white font-semibold text-lg font-heading tracking-wide">
                  {CONTACT.name}
                </p>
                <p className="text-brand-300 text-xs mt-1">
                  {CONTACT.designation}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[11px] text-brand-200 font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>AMFI: {CONTACT.arn}</span>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30, filter: 'blur(6px)' }}
          whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-3"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand-600 mb-3">
            Meet Sreekar
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-900 leading-tight mb-5">
            A family tradition of trust
          </h2>

          <div className="space-y-4 text-neutral-600 text-sm md:text-base leading-relaxed">
            <p>
              Sasanapuri Sreekar has been an AMFI-registered Mutual Fund Distributor since {CONTACT.since}, based in {CONTACT.location}. His approach centres on understanding each family&apos;s unique goals and circumstances before considering investment options.
            </p>
            <p>
              The foundation of trust runs deeper than a single generation. Sreekar&apos;s mother has been an AMFI-registered distributor since 1995, bringing three decades of experience in guiding family investments.
            </p>
            <p>
              This multi-generational experience in mutual fund distribution shapes a practice built on long-term relationships, disciplined investing and genuine care for each client&apos;s financial well-being.
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="text-xs font-medium text-brand-700 bg-brand-50 border border-brand-100 px-3 py-1.5 rounded-full">
              {CONTACT.arn}
            </span>
            <span className="text-xs font-medium text-brand-700 bg-brand-50 border border-brand-100 px-3 py-1.5 rounded-full">
              {CONTACT.euin}
            </span>
            <span className="text-xs font-medium text-brand-700 bg-brand-50 border border-brand-100 px-3 py-1.5 rounded-full">
              MFD Since {CONTACT.since}
            </span>
          </div>

          {linkToPage && (
            <div className="mt-8">
              <Button href="/about" variant="secondary">
                About Us
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
