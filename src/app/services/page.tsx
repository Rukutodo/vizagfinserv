import type { Metadata } from 'next';
import ServicesHero from '@/components/sections/services/ServicesHero';
import DetailedPrimaryServices from '@/components/sections/services/DetailedPrimaryServices';
import SupportingServices from '@/components/sections/services/SupportingServices';
import AdditionalServices from '@/components/sections/services/AdditionalServices';
import ServicesCTA from '@/components/sections/services/ServicesCTA';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'In-depth mutual fund distribution services including goal-based SIP planning, comprehensive portfolio reviews, STP/SWP structuring, and specialized investment funds.',
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <DetailedPrimaryServices />
      <SupportingServices />
      <AdditionalServices />
      <ServicesCTA />
    </>
  );
}

