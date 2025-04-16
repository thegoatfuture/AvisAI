import React from "react";
import { motion } from "framer-motion";

export default function AnimatedBar() {
  return (
    <motion.div
      className="fixed left-4 top-1/3 h-24 w-1 bg-green-500 z-50 rounded"
      initial={{ height: 0 }}
      animate={{ height: "6rem" }}
      transition={{ duration: 1.2, delay: 0.2 }}
    />
  );
}
