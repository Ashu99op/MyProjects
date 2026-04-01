"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";

export default function CursorAura() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(false);
  const [pressed, setPressed] = useState(false);

  const pointerX = useMotionValue(-240);
  const pointerY = useMotionValue(-240);
  const velocity = useMotionValue(0);
  const angle = useMotionValue(0);

  const coreX = useSpring(pointerX, { stiffness: 320, damping: 30, mass: 0.2 });
  const coreY = useSpring(pointerY, { stiffness: 320, damping: 30, mass: 0.2 });
  const haloX = useSpring(pointerX, { stiffness: 180, damping: 26, mass: 0.5 });
  const haloY = useSpring(pointerY, { stiffness: 180, damping: 26, mass: 0.5 });
  const bloomX = useSpring(pointerX, { stiffness: 110, damping: 24, mass: 0.9 });
  const bloomY = useSpring(pointerY, { stiffness: 110, damping: 24, mass: 0.9 });
  const stretch = useSpring(1, { stiffness: 240, damping: 22, mass: 0.25 });
  const squish = useSpring(1, { stiffness: 220, damping: 20, mass: 0.28 });
  const sparkOpacity = useTransform(velocity, [0, 8, 26], [0, 0.3, 0.82]);

  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${bloomX}px ${bloomY}px, rgba(123, 194, 214, 0.15), rgba(239, 189, 84, 0.12) 24%, rgba(214, 79, 50, 0.08) 42%, rgba(4, 7, 13, 0) 72%)`;

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    let previousX = -240;
    let previousY = -240;
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

      const stretchTarget = Math.min(1 + speed / 18, 1.9);
      const squishTarget = Math.max(1 - speed / 42, 0.72);

      stretch.set(stretchTarget);
      squish.set(squishTarget);
      setActive(true);

      if (leaveTimer) {
        clearTimeout(leaveTimer);
      }

      leaveTimer = setTimeout(() => {
        stretch.set(1);
        squish.set(1);
        velocity.set(0);
      }, 56);
    };

    const handlePointerDown = () => {
      setPressed(true);
    };

    const handlePointerUp = () => {
      setPressed(false);
    };

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

      if (leaveTimer) {
        clearTimeout(leaveTimer);
      }
    };
  }, [angle, bloomX, bloomY, pointerX, pointerY, reduceMotion, stretch, squish, velocity]);

  if (reduceMotion) {
    return null;
  }

  return (
    <div className="cursor-aura-layer" aria-hidden="true">
      <motion.div className="cursor-spotlight" style={{ background: spotlight, opacity: active ? 1 : 0 }} />

      <motion.div
        className="cursor-bloom"
        style={{
          left: bloomX,
          top: bloomY,
          opacity: active ? 0.9 : 0,
          scale: pressed ? 1.08 : 1,
        }}
      />

      <motion.div
        className="cursor-ribbon"
        style={{
          left: haloX,
          top: haloY,
          rotate: angle,
          scaleX: stretch,
          scaleY: squish,
          opacity: active ? 0.9 : 0,
        }}
      />

      <motion.div
        className="cursor-ring"
        style={{
          left: haloX,
          top: haloY,
          opacity: active ? 1 : 0,
          scale: pressed ? 0.76 : 1,
        }}
      />

      <motion.div
        className="cursor-spark cursor-spark-one"
        style={{
          left: haloX,
          top: haloY,
          rotate: angle,
          opacity: active ? 0.7 : 0,
          x: -18,
        }}
      />

      <motion.div
        className="cursor-spark cursor-spark-two"
        style={{
          left: haloX,
          top: haloY,
          rotate: angle,
          opacity: active ? sparkOpacity : 0,
          x: 18,
        }}
      />

      <motion.div
        className="cursor-core"
        style={{
          left: coreX,
          top: coreY,
          opacity: active ? 1 : 0,
          scale: pressed ? 0.82 : 1,
        }}
      />
    </div>
  );
}
