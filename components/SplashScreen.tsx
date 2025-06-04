"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import loadingAnimation from "@/animations/loading.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface SplashScreenProps {
  message?: string;
}
export default function SplashScreen({
  message = "Chargement en cours...",
}: SplashScreenProps) {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-zinc-950 text-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-32 h-32 md:w-40 md:h-40"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
      >
        <Lottie
          animationData={loadingAnimation}
          loop
          aria-label="Animation de chargement"
          className="w-full h-full drop-shadow-lg"
        />
      </motion.div>

      <motion.p
        className="mt-6 text-base font-medium tracking-wide text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        {message}
      </motion.p>
    </motion.div>
  );
}