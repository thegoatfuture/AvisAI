"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ icon, title, description, className }, ref) => {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className={cn(
          "group relative overflow-hidden rounded-2xl border bg-white/90 dark:bg-zinc-900/80 p-6 shadow-md backdrop-blur-md transition-all hover:-translate-y-1 hover:shadow-xl",
          className
        )}
      >
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-pink-100 dark:bg-pink-500/10">
          {icon}
        </div>
        <h3 className="mb-2 text-xl font-semibold text-zinc-900 transition-colors group-hover:text-pink-500 dark:text-white">
          {title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20" />
      </motion.div>
    );
  }
);

FeatureCard.displayName = "FeatureCard";

export default FeatureCard;
