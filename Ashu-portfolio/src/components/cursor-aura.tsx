"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

export default function CursorAura() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(false);
  const [pressed, setPressed] = useState(false);

  const pointerX = useMotionValue(-1000);
  const pointerY = useMotionValue(-1000);
  const velocity = useMotionValue(0);
  const angle = useMotionValue(0);

  // Soft physics for sluggish/fluid premium tailing
  const coreX = useSpring(pointerX, { stiffness: 450, damping: 28, mass: 0.1 });
  const coreY = useSpring(pointerY, { stiffness: 450, damping: 28, mass: 0.1 });
  const haloX = useSpring(pointerX, { stiffness: 150, damping: 22, mass: 0.8 });
  const haloY = useSpring(pointerY, { stiffness: 150, damping: 22, mass: 0.8 });
  const bloomX = useSpring(pointerX, { stiffness: 80, damping: 30, mass: 1.5 });
  const bloomY = useSpring(pointerY, { stiffness: 80, damping: 30, mass: 1.5 });
  
  const stretch = useSpring(1, { stiffness: 200, damping: 24, mass: 0.3 });
  const squish = useSpring(1, { stiffness: 180, damping: 22, mass: 0.4 });
  const sparkOpacity = useTransform(velocity, [0, 15, 40], [0, 0.5, 1]);

  // Hardware-accelerated offsets (subtracting half the width/height of elements)
  const spotX = useTransform(bloomX, (x) => x - 600);
  const spotY = useTransform(bloomY, (y) => y - 600);
  
  const bloomOffsetX = useTransform(bloomX, (x) => x - 128); // 256/2
  const bloomOffsetY = useTransform(bloomY, (y) => y - 128);
  
  const ribbonOffsetX = useTransform(haloX, (x) => x - 24); // 48/2
  const ribbonOffsetY = useTransform(haloY, (y) => y - 24);
  
  const ringOffsetX = useTransform(haloX, (x) => x - 16); // 32/2
  const ringOffsetY = useTransform(haloY, (y) => y - 16);
  
  const coreOffsetX = useTransform(coreX, (x) => x - 5); // 10/2
  const coreOffsetY = useTransform(coreY, (y) => y - 5);

  useEffect(() => {
    if (reduceMotion) return;

    let previousX = -1000;
    let previousY = -1000;
    let leaveTimer: ReturnType<typeof setTimeout> | undefined;

    const handlePointerMove = (event: PointerEvent) => {
      const nextX = event.clientX;
      const nextY = event.clientY;
      const deltaX = nextX - previousX;
      const deltaY = nextY - previousY;
      const speed = Math.hypot(deltaX, deltaY);

      previousX = nextX;
      previousY = nextY;

      pointerX.set(nextX);
      pointerY.set(nextY);
      velocity.set(speed);
      angle.set((Math.atan2(deltaY, deltaX) * 180) / Math.PI);

      const stretchTarget = Math.min(1 + speed / 12, 2.5);
      const squishTarget = Math.max(1 - speed / 30, 0.65);

      stretch.set(stretchTarget);
      squish.set(squishTarget);
      setActive(true);

      if (leaveTimer) clearTimeout(leaveTimer);

      leaveTimer = setTimeout(() => {
        stretch.set(1);
        squish.set(1);
        velocity.set(0);
      }, 60);
    };

    const handlePointerDown = () => setPressed(true);
    const handlePointerUp = () => setPressed(false);

    const handlePointerLeave = () => {
      setActive(false);
      setPressed(false);
      stretch.set(1);
      squish.set(1);
      velocity.set(0);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      window.removeEventListener("pointerleave", handlePointerLeave);
      if (leaveTimer) clearTimeout(leaveTimer);
    };
  }, [angle, pointerX, pointerY, reduceMotion, stretch, squish, velocity]);

  if (reduceMotion) return null;

  return (
    <div className="cursor-aura-layer fixed inset-0" aria-hidden="true" style={{ mixBlendMode: 'screen', zIndex: 9999, pointerEvents: 'none' }}>
      <motion.div 
        className="cursor-spotlight absolute top-0 left-0 w-[1200px] h-[1200px] pointer-events-none rounded-full" 
        style={{ 
          background: "radial-gradient(circle, rgba(123, 194, 214, 0.12) 0%, rgba(239, 189, 84, 0.08) 25%, rgba(214, 90, 61, 0.05) 50%, transparent 70%)",
          x: spotX,
          y: spotY,
          opacity: active ? 1 : 0 
        }} 
      />

      <motion.div
        className="cursor-bloom absolute top-0 left-0 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(239, 189, 84, 0.25) 0%, transparent 65%)",
          x: bloomOffsetX,
          y: bloomOffsetY,
          opacity: active ? 0.8 : 0,
          scale: pressed ? 1.15 : 1,
        }}
      />

      <motion.div
        className="cursor-ribbon absolute top-0 left-0 w-12 h-12 border border-white/10 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(123, 194, 214, 0.15) 0%, transparent 80%)",
          x: ribbonOffsetX,
          y: ribbonOffsetY,
          rotate: angle,
          scaleX: stretch,
          scaleY: squish,
          opacity: active ? 0.9 : 0,
        }}
      />

      <motion.div
        className="cursor-ring absolute top-0 left-0 w-8 h-8 border border-[rgba(239,189,84,0.4)] rounded-full pointer-events-none"
        style={{
          x: ringOffsetX,
          y: ringOffsetY,
          opacity: active ? 1 : 0,
          scale: pressed ? 0.65 : 1,
        }}
      />

      <motion.div
        className="cursor-spark cursor-spark-one absolute top-0 left-0 w-1.5 h-1.5 bg-[#efbd54] rounded-full pointer-events-none"
        style={{
          x: ribbonOffsetX,
          y: ribbonOffsetY,
          rotate: angle,
          translateX: -24,
          opacity: active ? 0.8 : 0,
        }}
      />

      <motion.div
        className="cursor-spark cursor-spark-two absolute top-0 left-0 w-2 h-2 bg-[#7bc2d6] rounded-full pointer-events-none"
        style={{
          x: ribbonOffsetX,
          y: ribbonOffsetY,
          rotate: angle,
          translateX: 24,
          opacity: active ? sparkOpacity : 0,
        }}
      />

      <motion.div
        className="cursor-core absolute top-0 left-0 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)] pointer-events-none"
        style={{
          x: coreOffsetX,
          y: coreOffsetY,
          opacity: active ? 1 : 0,
          scale: pressed ? 0.8 : 1,
        }}
      />
    </div>
  );
}
