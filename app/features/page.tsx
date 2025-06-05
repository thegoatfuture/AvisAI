"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Rocket, Eye, Sparkles } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fonctionnalités | AvisAI",
  description:
    "Découvrez comment AvisAI simplifie la génération et l'analyse de témoignages clients.",
};
import ButtonDuo from "@/components/ui/ButtonDuo";

const allFeatures = [
  {
    icon: <Rocket className="w-6 h-6 text-red-500" />,
    title: "Génération instantanée",
    text: "Créez des témoignages réalistes et visuels en quelques secondes grâce à notre IA de pointe.",
    type: "IA",
  },
  {
    icon: <Eye className="w-6 h-6 text-blue-500" />,
    title: "Analyse des tendances",
    text: "Suivez ce qui performe le mieux sur le marché en temps réel pour orienter votre stratégie.",
    type: "Statistiques",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-yellow-500" />,
    title: "Personnalisation poussée",
    text: "Adaptez le style, la tonalité et le format à votre branding sans effort.",
    type: "Personnalisation",
  },
];

const filters = ["Tous", "IA", "Statistiques", "Personnalisation"];

export default function PageFeature() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filteredFeatures =
    activeFilter === "Tous"
      ? allFeatures
      : allFeatures.filter((f) => f.type === activeFilter);

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 px-6 py-24 text-black dark:text-white transition-colors duration-500">
      <motion.header
        className="max-w-5xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Découvrez nos fonctionnalités
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Notre IA vous propulse au sommet avec des outils conçus pour créer, analyser et performer.
        </p>
      </motion.header>

      <motion.div
        className="flex justify-center flex-wrap gap-4 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {filters.map((filter) => (
          <ButtonDuo
            key={filter}
            variant={activeFilter === filter ? "primary" : "secondary"}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </ButtonDuo>
        ))}
      </motion.div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <AnimatePresence>
          {filteredFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="rounded-2xl p-6 shadow-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4 flex justify-center items-center w-14 h-14 rounded-full bg-red-100 dark:bg-red-500/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      <motion.div
        className="text-center mt-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold mb-4">Prêt à essayer ?</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Boostez votre visibilité avec notre intelligence artificielle.
        </p>
        <ButtonDuo variant="primary">Démarrer maintenant</ButtonDuo>
      </motion.div>
    </main>
  );
}