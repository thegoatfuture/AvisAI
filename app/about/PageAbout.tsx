"use client";

import { motion } from "framer-motion";

export default function PageAbout() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-center mb-8">
          À propos d’AvisAI
        </h1>
      </motion.div>

      <p className="text-lg text-center">
        Bienvenue sur AvisAI, votre plateforme d’avis boostée à l’intelligence artificielle.
      </p>
    </main>
  );
}