"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Eye, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Rocket className="w-6 h-6 text-pink-500" />,
    title: "Génération instantanée",
    description: "Créez des avis et visuels crédibles en quelques secondes grâce à notre IA avancée.",
  },
  {
    icon: <Eye className="w-6 h-6 text-indigo-500" />,
    title: "Analyse des tendances",
    description: "Suivez ce qui fonctionne en temps réel pour ajuster votre stratégie marketing.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-yellow-500" />,
    title: "Personnalisation facile",
    description: "Modifiez formats, couleurs et styles pour refléter votre identité de marque.",
  },
];

export default function FeatureSection1() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold mb-4"
        >
          Fonctionnalités clés
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 dark:text-gray-400 mb-12"
        >
          Une suite d’outils puissants pour vous démarquer.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              viewport={{ once: true }}
              className="rounded-2xl p-6 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all relative overflow-hidden"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-500/10 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 blur-2xl pointer-events-none rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}