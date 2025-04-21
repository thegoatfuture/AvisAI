"use client";

import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import loadingAnim from "@/animations/loading.json";

export default function SplashScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-zinc-950 text-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        className="w-40 h-40"
      >
        <Lottie
          animationData={loadingAnim}
          loop
          className="w-full h-full drop-shadow-lg"
        />
      </motion.div>

      <motion.h1
        className="mt-6 text-xl font-semibold tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        Chargement de votre expérience IA...
      </motion.h1>
    </motion.div>
  );
}