import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import BusinessSnapshot from '@/components/sections/BusinessSnapshot';
import AboutSreekar from '@/components/sections/AboutSreekar';
import WhyWorkWithUs from '@/components/sections/WhyWorkWithUs';
import AboutProcess from '@/components/sections/about/AboutProcess';
import AboutScopeBento from '@/components/sections/about/AboutScopeBento';
import AboutContactCTA from '@/components/sections/about/AboutContactCTA';

export const metadata: Metadata = {
  title: 'About',
  description:
    'We don’t just invest your money. We invest in your plans. Learn about VizagFinServ (Sasanapuri Sreekar), an AMFI-Registered Mutual Fund Distributor based in Visakhapatnam, Andhra Pradesh.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About VizagFinServ"
        title="We don't just invest your money. We invest in your plans."
        subtitle="Every family we meet is working toward something specific: a child's education, a first home, or a secure retirement. We start with that goal, then build a disciplined investing approach around it."
      />
      <BusinessSnapshot />
      <AboutSreekar linkToPage={false} />
      <WhyWorkWithUs />
      <AboutProcess />
      <AboutScopeBento />
      <AboutContactCTA />
    </>
  );
}
