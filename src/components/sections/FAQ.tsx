'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';

const FAQS = [
  {
    question: 'What is a Mutual Fund Distributor (MFD)?',
    answer:
      'A Mutual Fund Distributor is an AMFI-registered professional who helps investors choose and invest in mutual fund schemes. We guide you through the process—from understanding your goals to selecting the right funds—and provide ongoing support throughout your investment journey.',
  },
  {
    question: 'How do I start investing with VizagFinServ?',
    answer:
      'Getting started is simple. Reach out to us via phone, email, or our contact form. We\'ll schedule a no-obligation conversation to understand your financial goals, risk appetite, and time horizon. Based on this, we\'ll recommend a personalised investment plan.',
  },
  {
    question: 'What is a SIP and how does it work?',
    answer:
      'A Systematic Investment Plan (SIP) allows you to invest a fixed amount regularly (monthly, quarterly, etc.) in mutual funds. It helps build discipline, leverages rupee cost averaging, and allows you to start with amounts as low as ₹500 per month.',
  },
  {
    question: 'Is there a minimum amount required to start investing?',
    answer:
      'Most mutual fund schemes allow you to start a SIP with as little as ₹500 per month. For lump sum investments, the minimum varies by scheme but typically starts at ₹1,000 to ₹5,000. We\'ll help you find options that suit your budget.',
  },
  {
    question: 'How are your services compensated?',
    answer:
      'As a Mutual Fund Distributor, we receive a commission from the fund houses (AMCs) for the schemes we distribute. There is no separate fee charged to you. Our earnings are aligned with your continued investment, which motivates us to help your portfolio grow.',
  },
  {
    question: 'Can I track my investments online?',
    answer:
      'Yes! You can track all your investments through various platforms like MFCentral, CAMS, and KFintech. We also provide periodic portfolio reviews and statements so you always know how your investments are performing.',
  },
  {
    question: 'What makes VizagFinServ different from other distributors?',
    answer:
      'With 30+ years of collective family experience in mutual fund distribution, we bring a multi-generational approach rooted in trust and discipline. We focus on goal-based investing, maintain complete transparency, and build long-term relationships rather than chasing short-term transactions.',
  },
];

function FAQItem({
  question,
  answer,
  index,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
        isOpen
          ? 'bg-white shadow-xl shadow-brand-900/10 border-brand-200'
          : 'bg-white/80 border-neutral-200 hover:border-brand-200 hover:shadow-md'
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left cursor-pointer"
      >
        <span
          className={`text-sm md:text-base font-semibold transition-colors duration-200 ${
            isOpen ? 'text-brand-900' : 'text-brand-800'
          }`}
        >
          {question}
        </span>

        {/* Toggle icon */}
        <span
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? 'bg-brand-900 text-white rotate-45'
              : 'bg-brand-50 text-brand-900'
          }`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6 -mt-1">
              <div className="h-px bg-brand-100 mb-4" />
              <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper background="light" id="faq">
      <SectionHeading
        eyebrow="Frequently Asked Questions"
        title="Common Questions, Clear Answers"
        subtitle="Everything you need to know about investing with us—explained simply."
      />

      <div className="max-w-3xl mx-auto space-y-3 md:space-y-4">
        {FAQS.map((faq, i) => (
          <FAQItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
            index={i}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
