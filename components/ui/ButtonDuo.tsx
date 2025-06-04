"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";

interface ButtonDuoProps extends ComponentPropsWithoutRef<typeof motion.button> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
}

export default function ButtonDuo({
  children,
  variant = "secondary",
  size = "md",
  className,
  ...props
}: ButtonDuoProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-marque";

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-sm md:text-base",
    lg: "px-6 py-3 text-base",
  } as const;

  const variants = {
    primary:
      "bg-marque text-white hover:bg-red-600 shadow-md hover:shadow-lg",
    secondary:
      "bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/80",
    danger:
      "bg-red-500 text-white hover:bg-red-600 shadow-md hover:shadow-lg",
  };

  return (
    <motion.button
      type="button"
      whileHover={{ scale: props.disabled ? 1 : 1.04 }}
      whileTap={{ scale: props.disabled ? 1 : 0.97 }}
      className={clsx(
        baseStyles,
        sizes[size],
        variants[variant],
        props.disabled && "opacity-50 cursor-not-allowed",
        className,
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
