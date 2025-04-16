"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "@/animations/feature-highlight.json";
import { Rocket, Eye, Sparkles } from "lucide-react";
import ButtonDuo from "@/components/ui/ButtonDuo";

const allFeatures = [
  {
    icon: <Rocket className="w-6 h-6 text-red-500" />,
    title: "Génération instantanée",
    text: "Créez des avis et visuels crédibles en quelques secondes grâce à notre IA avancée.",
    type: "IA",
  },
  {
    icon: <Eye className="w-6 h-6 text-red-500" />,
    title: "Analyse des tendances",
    text: "Suivez ce qui fonctionne en temps réel pour ajuster votre stratégie marketing.",
    type: "Statistiques",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-red-500" />,
    title: "Personnalisation facile",
    text: "Modifiez couleurs, formats et messages pour correspondre à votre identité de marque.",
    type: "Personnalisation",
  },
];

const filters = ["Tous", "IA", "Statistiques", "Personnalisation"];

export default function PageFeature() {
  const [activeFilter, setActiveFilter] = useState("Tous");
  const filtered =
    activeFilter === "Tous"
      ? allFeatures
      : allFeatures.filter((f) => f.type === activeFilter);

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-black dark:text-white px-6 py-20">
      <div className="max-w-5xl mx-auto text-center mb-20">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Nos Fonctionnalités Clés
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Découvrez comment notre IA transforme vos témoignages en super pouvoir marketing.
        </motion.p>
        <div className="w-60 mx-auto mt-10">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>

      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {filters.map((filter) => (
          <ButtonDuo
            key={filter}
            variant={activeFilter === filter ? "primary" : "secondary"}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </ButtonDuo>
        ))}
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <AnimatePresence>
          {filtered.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="rounded-2xl p-6 shadow-lg bg-zinc-100 dark:bg-zinc-900"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="mb-4 flex justify-center items-center w-14 h-14 rounded-full bg-red-100 dark:bg-red-500/10">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-zinc-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {feature.text}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold mb-4">Vous êtes prêts ?</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6">
          Lancez-vous aujourd’hui et dominez votre secteur grâce à l’IA.
        </p>
        <ButtonDuo variant="primary">Démarrer maintenant</ButtonDuo>
      </div>
    </main>
  );
}
