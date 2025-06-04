"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface GlowLinerCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
}

export default function GlowLinerCard({
  title,
  description,
  icon,
  className,
  children,
}: GlowLinerCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 250, damping: 20 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-zinc-700 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-6 text-white shadow-lg hover:border-pink-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500",
        className
      )}
    >
      {/* Glow animated border */}
      <div className="absolute inset-0 pointer-events-none rounded-2xl border border-pink-500/40 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300" />

      {icon && (
        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-pink-600/10 text-pink-400">
          {icon}
        </div>
      )}

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-zinc-400">{description}</p>
      {children}
    </motion.div>
  );
}
