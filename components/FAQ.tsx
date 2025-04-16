// src/components/FAQ.jsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Comment générer des avis IA ?",
    answer:
      "Connectez-vous à votre compte, sélectionnez le produit ou service concerné, puis cliquez sur \"Générer un avis\". Notre moteur IA se charge de créer un contenu crédible, réaliste et adapté à votre audience cible.",
  },
  {
    question: "Puis-je modifier les visuels générés ?",
    answer:
      "Oui. Chaque visuel généré peut être personnalisé via notre éditeur intégré. Changez les couleurs, les polices, les images ou même les textes pour les adapter à votre identité visuelle.",
  },
  {
    question: "Comment contacter le support ?",
    answer:
      "Notre équipe support est joignable 24h/24 via la page Contact. Vous pouvez également écrire à support@avisai.com : réponse garantie sous 24h (jours ouvrés).",
  },
];

function FAQItem({ faq, index, active, toggle }) {
  const isOpen = active === index;

  return (
    <motion.div
      layout
      initial={false}
      animate={{
        backgroundColor: isOpen ? undefined : undefined,
      }}
      className="border border-white/10 rounded-xl p-6 bg-[#f3f4f6] dark:bg-[#1f1f1f]"
    >
      <button
        className="w-full flex justify-between items-center text-left text-lg font-medium text-black dark:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-marque"
        onClick={() => toggle(index)}
      >
        <span>{faq.question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-marque" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="mt-4 text-sm text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {faq.answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="bg-white dark:bg-[#111] text-black dark:text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Foire aux questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} index={i} faq={faq} active={active} toggle={toggle} />
          ))}
        </div>
      </div>
    </section>
  );
}