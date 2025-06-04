"use client";

import React from "react";
import type { ComponentPropsWithoutRef } from "react";
import Lottie from "lottie-react";
import defaultAnimation from "@/animations/loading.json";
import { motion } from "framer-motion";
import clsx from "clsx";

interface LottieReactProps extends ComponentPropsWithoutRef<typeof Lottie> {
  /** Optional class applied to the wrapper element around the animation. */
  containerClassName?: string;
}

/** Display a Lottie animation with a subtle reveal transition. */
export default function LottieReact({
  containerClassName,
  className,
  animationData = defaultAnimation,
  loop = true,
  ...props
}: LottieReactProps) {
  return (
    <motion.div
      className={clsx("w-48 h-48 mx-auto", containerClassName)}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Lottie
        animationData={animationData}
        loop={loop}
        className={clsx("w-full h-full drop-shadow-xl", className)}
        {...props}
      />
    </motion.div>
  );
}
