"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

type SectionRevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  priority?: boolean;
};

export default function SectionReveal({
  children,
  delay = 0,
  priority = false,
  transition,
  ...props
}: SectionRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        priority 
          ? false 
          : reduceMotion
            ? { opacity: 0 }
            : { opacity: 0, y: 30, scale: 0.985, filter: "blur(12px)" }
      }
      whileInView={
        reduceMotion
          ? { opacity: 1 }
          : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
      }
      viewport={{ once: true, amount: 0.22 }}
      transition={{
        duration: reduceMotion ? 0.45 : 0.9,
        ease: [0.16, 1, 0.3, 1],
        delay,
        ...transition,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
