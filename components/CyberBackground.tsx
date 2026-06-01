/* eslint-disable react-hooks/purity */
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function ParticleStorm() {
  const ref = useRef<THREE.Points>(null);

  // Generate 2000 titik partikel acak dalam ruang 3D
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(2000 * 3);
    for (let i = 0; i < positions.length; i++) {
      positions[i] = (Math.random() - 0.5) * 10; // Rentang distribusi partikel
    }
    return positions;
  }, []);

  // Animasi rotasi konstan yang sangat halus di setiap frame
  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.getElapsedTime();
      ref.current.rotation.x = time * 0.015;
      ref.current.rotation.y = time * 0.02;
      
      // Efek gelombang mikro (wave) konseptual pada posisi Y
      ref.current.position.y = Math.sin(time * 0.5) * 0.1;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={particlePositions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00f2fe" // Cyber Cyan
          size={0.04}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

export default function CyberBackground() {
  return (
    // Canvas diposisikan fixed di belakang seluruh elemen HTML
    <div className="fixed inset-0 -z-20 w-full h-full bg-[#030308] pointer-events-none">
      <Canvas camera={{ position: [0, 0, 3], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <ParticleStorm />
      </Canvas>
    </div>
  );
}