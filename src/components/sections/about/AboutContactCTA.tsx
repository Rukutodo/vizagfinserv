'use client';

import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';
import { CONTACT } from '@/lib/constants';
import { PhoneIcon, MailIcon, MapPinIcon } from '@/components/ui/Icons';

export default function AboutContactCTA() {
  return (
    <SectionWrapper background="white" id="about-contact">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-brand-900 to-brand-950 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-500/10 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10 text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-brand-300 mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Let&apos;s Talk
          </h2>
          <p className="text-brand-200 text-sm md:text-base leading-relaxed">
            Every family is working toward something specific. We start with your goals and build a disciplined approach around them.
          </p>
        </div>

        {/* Contact info grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-brand-300 mb-3">
              <MapPinIcon className="w-5 h-5" />
            </div>
            <p className="text-xs text-brand-300 uppercase tracking-wider mb-1">Advisor &amp; Location</p>
            <p className="text-sm font-semibold text-white">Sasanapuri Sreekar</p>
            <p className="text-xs text-brand-200">{CONTACT.location}</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-brand-300 mb-3">
              <PhoneIcon className="w-5 h-5" />
            </div>
            <p className="text-xs text-brand-300 uppercase tracking-wider mb-1">Phone</p>
            <a
              href={CONTACT.phoneHref}
              className="text-sm font-semibold text-white hover:text-brand-200 transition-colors"
            >
              {CONTACT.phone}
            </a>
            <p className="text-xs text-brand-200">Call or WhatsApp</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 text-center flex flex-col items-center">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-brand-300 mb-3">
              <MailIcon className="w-5 h-5" />
            </div>
            <p className="text-xs text-brand-300 uppercase tracking-wider mb-1">Email</p>
            <a
              href={CONTACT.emailHref}
              className="text-sm font-semibold text-white hover:text-brand-200 transition-colors"
            >
              {CONTACT.email}
            </a>
            <p className="text-xs text-brand-200">Direct Inquiries</p>
          </div>
        </div>

        {/* Credentials row */}
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 text-xs text-brand-200 mb-8 pb-8 border-b border-white/10">
          <span className="bg-white/10 px-3.5 py-1.5 rounded-full font-medium text-white">
            AMFI-Registered Mutual Fund Distributor
          </span>
          <span className="bg-white/10 px-3.5 py-1.5 rounded-full font-medium text-white">
            {CONTACT.arn}
          </span>
          <span className="bg-white/10 px-3.5 py-1.5 rounded-full font-medium text-white">
            {CONTACT.euin}
          </span>
        </div>

        {/* Action buttons */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            href={CONTACT.phoneHref}
            className="!bg-white !text-brand-900 hover:!bg-brand-50 hover:-translate-y-0.5 hover:shadow-lg w-full sm:w-auto font-semibold transition-all duration-200"
          >
            <PhoneIcon className="w-4 h-4 mr-2" />
            Call {CONTACT.phone}
          </Button>
          <Button
            href="/contact"
            variant="ghost"
            className="!text-white border-2 border-brand-500/40 hover:border-brand-300 hover:!bg-brand-800/50 hover:-translate-y-0.5 w-full sm:w-auto font-semibold transition-all duration-200"
          >
            Contact &amp; Enquiry Form
          </Button>
        </div>

        {/* Statutory disclaimer */}
        <div className="relative z-10 mt-10 pt-6 border-t border-white/10 text-center">
          <p className="text-xs text-brand-300/90 leading-relaxed max-w-2xl mx-auto">
            <strong>Mutual Fund investments are subject to market risks, read all scheme related documents carefully.</strong>
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
