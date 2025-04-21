"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function GenerateButton() {
  const handleClick = () => {
    alert("Fonctionnalité de génération en cours d'intégration !");
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onClick={handleClick}
      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <Sparkles className="w-5 h-5 animate-pulse" />
      Générer un avis IA
    </motion.button>
  );
}