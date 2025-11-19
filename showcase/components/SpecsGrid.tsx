'use client';

import { motion } from 'framer-motion';

const specs = [
  { label: 'Processor', value: 'NovaSense X2 neural array' },
  { label: 'Drivers', value: 'Dual 40mm graphene, adaptive waveguides' },
  { label: 'Latency', value: '0.4 ms spatial sync' },
  { label: 'Charging', value: 'MagSafe Qi3 / 15W solar dock' },
  { label: 'Sensors', value: 'Bio-acoustic pulse, ambient temp, gesture radar' },
  { label: 'Ingress', value: 'IP68 + nano-sealed acoustics' }
];

export default function SpecsGrid() {
  return (
    <section className="px-6 py-24 md:px-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
        <div className="flex flex-col gap-4">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">Tech specs</p>
          <h2 className="font-display text-4xl text-white md:text-5xl">Numbers that feel otherworldly.</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {specs.map((spec, index) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">{spec.label}</p>
              <p className="mt-3 text-lg text-white">{spec.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
