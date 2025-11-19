'use client';

import { ContactShadows, Environment } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useMemo } from 'react';
import * as THREE from 'three';
import ProductModel from './ProductModel';

interface SceneProps {
  progress: number;
}

export default function Scene({ progress }: SceneProps) {
  const { camera } = useThree();

  useFrame(() => {
    const targetPosition = new THREE.Vector3(
      Math.sin(progress * Math.PI) * 0.8,
      0.4 + progress * 0.3,
      5 - progress * 2
    );
    camera.position.lerp(targetPosition, 0.05);
    camera.lookAt(0, 0.2, 0);
  });

  const keyLight = useMemo(() => new THREE.Color('#f5f5f5'), []);

  return (
    <>
      <color attach="background" args={[0, 0, 0, 0]} />
      <ambientLight intensity={0.35} />
      <directionalLight
        position={[4, 6, 3]}
        castShadow
        intensity={1.4}
        color={keyLight}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <spotLight
        position={[-4, 2.5, 2]}
        angle={0.6}
        penumbra={0.5}
        intensity={0.6}
        color="#93c5fd"
      />
      <ProductModel progress={progress} />
      <ContactShadows
        opacity={0.4}
        position={[0, -1.1, 0]}
        blur={2.6}
        far={8}
        width={12}
        height={12}
      />
      <Environment preset="studio" background={false} />
    </>
  );
}
