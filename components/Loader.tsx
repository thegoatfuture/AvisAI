"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black">
      <motion.div
        className="flex flex-col items-center space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          className="w-16 h-16 rounded-full border-4 border-t-transparent border-pink-500 animate-spin"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "easeInOut"
          }}
        />
        <p className="text-sm text-zinc-500 dark:text-zinc-400 animate-pulse">
          Chargement en cours...
        </p>
      </motion.div>
    </div>
  );
}