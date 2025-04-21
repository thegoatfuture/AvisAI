"use client";

import React from "react";
import { motion } from "framer-motion";

export default function PageAbout() {
  return (
    <main className="min-h-screen px-6 py-20 bg-white dark:bg-zinc-950 text-black dark:text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          À propos de <span className="text-marque">AvisAI</span>
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          AvisAI est né d’un constat simple : les témoignages clients sont puissants, mais difficiles
          à récolter, à structurer et à adapter. Notre solution d’intelligence artificielle génère
          automatiquement des avis engageants, personnalisés et adaptés à votre audience.
        </motion.p>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="bg-zinc-100 dark:bg-zinc-900 p-6 rounded-2xl shadow-lg transition hover:scale-[1.02]">
          <h3 className="text-xl font-semibold mb-2 text-marque">Notre mission</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Permettre à toutes les marques de construire leur preuve sociale à l’échelle,
            en s’appuyant sur la puissance de l’IA et des données comportementales.
          </p>
        </div>

        <div className="bg-zinc-100 dark:bg-zinc-900 p-6 rounded-2xl shadow-lg transition hover:scale-[1.02]">
          <h3 className="text-xl font-semibold mb-2 text-marque">Notre vision</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Créer un futur où chaque visiteur est convaincu par un contenu authentique, généré à
            partir de signaux réels et toujours aligné avec l’image de la marque.
          </p>
        </div>
      </motion.div>
    </main>
  );
}