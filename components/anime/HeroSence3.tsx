'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function SnowParticles() {
  const centerRef = useRef<THREE.Points>(null);
  const spreadRef = useRef<THREE.Points>(null);
  const bgRef = useRef<THREE.Points>(null);

  const centerParticles = useMemo(() => {
    const count = 900;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      const r = 3 * Math.cbrt(Math.random()); // dense center
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = r * Math.cos(phi);
    }

    return positions;
  }, []);


  const spreadParticles = useMemo(() => {
    const count = 700;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      positions[i3] = (Math.random() - 0.5) * 20;
      positions[i3 + 1] = (Math.random() - 0.5) * 6;
      positions[i3 + 2] = (Math.random() - 0.5) * 6;
    }

    return positions;
  }, []);

  const bgParticles = useMemo(() => {
    const count = 400;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      positions[i3] = (Math.random() - 0.5) * 100;
      positions[i3 + 1] = (Math.random() - 0.5) * 60;
      positions[i3 + 2] = (Math.random() - 0.5) * 60;
    }

    return positions;
  }, []);

  const circleTexture = useMemo(() => {
    const size = 64;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d')!;
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    ctx.fill();
    return new THREE.CanvasTexture(canvas);
  }, []);

  useFrame(() => {
    if (centerRef.current) centerRef.current.rotation.y += 0.001;
    if (spreadRef.current) spreadRef.current.rotation.y += 0.0007;
    if (bgRef.current) bgRef.current.rotation.y += 0.0002;
  });

  return (
    <>
      {/* Center Dense */}
      <points ref={centerRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={centerParticles.length / 3}
            array={centerParticles}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="white"
          size={0.03}
          transparent
          opacity={0.9}
          depthWrite={false}
          alphaMap={circleTexture} 
          alphaTest={0.01}
        />
      </points>

      {/* Light Spread */}
      <points ref={spreadRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={spreadParticles.length / 3}
            array={spreadParticles}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="white"
          size={0.05}
          transparent
          opacity={0.6}
          depthWrite={false}
          alphaMap={circleTexture} 
          alphaTest={0.01}
        />
      </points>

      <points ref={bgRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={bgParticles.length / 3}
            array={bgParticles}
            itemSize={3}
          />
        </bufferGeometry>

        <pointsMaterial
          color="white"
          size={Math.random() * 0.09}
          transparent
          opacity={0.7}
          depthWrite={false}
          alphaMap={circleTexture} 
          alphaTest={0.01}
        />
      </points>
    </>
  );
}

export default function HeroSence3() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 12], fov: 60 }}>
        <SnowParticles />
      </Canvas>
    </div>
  );
}
