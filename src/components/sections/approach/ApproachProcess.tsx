'use client';

import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import HowItWorks from '@/components/ui/HowItWorks';
import type { Step } from '@/components/ui/HowItWorks';
import { DISCLAIMERS } from '@/lib/constants';

const STEPS: Step[] = [
  {
    title: 'Understand',
    description:
      'We begin by understanding your financial goals, time horizon, risk appetite and personal circumstances.',
    colorTheme: 'brand',
  },
  {
    title: 'Identify',
    description:
      'Based on your goals, we consider suitable mutual fund options across categories, fund houses and investment routes.',
    colorTheme: 'blue',
  },
  {
    title: 'Invest',
    description:
      'We support the investment process—whether through SIPs, lumpsum investments, STPs or other relevant routes.',
    colorTheme: 'teal',
  },
  {
    title: 'Review',
    description:
      'Periodic reviews to ensure your portfolio remains aligned as goals, circumstances and market conditions evolve.',
    colorTheme: 'brand',
  },
];

export default function ApproachProcess() {
  return (
    <SectionWrapper background="white" id="approach-process">
      <SectionHeading
        eyebrow="Our Process"
        title="How we work together"
        subtitle="A simple, transparent process designed to put your goals at the centre of every decision."
      />

      <HowItWorks features={STEPS} />

      {/* Risk note */}
      <div className="max-w-3xl mx-auto mt-10 p-5 bg-brand-50/50 rounded-xl border border-brand-100">
        <p className="text-xs text-neutral-500 leading-relaxed">
          <strong className="text-neutral-600">Important:</strong>{' '}
          {DISCLAIMERS.riskWarning} {DISCLAIMERS.investmentRisk}
        </p>
      </div>
    </SectionWrapper>
  );
}
