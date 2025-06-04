"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedLogoProps {
  /**
   * Texte principal du logo
   * @default "Avis"
   */
  text?: string;
  /**
   * Texte mis en avant (couleur différente)
   * @default "AI"
   */
  highlight?: string;
  /**
   * Classes CSS supplémentaires
   */
  className?: string;
}

export default function AnimatedLogo({
  text = "Avis",
  highlight = "AI",
  className,
}: AnimatedLogoProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, scale: 0.95, y: -10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn(
        "text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 via-red-500 to-yellow-400 bg-clip-text text-transparent drop-shadow-md",
        className
      )}
    >
      <Link href="/" aria-label="Accueil" className="outline-none focus-visible:ring-2 focus-visible:ring-marque rounded">
        {text}
        <span className="text-white dark:text-zinc-100">{highlight}</span>
      </Link>
    </motion.h1>
  );
}
