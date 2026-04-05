'use client';

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';

function IconIcosahedron() {
  const groupRef = useRef<THREE.Group>(null);
  const { gl, size } = useThree();

  const [hovered, setHovered] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const icons = useMemo(() => {
    const loader = new THREE.TextureLoader();
    return [
      loader.load('/download.svg'),
      loader.load('/download1.svg'),
      loader.load('/download2.svg'),
      loader.load('/download3.svg'),
      loader.load('/download4.svg'),
      loader.load('/download5.svg'),
      loader.load('/download6.svg'),
      loader.load('/download7.svg'),
      loader.load('/download8.svg'),
      loader.load('/download9.svg'),
      loader.load('/download10.svg'),
      loader.load('/download11.svg'),
      loader.load('/download12.svg'),
      loader.load('/download13.svg'),
      loader.load('/download14.svg'),
      loader.load('/download15.svg'),
      loader.load('/download16.svg'),
      loader.load('/download17.svg'),
      loader.load('/download18.svg'),
      loader.load('/download19.svg'),
      loader.load('/download20.svg'),
    ];
  }, []);

  const vertices = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(4, 1);
    const verts: THREE.Vector3[] = [];
    const positions = geo.getAttribute('position').array as Float32Array;

    const unique: { [key: string]: boolean } = {};
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const z = positions[i + 2];
      const key = `${x.toFixed(5)},${y.toFixed(5)},${z.toFixed(5)}`;
      if (!unique[key]) {
        unique[key] = true;
        verts.push(new THREE.Vector3(x, y, z));
      }
    }
    return verts;
  }, []);

  useEffect(() => {
    if (!gl.domElement) return;

    const onMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / size.width - 0.5) * 2;
      const y = (e.clientY / size.height - 0.5) * 2;
      setMouse({ x, y });
    };

    const onMouseEnter = () => setHovered(true);
    const onMouseLeave = () => setHovered(false);

    const canvas = gl.domElement;
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseenter', onMouseEnter);
    canvas.addEventListener('mouseleave', onMouseLeave);

    return () => {
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseenter', onMouseEnter);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [gl.domElement, size]);

  useFrame(() => {
    if (!groupRef.current) return;

    if (hovered) {
      const targetRotY = mouse.x * Math.PI * 0.5;
      const targetRotX = -mouse.y * Math.PI * 0.5;
      groupRef.current.rotation.y +=
        (targetRotY - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x +=
        (targetRotX - groupRef.current.rotation.x) * 0.05;
    } else {
      groupRef.current.rotation.y += 0.01;
      groupRef.current.rotation.x += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      {vertices.map((v, i) => (
        <sprite key={i} position={v} scale={[0.8, 0.8, 0.8]}>
          <spriteMaterial attach="material" map={icons[i % icons.length]} />
        </sprite>
      ))}
    </group>
  );
}

const ParticlesBackground = () => {
  return (
    <div className="w-230 aspect-square max-w-300">
      <Canvas camera={{ position: [15, 15, 15], fov: 40 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          rotateSpeed={0}
        />
        <IconIcosahedron />
      </Canvas>
    </div>
  );
};

export default ParticlesBackground;
