'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionHeading from '@/components/ui/SectionHeading';

const TESTIMONIALS = [
  {
    name: 'Debasish Ray',
    role: 'Retired (Age 66)',
    quote:
      'Services provided are very professional, yet extremely homely. Prompt response is unmatched. They suggest the investment portfolio best suited to our needs after carefully analysing our requirements. Seamless good experience all through.',
    rating: 5,
  },
  {
    name: 'KV Ramana Rao',
    role: 'Retired (Age 65)',
    quote:
      'Excellent guidance, hassle-free transactions, personalised service, very professional service, highly up to date with latest market scenario. Overall it is a very good experience.',
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? 'text-amber-400' : 'text-neutral-200'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <SectionWrapper background="dark" id="testimonials" className="relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-400/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <SectionHeading
        eyebrow="Testimonials"
        title="What our clients say"
        subtitle="Real experiences from families and individuals who trust us with their financial goals."
        light={true}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
        {TESTIMONIALS.map((testimonial, i) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 35, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            whileHover={{ y: -6, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative p-7 md:p-9 rounded-2xl bg-white shadow-xl shadow-black/20 hover:shadow-2xl hover:shadow-brand-900/40 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Quote icon */}
              <svg
                className="absolute top-6 right-6 w-10 h-10 text-brand-100/60"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391C0 7.905 3.748 4.039 9 3l.996 2.151C7.563 6.068 5.996 8.789 5.996 11h4v10H0z" />
              </svg>

              {/* Stars */}
              <StarRating rating={testimonial.rating} />

              {/* Quote */}
              <p className="mt-5 text-sm md:text-base text-neutral-700 leading-relaxed italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </div>

            {/* Author */}
            <div className="mt-6 pt-5 border-t border-neutral-100 flex items-center gap-3.5">
              {/* Avatar initial */}
              <div className="w-11 h-11 rounded-full bg-brand-900 text-white flex items-center justify-center text-sm font-bold shrink-0">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <p className="text-base font-semibold text-brand-900">
                  {testimonial.name}
                </p>
                <p className="text-xs text-neutral-500 font-medium">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
