"use client";

import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedBarProps {
  /**
   * Label affiché à gauche de la barre
   */
  label: string;
  /**
   * Pourcentage de complétion (0-100)
   */
  percentage: number;
  /**
   * Hauteur de la barre (classe Tailwind ex: "h-3")
   */
  heightClass?: string;
  /**
   * Classes supplémentaires pour le conteneur
   */
  className?: string;
  /**
   * Couleur/gradient de progression
   */
  colorClass?: string;
  /**
   * Affiche ou non le pourcentage à droite
   */
  showPercentage?: boolean;
}

export default function AnimatedBar({
  label,
  percentage,
  heightClass = "h-3",
  className,
  colorClass = "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
  showPercentage = true,
}: AnimatedBarProps) {
  return (
    <div className={cn("space-y-1", className)}>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
          {label}
        </span>
        {showPercentage && (
          <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
            {percentage}%
          </span>
        )}
      </div>
      <div
        className={cn(
          "w-full overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-800",
          heightClass,
        )}
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className={cn("h-full rounded-full shadow-inner", colorClass)}
        />
      </div>
    </div>
  );
}