"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Eye, Sparkles } from "lucide-react";
import FeatureCard from "./FeatureCard";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Rocket className="w-6 h-6 text-pink-500" />,
    title: "Génération instantanée",
    description:
      "Créez des avis et visuels crédibles en quelques secondes grâce à notre IA avancée.",
  },
  {
    icon: <Eye className="w-6 h-6 text-indigo-500" />,
    title: "Analyse des tendances",
    description:
      "Suivez ce qui fonctionne en temps réel pour ajuster votre stratégie marketing.",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-yellow-500" />,
    title: "Personnalisation facile",
    description:
      "Modifiez formats, couleurs et styles pour refléter votre identité de marque.",
  },
];

export default function FeatureSection1() {
  return (
    <section
      id="features"
      className="relative py-24 px-6 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white"
    >
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-pink-50 via-transparent to-transparent dark:from-pink-900/20" />

      <div className="relative max-w-6xl mx-auto text-center">
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
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

