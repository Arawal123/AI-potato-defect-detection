'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Scene from './Scene';

interface HeroCanvasProps {
  progress: number;
}

export default function HeroCanvas({ progress }: HeroCanvasProps) {
  return (
    <div className="h-full w-full rounded-[40px] bg-gradient-to-br from-white/5 to-white/0 p-1">
      <div className="h-full w-full rounded-[36px] bg-night/80 backdrop-blur-xl">
        <Suspense fallback={<div className="flex h-full items-center justify-center text-sm text-white/60">Calibrating...</div>}>
          <Canvas
            shadows
            gl={{ antialias: true, physicallyCorrectLights: true }}
            camera={{ position: [0.2, 0.6, 5.5], fov: 32 }}
          >
            <Scene progress={progress} />
          </Canvas>
        </Suspense>
      </div>
    </div>
  );
}
