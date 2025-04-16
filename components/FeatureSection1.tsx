// src/components/FeatureSection1.jsx

import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function FeatureSection1() {
  return (
    <motion.section
      className="py-24 px-6 bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark transition-colors duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-4">
          <div className="w-16 h-16 rounded-2xl bg-marque/10 flex items-center justify-center shadow-inner">
            <span className="text-xl font-bold text-marque">12</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Obtenez les meilleurs visuels en un clic
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Explorez notre base IA et générez des visuels crédibles et percutants pour votre marque. Filtres intelligents inclus.
          </p>
          <ul className="space-y-2 text-gray-800 dark:text-gray-200">
            {["Filtres par objectifs marketing", "Export multi-formats", "Suivi des visuels performants"].map((txt, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle className="text-marque w-5 h-5" /> {txt}
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="inline-block mt-6 bg-marque hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-xl shadow transition"
          >
            Commencer maintenant
          </a>
        </div>
        <motion.div
          className="h-[400px] bg-gray-200 dark:bg-white/10 rounded-xl shadow-inner flex items-center justify-center text-gray-500 dark:text-white/40 text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          🧠 Aperçu des visuels IA
        </motion.div>
      </div>
    </motion.section>
  );
}
