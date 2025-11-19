'use client';

import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="px-6 pb-24 pt-12 md:px-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 rounded-[48px] border border-white/10 bg-white/5 p-12 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="font-display text-4xl text-white md:text-5xl"
        >
          The new ritual of sound arrives this fall.
        </motion.h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="rounded-full bg-white px-12 py-4 text-sm font-semibold uppercase tracking-[0.4em] text-night"
        >
          Get notified
        </motion.button>
        <div className="h-px w-full bg-white/10" />
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">© {new Date().getFullYear()} Atelier Lumen</p>
      </div>
    </section>
  );
}
