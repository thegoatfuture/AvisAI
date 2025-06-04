"use client";

import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";

interface GlowCardProps
  extends ComponentPropsWithoutRef<typeof motion.div> {
  title: string;
  description: string;
  icon?: React.ReactNode;
}
const GlowCard = forwardRef<HTMLDivElement, GlowCardProps>(
  ({ title, description, icon, className, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 24px rgba(255,105,180,0.6)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={clsx(
          "relative overflow-hidden p-6 rounded-2xl border border-zinc-800 bg-zinc-900/80 text-white backdrop-blur-md transition duration-300 ease-in-out hover:border-pink-500",
          className
        )}
        {...props}
      >
        {icon && (
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-600/20 text-pink-400">
            {icon}
          </div>
        )}

        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="text-sm text-zinc-300">{description}</p>

        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-pink-500/10 opacity-0 transition-opacity duration-300 hover:opacity-30 blur-xl" />
      </motion.div>
    );
  }
);

GlowCard.displayName = "GlowCard";

export default GlowCard;
