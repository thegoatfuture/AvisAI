"use client";

import React from "react";
import Lottie from "lottie-react";
import animationData from "@/animations/loading.json";
import { motion } from "framer-motion";

export default function LottieReact() {
  return (
    <motion.div
      className="w-48 h-48 mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Lottie
        animationData={animationData}
        loop
        className="w-full h-full drop-shadow-xl"
      />
    </motion.div>
  );
}