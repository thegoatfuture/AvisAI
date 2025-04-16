// src/components/TrendInsightSection.jsx

import React from "react";
import { motion } from "framer-motion";

export default function TrendInsightSection() {
  const scrollToSection = () => {
    const el = document.getElementById("features");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-surface-light dark:bg-surface-dark py-20 px-6 text-center text-text-light dark:text-text-dark transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center mb-6"
      >
        <div className="rounded-2xl border border-marque/50 p-4 shadow-inner bg-white/50 dark:bg-black/20">
          <img
            src="https://www.svgrepo.com/show/501392/growth-up.svg"
            alt="Icône de tendances"
            className="w-8 h-8 text-marque"
          />
        </div>
      </motion.div>

      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Repérez les tendances virales<br /> avant tout le monde
      </motion.h2>

      <motion.p
        className="max-w-3xl mx-auto text-gray-700 dark:text-white/70 text-lg mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        Restez en avance en suivant ce qui explose sur TikTok, Twitter et plus encore.
        AvisAI détecte les signaux : hashtags en hausse, pics de mots-clés... transformez ces
        tendances en ventes avant vos concurrents.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
      >
        <button
          onClick={scrollToSection}
          className="bg-marque hover:bg-red-600 text-white font-semibold text-lg px-6 py-3 rounded-xl shadow-md transition"
        >
          Commencer à suivre maintenant
        </button>
      </motion.div>
    </section>
  );
}