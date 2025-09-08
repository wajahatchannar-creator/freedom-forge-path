import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, Sphere, Box, Torus } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = ({ position, color, scale = 1 }: { position: [number, number, number], color: string, scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5;
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
      <Sphere ref={meshRef} position={position} scale={scale} args={[0.5, 32, 32]}>
        <meshStandardMaterial color={color} transparent opacity={0.8} />
      </Sphere>
    </Float>
  );
};

const AnimatedBox = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.3;
      meshRef.current.rotation.z += delta * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={2} floatIntensity={0.3}>
      <Box ref={meshRef} position={position} args={[0.4, 0.4, 0.4]}>
        <meshStandardMaterial color={color} transparent opacity={0.7} />
      </Box>
    </Float>
  );
};

const AnimatedTorus = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.4;
      meshRef.current.rotation.y += delta * 0.6;
    }
  });

  return (
    <Float speed={3} rotationIntensity={1.5} floatIntensity={0.4}>
      <Torus ref={meshRef} position={position} args={[0.3, 0.1, 16, 100]}>
        <meshStandardMaterial color={color} transparent opacity={0.6} />
      </Torus>
    </Float>
  );
};

const Scene3D = () => {
  const shapes = useMemo(() => [
    { component: AnimatedSphere, position: [-2, 0, -1] as [number, number, number], color: "#8B5CF6", scale: 0.8 },
    { component: AnimatedBox, position: [2, 1, -2] as [number, number, number], color: "#EC4899" },
    { component: AnimatedTorus, position: [0, -1, -1.5] as [number, number, number], color: "#10B981" },
    { component: AnimatedSphere, position: [1, -2, 0] as [number, number, number], color: "#F59E0B", scale: 0.6 },
    { component: AnimatedBox, position: [-1.5, 1.5, -1] as [number, number, number], color: "#3B82F6" },
    { component: AnimatedTorus, position: [2.5, -0.5, -2] as [number, number, number], color: "#EF4444" },
  ], []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} />
      
      {shapes.map((shape, index) => {
        const Component = shape.component;
        return (
          <Component
            key={index}
            position={shape.position}
            color={shape.color}
            {...('scale' in shape && { scale: shape.scale })}
          />
        );
      })}

      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.2}>
        <Text
          position={[0, 0, 0]}
          fontSize={0.5}
          color="#FFFFFF"
          anchorX="center"
          anchorY="middle"
          font="/fonts/Inter-Bold.woff"
        >
          Recovery Journey
        </Text>
      </Float>
    </>
  );
};

const Hero3D = () => {
  return (
    <div className="absolute inset-0 opacity-30">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Scene3D />
      </Canvas>
    </div>
  );
};

export default Hero3D;