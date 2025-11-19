'use client';

import { Float } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

interface ProductModelProps {
  progress: number;
}

export default function ProductModel({ progress }: ProductModelProps) {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (!group.current) return;
    const idleSpin = delta * 0.4;
    const scrollSpin = progress * Math.PI * 2;
    group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, scrollSpin, 3, delta) + idleSpin;
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, 0.25 - progress * 0.2, 4, delta);
    group.current.position.y = THREE.MathUtils.damp(group.current.position.y, Math.sin(progress * Math.PI) * 0.3, 3, delta);
  });

  return (
    <group ref={group} position={[0, 0, 0]}>
      <Float floatIntensity={1.2} rotationIntensity={0} speed={1.2}>
        <mesh castShadow receiveShadow scale={[2.8, 1.2, 1.2]} position={[0, 0, 0]}>
          <capsuleGeometry args={[0.6, 1.6, 32, 64]} />
          <meshPhysicalMaterial
            color="#f8fafc"
            metalness={0.9}
            roughness={0.1}
            clearcoat={0.9}
            clearcoatRoughness={0.1}
            transmission={0.15}
            reflectivity={1}
            thickness={0.4}
          />
        </mesh>
        <mesh position={[0, -0.6, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.6, 0.08, 32, 100]} />
          <meshStandardMaterial color="#38bdf8" metalness={0.8} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[0.2, 0.9, 1.7]} />
          <meshStandardMaterial color="#0f172a" metalness={0.4} roughness={0.4} />
        </mesh>
      </Float>
    </group>
  );
}
