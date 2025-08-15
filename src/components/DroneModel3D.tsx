import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Simple Drone Component (procedural geometry)
const DroneGeometry = () => {
  const droneRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (droneRef.current) {
      droneRef.current.rotation.y += delta * 0.5;
      droneRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <group ref={droneRef}>
      {/* Main Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 0.3, 2]} />
        <meshStandardMaterial 
          color="#1a1a1a" 
          metalness={0.8} 
          roughness={0.2}
          emissive="#003366"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Arms */}
      {[
        [1.2, 0, 1.2],
        [-1.2, 0, 1.2],
        [1.2, 0, -1.2],
        [-1.2, 0, -1.2],
      ].map((pos, index) => (
        <group key={index}>
          {/* Arm */}
          <mesh position={[pos[0] / 2, 0, pos[2] / 2]} rotation={[0, Math.atan2(pos[2], pos[0]), 0]}>
            <boxGeometry args={[1.4, 0.1, 0.1]} />
            <meshStandardMaterial color="#333333" metalness={0.7} roughness={0.3} />
          </mesh>
          
          {/* Propeller Hub */}
          <mesh position={[pos[0], pos[1], pos[2]]}>
            <cylinderGeometry args={[0.15, 0.15, 0.1, 8]} />
            <meshStandardMaterial color="#666666" metalness={0.9} roughness={0.1} />
          </mesh>
          
          {/* Propeller Blades */}
          <mesh position={[pos[0], pos[1] + 0.05, pos[2]]}>
            <boxGeometry args={[0.8, 0.02, 0.05]} />
            <meshStandardMaterial 
              color="#00ccff" 
              metalness={0.5} 
              roughness={0.3}
              emissive="#0066cc"
              emissiveIntensity={0.2}
            />
          </mesh>
          <mesh position={[pos[0], pos[1] + 0.05, pos[2]]} rotation={[0, Math.PI / 2, 0]}>
            <boxGeometry args={[0.8, 0.02, 0.05]} />
            <meshStandardMaterial 
              color="#00ccff" 
              metalness={0.5} 
              roughness={0.3}
              emissive="#0066cc"
              emissiveIntensity={0.2}
            />
          </mesh>
        </group>
      ))}

      {/* LED Lights */}
      {[
        [0.5, -0.1, 0.5],
        [-0.5, -0.1, 0.5],
        [0.5, -0.1, -0.5],
        [-0.5, -0.1, -0.5],
      ].map((pos, index) => (
        <mesh key={index} position={[pos[0], pos[1], pos[2]]}>
          <sphereGeometry args={[0.05]} />
          <meshStandardMaterial 
            color={index % 2 === 0 ? "#00ccff" : "#ff6b35"}
            emissive={index % 2 === 0 ? "#00ccff" : "#ff6b35"}
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}

      {/* Camera Gimbal */}
      <mesh position={[0, -0.2, 0.5]}>
        <sphereGeometry args={[0.2]} />
        <meshStandardMaterial 
          color="#222222" 
          metalness={0.9} 
          roughness={0.1}
          emissive="#003366"
          emissiveIntensity={0.1}
        />
      </mesh>
    </group>
  );
};

const DroneModel3D = () => {
  return (
    <div className="w-full h-96 bg-background-secondary rounded-xl overflow-hidden">
      <Canvas
        camera={{ position: [5, 3, 5], fov: 50 }}
        style={{ background: 'linear-gradient(135deg, #1a1f2e 0%, #0f1419 100%)' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} color="#ffffff" />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1}
          color="#ffffff"
          castShadow
        />
        <pointLight 
          position={[-10, -10, -5]} 
          intensity={0.5}
          color="#00ccff"
        />
        <pointLight 
          position={[10, -10, -5]} 
          intensity={0.5}
          color="#ff6b35"
        />

        {/* Drone Model */}
        <DroneGeometry />

        {/* Controls */}
        <OrbitControls 
          enablePan={false}
          enableZoom={false}
          autoRotate={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
};

export default DroneModel3D;