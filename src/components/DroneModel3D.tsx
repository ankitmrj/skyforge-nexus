import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei';
useGLTF.preload('/3js/scene.glb'); 
function GLTFModel({ modelPath }) {
  const modelRef = useRef();
  const [hovered, setHover] = useState(false);

  const { scene } = useGLTF(modelPath);

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.position.y = 2 + Math.sin(state.clock.elapsedTime) * 0.2;
      if (hovered) {
        modelRef.current.rotation.y += 0.05;
      }
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene.clone()}
      scale={[0.2, 0.2, 0.2]}
      position={[0, 0.5, 0]}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    />
  );
}

const DroneModel3D = () => {
  return (
    <Canvas
      camera={{ position: [5, 3, 10], fov: 50 }}
      style={{ background: 'linear-gradient(135deg, #1a1f2e 0%, #0f1419 100%)' }}
    >
      <ambientLight intensity={5} color="#ffffff" />
      <directionalLight position={[500, 500, 500]} intensity={1} color="#ffffff" />

      <Suspense fallback={
        <Html center>
          <div style={{ color: 'white' }}>Loading...</div>
        </Html>
      }>
        <GLTFModel modelPath="/3js/scene.glb" />
      </Suspense>

      <OrbitControls enablePan={false} enableZoom={false} />
    </Canvas>
  );
};



export default DroneModel3D;
