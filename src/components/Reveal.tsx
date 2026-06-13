"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

type RevealProps = HTMLMotionProps<"div"> & {
  /** Delay in seconds before this element animates in. */
  delay?: number;
  /** Vertical travel distance in px. */
  y?: number;
  /** Animation duration in seconds. */
  duration?: number;
};

/**
 * Scroll-reveal wrapper. Animates opacity + a small Y translate once, when the
 * element enters the viewport. Honours prefers-reduced-motion (renders static).
 */
export default function Reveal({
  delay = 0,
  y = 22,
  duration = 0.6,
  children,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: EASE_OUT }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
