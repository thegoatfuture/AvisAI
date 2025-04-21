"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlowLinerCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function GlowLinerCard({
  title,
  description,
  icon,
}: GlowLinerCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="relative p-6 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white overflow-hidden shadow-lg hover:border-pink-500"
    >
      {/* Glow animated border */}
      <div className="absolute inset-0 pointer-events-none rounded-2xl border border-pink-500/40 blur-xl opacity-0 hover:opacity-30 transition-opacity duration-300" />

      <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-pink-600/10 text-pink-400">
        {icon}
      </div>

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-zinc-400">{description}</p>
    </motion.div>
  );
}