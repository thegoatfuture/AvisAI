"use client";

import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Comment fonctionne AvisAI ?",
    answer: "AvisAI utilise l’IA pour générer automatiquement des témoignages réalistes et engageants adaptés à votre secteur."
  },
  {
    question: "Puis-je personnaliser les avis ?",
    answer: "Absolument. Couleur, ton, longueur, vous pouvez tout ajuster à votre marque."
  },
  {
    question: "Comment intégrer les avis sur mon site ?",
    answer: "Vous pouvez copier un snippet ou utiliser notre widget React prêt à l'emploi."
  },
  {
    question: "AvisAI est-il compatible avec mon CMS ?",
    answer: "Oui. WordPress, Webflow, Shopify, Ghost et bien d'autres."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = useCallback((index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  }, []);

  return (
    <section className="bg-white dark:bg-zinc-950 py-20 px-6" aria-label="FAQ">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Foire aux questions
        </motion.h2>
        <motion.p
          className="text-gray-600 dark:text-gray-400 text-base md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Toutes les réponses à vos interrogations les plus fréquentes.
        </motion.p>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        <dl className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            const id = `home-faq-${index}`;

            return (
              <motion.div
                key={id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl border border-zinc-300 dark:border-zinc-700 overflow-hidden shadow"
              >
                <dt>
                  <button
                    className="w-full flex justify-between items-center text-left px-6 py-4 font-medium text-zinc-800 dark:text-white bg-zinc-50 dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-marque"
                    onClick={() => toggle(index)}
                    aria-expanded={isOpen}
                    aria-controls={id}
                  >
                    {item.question}
                    <ChevronDown
                      className={`h-5 w-5 transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
                    />
                  </button>
                </dt>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.dd
                      id={id}
                      key="answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 py-4 text-sm text-zinc-600 dark:text-zinc-300 bg-white dark:bg-zinc-950"
                    >
                      {item.answer}
                    </motion.dd>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}