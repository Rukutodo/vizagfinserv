import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import FinalCTA from '@/components/sections/FinalCTA';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { CONTACT } from '@/lib/constants';
import { PhoneIcon, MailIcon, MapPinIcon } from '@/components/ui/Icons';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with VizagFinServ for a no-obligation conversation about your mutual fund investment goals. Based in Visakhapatnam, Andhra Pradesh.',
};

const CONTACT_CARDS = [
  {
    icon: PhoneIcon,
    label: 'Phone',
    value: CONTACT.phone,
    href: CONTACT.phoneHref,
  },
  {
    icon: MailIcon,
    label: 'Email',
    value: CONTACT.email,
    href: CONTACT.emailHref,
  },
  {
    icon: MapPinIcon,
    label: 'Location',
    value: CONTACT.location,
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        subtitle="Ready to start a conversation about your investment goals? Reach out for a no-obligation discussion."
      />

      <SectionWrapper background="white">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {CONTACT_CARDS.map((card) => {
            const Icon = card.icon;
            const content = (
              <>
                <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-700 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-1">
                  {card.label}
                </p>
                <p className="text-sm md:text-base font-medium text-brand-900">{card.value}</p>
              </>
            );
            return card.href ? (
              <a
                key={card.label}
                href={card.href}
                className="p-6 rounded-xl bg-white border border-neutral-200 hover:border-brand-200 hover:shadow-md transition-all duration-300"
              >
                {content}
              </a>
            ) : (
              <div
                key={card.label}
                className="p-6 rounded-xl bg-white border border-neutral-200"
              >
                {content}
              </div>
            );
          })}
        </div>
      </SectionWrapper>

      <FinalCTA linkToPage={false} />
    </>
  );
}
