"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import type { ComponentPropsWithoutRef } from "react";

interface ButtonDuoProps extends ComponentPropsWithoutRef<typeof motion.button> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export default function ButtonDuo({
  children,
  variant = "secondary",
  className,
  ...props
}: ButtonDuoProps) {
  const baseStyles =
    "px-5 py-2.5 rounded-xl font-medium text-sm md:text-base transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-marque";

  const variants = {
    primary:
      "bg-marque text-white hover:bg-red-600 shadow-md hover:shadow-lg",
    secondary:
      "bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/80",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}