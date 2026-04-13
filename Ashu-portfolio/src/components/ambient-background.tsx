"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles, Stars, Float } from "@react-three/drei";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import * as THREE from "three";

function RotatingScene() {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state, delta) => {
    if (groupRef.current) {
      // Gentle rotation tied to time for a constant immersive feel
      groupRef.current.rotation.y -= delta * 0.025;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.8}>
        {/* Main golden magical dust */}
        <Sparkles 
          count={250} 
          scale={15} 
          size={3.5} 
          speed={0.4} 
          opacity={0.4} 
          color="#efbd54" 
        />
        {/* Soft teal accents */}
        <Sparkles 
          count={100} 
          scale={18} 
          size={5} 
          speed={0.3} 
          opacity={0.25} 
          color="#7bc2d6" 
        />
        {/* Scarlet depth highlights */}
        <Sparkles 
          count={50} 
          scale={12} 
          size={4} 
          speed={0.5} 
          opacity={0.15} 
          color="#d65a3d" 
        />
      </Float>
      
      {/* Deep universe stardust backdrop */}
      <Stars 
        radius={25} 
        depth={50} 
        count={2500} 
        factor={5} 
        saturation={0.5} 
        fade 
        speed={0.3} 
      />
    </group>
  );
}

export default function AmbientBackground() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    if (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  // completely bypass the heavy 3D canvas on mobile phones
  if (!mounted || isMobile) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 2.5, ease: "easeOut" }}
      className="fixed inset-0 z-[-2] pointer-events-none"
    >
      <Canvas 
        camera={{ position: [0, 0, 7], fov: 55 }}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
        dpr={[1, 1.5]}
      >
        <fog attach="fog" args={["#04070d", 4, 20]} />
        <RotatingScene />
      </Canvas>
      {/* A soft gradient overlay to merge the 3D scene smoothly with pure CSS layouts below */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#04070d]/30 to-[#04070d] pointer-events-none" />
    </motion.div>
  );
}
