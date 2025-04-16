// src/components/FeatureCard.jsx
import React from "react";
import { motion } from "framer-motion";

export default function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      className="relative p-6 rounded-2xl bg-white dark:bg-black text-black dark:text-white shadow-xl overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Animated Border */}
      <span className="absolute inset-0 border-animation z-0" />

      <div className="relative z-10 flex flex-col items-center text-center space-y-4">
        <div className="bg-marque/10 dark:bg-white/10 p-4 rounded-full">
          <img src={icon} alt={title} className="w-10 h-10" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-sm opacity-80">{description}</p>
      </div>
    </motion.div>
  );
}