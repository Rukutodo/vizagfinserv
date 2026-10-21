'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[9999] pointer-events-none bg-transparent overflow-hidden">
      <motion.div
        className="h-full w-full bg-gradient-to-r from-brand-300 via-brand-400 to-emerald-400 origin-left shadow-[0_0_10px_rgba(96,165,250,0.8)]"
        style={{ scaleX }}
      />
    </div>
  );
}
