'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { useRef, useMemo } from 'react';

function OrbitRing({ radius, speed, size, color }: any) {
  const ref = useRef<any>();
  const materialRef = useRef<any>();

  const positions = useMemo(() => {
    const count = 300; 
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2;
      arr[i * 3] = Math.cos(angle) * radius;
      arr[i * 3 + 1] = Math.sin(angle) * radius;
      arr[i * 3 + 2] = 0;
    }

    return arr;
  }, [radius]);

  useFrame(state => {
    if (!ref.current || !materialRef.current) return;
    ref.current.rotation.z += speed;
    const t = state.clock.getElapsedTime();
    materialRef.current.opacity = 0.5 + Math.sin(t * 3) * 0.3; 
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        ref={materialRef}
        transparent
        color={color}
        size={size}
        depthWrite={false}
      />
    </Points>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6] }}
        gl={{ toneMapping: THREE.NoToneMapping }}
      >
        <OrbitRing radius={2} speed={0.002} size={0.05} color="#9b5de5" />{' '}
        <OrbitRing
          radius={3}
          speed={-0.0015}
          size={0.04}
          color="#9b5de5"
        />
      </Canvas>
    </div>
  );
}
