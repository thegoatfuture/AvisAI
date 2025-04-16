import React from "react";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <div className="h-screen flex justify-center items-center bg-black">
      <motion.div
        className="w-12 h-12 border-4 border-t-transparent border-white rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
}
