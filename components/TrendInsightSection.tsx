"use client";

import React from "react";
import { motion } from "framer-motion";

export default function TrendInsightSection() {
  const scrollToSection = () => {
    const el = document.getElementById("features");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-zinc-100 dark:from-zinc-900 dark:to-black py-24 px-6 text-center text-zinc-800 dark:text-white transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center mb-8"
      >
        <div className="p-4 bg-white/60 dark:bg-white/5 backdrop-blur-lg border border-marque/30 rounded-full shadow-lg">
          <img
            src="https://www.svgrepo.com/show/501392/growth-up.svg"
            alt="Icône de tendances"
            className="w-10 h-10 text-marque"
          />
        </div>
      </motion.div>

      <motion.h2
        className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Repérez les tendances virales <br className="hidden md:inline-block" /> avant tout le monde
      </motion.h2>

      <motion.p
        className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        Surveillez les signaux faibles avant qu’ils n’explosent. TikTok, X (Twitter), Instagram… AvisAI
        capte les hausses de hashtags, les montées de requêtes, les tendances cachées – pour vous donner
        l’avantage business en temps réel.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
      >
        <button
          onClick={scrollToSection}
          className="bg-marque hover:bg-red-600 text-white font-semibold text-lg px-6 py-3 rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          Commencer à suivre maintenant
        </button>
      </motion.div>
    </section>
  );
}