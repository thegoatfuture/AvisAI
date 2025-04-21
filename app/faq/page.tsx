"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "Comment fonctionne AvisAI ?",
    answer:
      "AvisAI utilise l'IA pour générer des témoignages crédibles et adaptés à votre audience en quelques secondes."
  },
  {
    question: "Puis-je personnaliser les avis ?",
    answer:
      "Oui, modifiez chaque avis à votre image pour rester aligné avec votre ton et votre branding."
  },
  {
    question: "Comment intégrer les avis sur mon site ?",
    answer:
      "Intégrez les témoignages via notre widget intelligent ou exportez-les pour les publier où vous voulez."
  },
  {
    question: "Y a-t-il un engagement ?",
    answer:
      "Aucun. Vous pouvez commencer avec un abonnement flexible dès 29€ par mois et annuler à tout moment."
  },
  {
    question: "Où puis-je contacter le support ?",
    answer:
      "Notre équipe est disponible 7j/7 par email et via le chat intégré à votre tableau de bord."
  },
];

export default function PageFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen px-6 py-24 bg-white dark:bg-zinc-950 text-black dark:text-white transition-colors duration-500">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Foire aux questions</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-12">
          Vous avez des questions ? Voici ce que nos utilisateurs demandent souvent.
        </p>
      </motion.div>

      <section className="max-w-3xl mx-auto space-y-6">
        {faqItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            viewport={{ once: true }}
            className="border border-zinc-300 dark:border-zinc-700 rounded-xl bg-white/40 dark:bg-white/5 backdrop-blur-sm shadow-sm"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 flex justify-between items-center text-left text-base md:text-lg font-medium"
            >
              <span>{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <AnimatePresence initial={false}>
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
      </section>
    </main>
  );
}