import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float, Environment, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const Prism = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime / 4) * 0.4;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.25;
      
      // Responsive subtle mouse follow
      const targetX = (state.pointer.x * Math.PI) / 6;
      const targetY = (state.pointer.y * Math.PI) / 6;
      meshRef.current.rotation.y += 0.04 * (targetX - meshRef.current.rotation.y);
      meshRef.current.rotation.x += 0.04 * (targetY - meshRef.current.rotation.x);
    }
  });

  return (
    <Float floatIntensity={1.8} rotationIntensity={0.6} speed={2}>
      <mesh ref={meshRef} castShadow receiveShadow position={[0, 0, 0]}>
        <octahedronGeometry args={[2.2, 0]} />
        <MeshTransmissionMaterial
          backside
          backsideThickness={1.2}
          thickness={0.6}
          ior={1.6}
          chromaticAberration={0.9}
          anisotropy={0.6}
          distortion={0.4}
          distortionScale={0.5}
          temporalDistortion={0.15}
          clearcoat={1}
          attenuationDistance={0.6}
          attenuationColor="#00F0FF"
          color="#ffffff"
        />
      </mesh>
    </Float>
  );
};

const CyberParticles = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  const particleCount = 28;
  const particles = Array.from({ length: particleCount }).map((_, i) => {
    const angle = (i / particleCount) * Math.PI * 2;
    const radius = 3.5 + Math.sin(i * 1.5) * 1.0;
    const y = (Math.sin(i) * 1.8);
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    const color = i % 2 === 0 ? "#00F0FF" : "#7928CA";
    return { position: [x, y, z] as [number, number, number], color };
  });

  return (
    <group ref={groupRef}>
      {particles.map((p, idx) => (
        <Sphere key={idx} args={[0.04, 8, 8]} position={p.position}>
          <meshBasicMaterial color={p.color} transparent opacity={0.7} />
        </Sphere>
      ))}
    </group>
  );
};

export const Hero3D: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none h-full w-full overflow-hidden flex items-center justify-center opacity-85">
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.6} />
        <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={1.5} color="#00F0FF" />
        <spotLight position={[-10, -10, -10]} angle={0.2} penumbra={1} intensity={1.5} color="#7928CA" />
        <pointLight position={[0, 4, 2]} intensity={0.8} color="#00F0FF" />
        <Environment preset="city" />
        <Prism />
        <CyberParticles />
      </Canvas>
    </div>
  );
};
