'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function StorySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.2, 1, 0.2]);

  return (
    <section className="px-6 py-24 md:px-16">
      <div ref={ref} className="mx-auto flex w-full max-w-5xl flex-col gap-8 rounded-[40px] border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-10 text-center">
        <motion.p style={{ y, opacity }} className="font-display text-4xl leading-relaxed text-white md:text-5xl">
          Crafted between Milan and Tokyo, Lumen X embodies a new ritual of listening—one where tactile precision meets
          soulful warmth. Every surface is honed to invite touch, while the adaptive engine dissolves the border between
          studio and sanctuary.
        </motion.p>
        <p className="text-sm uppercase tracking-[0.4em] text-white/50">Story</p>
      </div>
    </section>
  );
}
