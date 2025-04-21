"use client";

import React from "react";
import { motion } from "framer-motion";

interface GlowCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function GlowCard({ title, description, icon }: GlowCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(255,105,180,0.6)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative p-6 bg-zinc-900/80 backdrop-blur-md rounded-2xl text-white border border-zinc-800 hover:border-pink-500 transition duration-300 ease-in-out"
    >
      <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-pink-600/20 text-pink-400">
        {icon}
      </div>

      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-zinc-300">{description}</p>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none bg-pink-500/10 blur-xl opacity-0 hover:opacity-30 transition-opacity duration-300" />
    </motion.div>
  );
}