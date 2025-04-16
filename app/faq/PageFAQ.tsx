"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "Comment fonctionne AvisAI ?",
    answer:
      "AvisAI utilise l'intelligence artificielle pour générer automatiquement des témoignages crédibles et adaptés à votre audience."
  },
  {
    question: "Est-ce que mes avis sont personnalisables ?",
    answer:
      "Oui, chaque avis peut être modifié pour refléter votre style, ton et spécificités de votre entreprise."
  },
  {
    question: "Puis-je intégrer les avis sur mon site ?",
    answer:
      "Vous pouvez facilement intégrer les témoignages générés via un widget ou en les exportant."
  },
  {
    question: "Combien coûte le service ?",
    answer:
      "Nous proposons des formules mensuelles à partir de 29€, sans engagement."
  },
  {
    question: "Comment résilier mon abonnement ?",
    answer:
      "Vous pouvez résilier à tout moment depuis votre tableau de bord, en un clic."
  }
];

export default function PageFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen px-4 md:px-6 pt-24 pb-20 bg-white dark:bg-zinc-950 text-black dark:text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Foire aux questions
        </motion.h1>

        <motion.p
          className="text-gray-600 dark:text-gray-400 mb-12 text-base md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Toutes les réponses à vos questions sur notre générateur d'avis IA.
        </motion.p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {faqItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="border border-zinc-300 dark:border-zinc-700 rounded-xl overflow-hidden shadow-sm"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 flex justify-between items-center text-left text-sm md:text-base font-medium"
            >
              <span>{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  className="px-6 pb-4 text-sm md:text-base text-zinc-600 dark:text-zinc-300"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
