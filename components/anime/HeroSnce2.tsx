


'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
import { WireframeGeometry2 } from 'three/examples/jsm/lines/WireframeGeometry2.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { Wireframe } from 'three/examples/jsm/lines/Wireframe.js';

function WireframeIcosahedron() {
  const meshRef = useRef<Wireframe>();

  const wireframe = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(4, 1);

    const geometry = new WireframeGeometry2(geo);

    const matLine = new LineMaterial({
      color: 0x8000ff,
      linewidth: 3,
      dashed: false,
    });

    const wf = new Wireframe(geometry, matLine);
    wf.computeLineDistances();
    return wf;
  }, []);

  useFrame(state => {
    if (!meshRef.current) return;

    meshRef.current.rotation.y += 0.002;
    meshRef.current.rotation.x += 0.001;


    const t = state.clock.getElapsedTime();
    const scale = 1 + Math.sin(t * 1.2) * 0.1;

    meshRef.current.scale.set(scale, scale, scale);
  });

  return <primitive ref={meshRef} object={wireframe} />;
}


const HeroSnce2 = () => {
  return (
    <div className="absolute h-screen inset-0 z-0">
      <Canvas camera={{ position: [20, 0, 20], fov: 40 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <OrbitControls enableZoom={false} />
        <WireframeIcosahedron />
      </Canvas>
    </div>
  );
};

export default HeroSnce2;
