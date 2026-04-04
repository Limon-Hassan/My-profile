'use client';

import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';

function IconIcosahedron() {
  const groupRef = useRef<THREE.Group>(null);
  const { camera, gl } = useThree();

  const [hovered, setHovered] = useState(false);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const icons = useMemo(() => {
    const loader = new THREE.TextureLoader();
    return [
      loader.load('/download2.svg'),
      loader.load('/download3.svg'),
      loader.load('/download4.svg'),
      loader.load('/download5.svg'),
      loader.load('/download6.svg'),
      loader.load('/download7.svg'),
      loader.load('/download (1).svg'),
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

  // Raycaster
  const raycaster = useMemo(() => new THREE.Raycaster(), []);
  const pointer = useRef(new THREE.Vector2());

  const handlePointerMove = (e: React.PointerEvent) => {
    // normalize mouse coordinates (-1 to 1)
    pointer.current.x = (e.clientX / gl.domElement.clientWidth) * 2 - 1;
    pointer.current.y = -(e.clientY / gl.domElement.clientHeight) * 2 + 1;

    raycaster.setFromCamera(pointer.current, camera);

    if (groupRef.current) {
      // create a "hover mesh" around the icosahedron
      const hoverMesh = new THREE.Mesh(
        new THREE.IcosahedronGeometry(4, 1),
        new THREE.MeshBasicMaterial({ visible: false }),
      );

      hoverMesh.position.copy(groupRef.current.position);
      const intersects = raycaster.intersectObject(hoverMesh, true);
      setHovered(intersects.length > 0);

      if (intersects.length > 0) {
        const x = (e.clientX / gl.domElement.clientWidth - 0.5) * 2;
        const y = (e.clientY / gl.domElement.clientHeight - 0.5) * 2;
        setMouse({ x, y });
      }
    }
  };

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
    <group ref={groupRef} onPointerMove={handlePointerMove}>
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
    <div className="absolute top-0 right-0 inset-0">
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
