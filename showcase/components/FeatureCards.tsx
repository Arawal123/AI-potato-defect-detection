'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Acoustic intelligence',
    description: 'Dual neural cores sample the environment 10,000x per second to recalibrate resonance.',
    icon: '🧠'
  },
  {
    title: 'Adaptive materials',
    description: 'Phase-changing titanium lattice keeps the chassis cool and feather-light in every climate.',
    icon: '🪶'
  },
  {
    title: 'Tactile controls',
    description: 'Solid-state dial delivers precise, haptic feedback with custom pressure profiles.',
    icon: '🎛️'
  },
  {
    title: 'Immersive audio',
    description: 'Spatial Beam array locks the soundstage to your movement for cinematic depth.',
    icon: '🔊'
  }
];

export default function FeatureCards() {
  return (
    <section className="px-6 py-24 md:px-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12">
        <div className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">Essentials</p>
          <h2 className="font-display text-4xl text-white md:text-5xl">Effortless sophistication, engineered within.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.3 }}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="text-3xl">{feature.icon}</div>
              <h3 className="mt-4 font-display text-2xl text-white">{feature.title}</h3>
              <p className="mt-2 text-base text-slate-200">{feature.description}</p>
              <div className="mt-6 h-px w-full scale-x-0 bg-white/40 transition duration-500 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
