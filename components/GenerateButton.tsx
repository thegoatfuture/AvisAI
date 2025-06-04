"use client";

import React, { ComponentPropsWithoutRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, Loader2 } from "lucide-react";
import clsx from "clsx";

interface GenerateButtonProps
  extends ComponentPropsWithoutRef<typeof motion.button> {
  /**
   * Affiche un indicateur de chargement dans le bouton.
   */
  loading?: boolean;
  /**
   * Libellé affiché à côté de l'icône.
   */
  label?: string;
}

export default function GenerateButton({
  loading = false,
  label = "Générer un avis IA",
  className,
  disabled,
  ...props
}: GenerateButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      disabled={disabled || loading}
      className={clsx(
        "relative flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white shadow-lg transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-pink-500",
        "bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 disabled:opacity-60",
        className
      )}
      {...props}
    >
      {loading ? (
        <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
      ) : (
        <Sparkles className="w-5 h-5" aria-hidden="true" />
      )}
      <span>{label}</span>
    </motion.button>
  );
}
