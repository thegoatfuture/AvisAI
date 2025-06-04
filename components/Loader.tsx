"use client";

import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import loadingAnimation from "@/animations/loading.json";

interface LoaderProps {
  message?: string;
}

export default function Loader({ message = "Chargement en cours..." }: LoaderProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-black"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-32 h-32"
      >
        <Lottie animationData={loadingAnimation} loop className="w-full h-full" />
      </motion.div>
      <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-400 animate-pulse">
        {message}
      </p>
    </div>
  );
}
