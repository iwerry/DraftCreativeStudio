import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, Float, Environment, Text } from '@react-three/drei';
import * as THREE from 'three';

const Prism = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime / 4) * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      
      // Mouse interaction
      const targetX = (state.pointer.x * Math.PI) / 4;
      const targetY = (state.pointer.y * Math.PI) / 4;
      
      meshRef.current.rotation.y += 0.05 * (targetX - meshRef.current.rotation.y);
      meshRef.current.rotation.x += 0.05 * (targetY - meshRef.current.rotation.x);
    }
  });

  return (
    <Float floatIntensity={2} rotationIntensity={0.5} speed={2}>
      <mesh ref={meshRef} castShadow receiveShadow>
        <octahedronGeometry args={[2.5, 0]} />
        <MeshTransmissionMaterial
          backside
          backsideThickness={1}
          thickness={0.5}
          ior={1.5}
          chromaticAberration={0.8}
          anisotropy={0.5}
          distortion={0.5}
          distortionScale={0.5}
          temporalDistortion={0.1}
          clearcoat={1}
          attenuationDistance={0.5}
          attenuationColor="#00F0FF"
          color="#ffffff"
        />
      </mesh>
    </Float>
  );
};

export const Hero3D: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-auto h-[600px] sm:h-[800px] w-full mt-20 opacity-70">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow color="#00F0FF" />
        <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={1} castShadow color="#7928CA" />
        <Environment preset="city" />
        <Prism />
      </Canvas>
    </div>
  );
};
