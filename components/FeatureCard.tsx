"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // si tu utilises une fonction classNames utilitaire

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true }}
      className={cn(
        "group relative overflow-hidden rounded-2xl p-6 shadow-md bg-white/90 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      )}
    >
      <div className="flex items-center justify-center w-14 h-14 mb-4 rounded-full bg-pink-100 dark:bg-pink-500/10">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2 group-hover:text-pink-500 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>

      {/* effet glow */}
      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 blur-2xl rounded-2xl" />
    </motion.div>
  );
}