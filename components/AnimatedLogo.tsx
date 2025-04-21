"use client";

import { motion } from "framer-motion";
import React from "react";

export default function AnimatedLogo() {
  return (
    <motion.h1
      initial={{ opacity: 0, scale: 0.95, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-md"
    >
      Avis<span className="text-white dark:text-zinc-100">AI</span>
    </motion.h1>
  );
}