'use client';

import { motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import { useMemo, useRef, useState } from 'react';
import HeroCanvas from './HeroCanvas';

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start']
  });
  const [progress, setProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    setProgress(value);
  });

  const titleOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.2]);
  const titleY = useTransform(scrollYProgress, [0, 0.6], ['0%', '-40%']);
  const ctaScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const stats = useMemo(
    () => [
      { label: 'Battery life', value: '48h adaptive' },
      { label: 'Material', value: 'Recycled titanium shell' },
      { label: 'Connectivity', value: '6G / UltraWide Mesh' }
    ],
    []
  );

  return (
    <section ref={sectionRef} className="relative flex min-h-screen flex-col overflow-hidden px-6 pt-24 md:px-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.25),transparent_55%)]" />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12 pb-16 lg:flex-row lg:items-center">
        <motion.div style={{ opacity: titleOpacity, y: titleY }} className="flex flex-1 flex-col gap-6 text-left">
          <p className="text-sm uppercase tracking-[0.4em] text-slate-300">Lumen X</p>
          <h1 className="font-display text-5xl leading-tight text-white md:text-6xl lg:text-7xl">
            Precision audio. Sculpted for tomorrow.
          </h1>
          <p className="max-w-xl text-lg text-slate-200">
            Experience a flagship instrument engineered with acoustic intelligence and an adaptive neural engine. Crafted
            in titanium, balanced with artisanal leather, tuned with spatial resonance.
          </p>
          <motion.button
            style={{ scale: ctaScale }}
            className="w-fit rounded-full bg-white/10 px-10 py-4 text-sm font-semibold uppercase tracking-[0.3em] text-white backdrop-blur transition hover:bg-white/20"
          >
            Reserve yours
          </motion.button>
          <dl className="grid grid-cols-1 gap-6 pt-6 text-sm text-slate-300 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="space-y-2 border-t border-white/10 pt-3">
                <dt className="uppercase tracking-[0.3em] text-xs text-white/60">{stat.label}</dt>
                <dd className="text-base text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
        <div className="relative flex h-[60vh] flex-1 items-center justify-center lg:h-[70vh]">
          <HeroCanvas progress={progress} />
        </div>
      </div>
    </section>
  );
}
