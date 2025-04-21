"use client";

import { motion } from "framer-motion";
import React from "react";

interface AnimatedBarProps {
  label: string;
  percentage: number; // valeur de 0 à 100
}

export default function AnimatedBar({ label, percentage }: AnimatedBarProps) {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">{label}</span>
        <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">{percentage}%</span>
      </div>
      <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-3 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="h-full rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 shadow-inner"
        />
      </div>
    </div>
  );
}