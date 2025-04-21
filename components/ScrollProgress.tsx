"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function ScrollProgress() {
  const [scrollTop, setScrollTop] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollTop(scrolled);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    controls.start({ width: `${scrollTop}%` });
  }, [scrollTop, controls]);

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 z-[9999] h-1 pointer-events-none will-change-transform"
      animate={controls}
      initial={{ width: 0 }}
      transition={{ ease: "easeOut", duration: 0.2 }}
      style={{
        background: "linear-gradient(90deg, #ff416c, #ff4b2b, #ff416c)",
        backgroundSize: "200% 200%",
        animation: "scrollBarGlow 3s ease infinite",
      }}
    />
  );
}