'use client';

import dynamic from 'next/dynamic';
import FeatureCards from '../components/FeatureCards';
import FinalCTA from '../components/FinalCTA';
import SpecsGrid from '../components/SpecsGrid';
import StorySection from '../components/StorySection';

const HeroSection = dynamic(() => import('../components/HeroSection'), {
  ssr: false,
  loading: () => (
    <section className="flex min-h-screen items-center justify-center px-6">
      <p className="text-sm uppercase tracking-[0.4em] text-white/60">Loading experience</p>
    </section>
  )
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-8 bg-transparent">
      <HeroSection />
      <FeatureCards />
      <StorySection />
      <SpecsGrid />
      <FinalCTA />
    </main>
  );
}
