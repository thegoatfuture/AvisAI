"use client";

import React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

interface ScrollProgressProps {
  /**
   * Height of the progress bar in pixels.
   * @default 4
   */
  height?: number;
  /**
   * CSS gradient used for the bar background.
   * @default "linear-gradient(90deg, #ff416c, #ff4b2b, #ff416c)"
   */
  gradient?: string;
}

export default function ScrollProgress({
  height = 4,
  gradient = "linear-gradient(90deg, #ff416c, #ff4b2b, #ff416c)",
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const smoothWidth = useSpring(width, { stiffness: 120, damping: 20 });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 z-[9999] pointer-events-none"
      style={{
        width: smoothWidth,
        height,
        background: gradient,
        backgroundSize: "200% 200%",
        animation: "scrollBarGlow 3s ease infinite",
      }}
    />
  );
}
