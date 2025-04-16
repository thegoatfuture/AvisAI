'use client'

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AnimatedLogo() {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <motion.div
        initial={{ rotate: -20, scale: 0.8, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.15, rotate: 6 }}
        className="w-11 h-11 rounded-full bg-gradient-to-tr from-brand to-yellow-400 flex items-center justify-center shadow-lg group-hover:shadow-yellow-500/50"
      >
        <motion.span
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          className="text-white font-bold text-lg drop-shadow"
        >
          A
        </motion.span>
      </motion.div>
      <motion.span
        className="text-2xl font-black tracking-wide text-brand group-hover:text-yellow-400 transition-colors duration-300"
        initial={{ x: -12, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
      >
        AvisAI
      </motion.span>
    </Link>
  );
}
