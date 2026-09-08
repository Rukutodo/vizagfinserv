import type { Metadata } from 'next';
import ApproachHero from '@/components/sections/approach/ApproachHero';
import ApproachPhilosophy from '@/components/sections/approach/ApproachPhilosophy';
import ApproachPrinciples from '@/components/sections/approach/ApproachPrinciples';
import ApproachProcess from '@/components/sections/approach/ApproachProcess';
import ApproachWhyUs from '@/components/sections/approach/ApproachWhyUs';
import ApproachCTA from '@/components/sections/approach/ApproachCTA';

export const metadata: Metadata = {
  title: 'Our Approach',
  description:
    'Understand our investment philosophy — a goal-based, disciplined approach to mutual fund investing focused on long-term compounding rather than short-term market timing.',
};

export default function OurApproachPage() {
  return (
    <>
      <ApproachHero />
      <ApproachPhilosophy />
      <ApproachPrinciples />
      <ApproachProcess />
      <ApproachWhyUs />
      <ApproachCTA />
    </>
  );
}
