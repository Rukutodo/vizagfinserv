'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';
import { ShieldIcon, HandshakeIcon } from '@/components/ui/Icons';

const mutualFundOfferings = [
  'Goal based SIP and investment support',
  'Fund selection and distribution across AMCs',
  'Lumpsum investments',
  'STP and SWP setup',
  'Portfolio review and rebalancing',
  'Specialized Investment Funds (SIF), as a distributor since October 2026',
];

const otherProducts = [
  'Post office savings schemes',
  'RBI bonds',
  'Corporate deposits',
];

export default function AboutScopeBento() {
  return (
    <SectionWrapper background="light" id="about-scope">
      <SectionHeading
        eyebrow="Offerings & Standards"
        title="Distribution Scope & Commitment"
        subtitle="A clear view of the products we distribute, services we support, and the disciplined boundaries we uphold."
      />

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-6xl mx-auto">
        {/* Card 1: Mutual Funds (Col 7) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-7 bg-brand-900 text-white rounded-3xl p-8 md:p-10 flex flex-col justify-between shadow-xl relative overflow-hidden group"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-300 bg-white/10 px-3 py-1 rounded-full">
                Core Offering
              </span>
              <span className="text-xs text-brand-200 font-medium">AMFI-Registered</span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold font-heading mb-4">
              Mutual Funds
            </h3>
            <p className="text-sm text-brand-200 mb-6 leading-relaxed">
              We provide comprehensive mutual fund distribution across all major fund houses, tailored to your family&apos;s financial horizons.
            </p>

            <ul className="space-y-3">
              {mutualFundOfferings.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-brand-100">
                  <svg
                    className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-brand-300">
            <span>SIP • Lumpsum • STP • SWP</span>
            <span>SIF Distributor</span>
          </div>
        </motion.div>

        {/* Card 2: Other Financial Products (Col 5) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-5 bg-white border border-neutral-200/80 rounded-3xl p-8 md:p-10 flex flex-col justify-between shadow-sm relative overflow-hidden"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-700 bg-brand-50 px-3 py-1 rounded-full border border-brand-100">
                Fixed Income &amp; Referrals
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold font-heading text-brand-900 mb-3">
              Other Financial Products
            </h3>
            <p className="text-sm text-neutral-600 mb-5 leading-relaxed">
              We also help clients with government backed and conservative fixed income instruments:
            </p>

            <ul className="space-y-2.5 mb-6">
              {otherProducts.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm font-medium text-neutral-800">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-200/70">
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1">
                Tax &amp; Estate Referrals
              </p>
              <p className="text-xs text-neutral-600 leading-relaxed">
                For tax and estate matters, we refer clients to independent CAs and legal professionals.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-neutral-100">
            <p className="text-[11px] text-neutral-500 italic leading-relaxed">
              *These products are not mutual funds, and the mutual fund risk warning does not apply to them. [Authorisation or agency details held for these products available upon request.]
            </p>
          </div>
        </motion.div>

        {/* Card 3: What We Don't Do - No Speculation (Col 6) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="md:col-span-6 bg-white border border-neutral-200/80 rounded-3xl p-8 shadow-sm flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mb-5">
              <ShieldIcon className="w-6 h-6" />
            </div>

            <div className="inline-block text-xs font-semibold uppercase tracking-wider text-rose-700 bg-rose-50 px-3 py-1 rounded-full mb-3">
              What We Don&apos;t Do
            </div>

            <h3 className="text-xl md:text-2xl font-bold font-heading text-brand-900 mb-3">
              No Stock Trading or F&amp;O
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              We do not offer stock trading, Futures &amp; Options (F&amp;O), intraday tips, or speculative products. Our focus is strictly on long-term wealth accumulation rather than short-term market speculation.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-medium">
            <span>Disciplined Wealth Creation</span>
            <span className="text-rose-600 font-semibold">Zero Speculation</span>
          </div>
        </motion.div>

        {/* Card 4: What We Don't Do - Open Compensation (Col 6) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-6 bg-white border border-neutral-200/80 rounded-3xl p-8 shadow-sm flex flex-col justify-between"
        >
          <div>
            <div className="w-12 h-12 rounded-2xl bg-brand-50 text-brand-900 flex items-center justify-center mb-5">
              <HandshakeIcon className="w-6 h-6" />
            </div>

            <div className="inline-block text-xs font-semibold uppercase tracking-wider text-brand-800 bg-brand-50 px-3 py-1 rounded-full mb-3">
              Transparency
            </div>

            <h3 className="text-xl md:text-2xl font-bold font-heading text-brand-900 mb-3">
              Clear Commission Disclosures
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              We are paid commissions by product providers for the financial products we distribute. We are open, upfront, and always happy to explain exactly how that works, at any time.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500 font-medium">
            <span>Open &amp; Honest Communication</span>
            <span className="text-brand-800 font-semibold">Full Disclosure</span>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
