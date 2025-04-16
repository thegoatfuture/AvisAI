"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Newsletter() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="py-20 px-6 bg-white dark:bg-black text-black dark:text-white text-center transition-colors duration-500"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-6"
      >
        🔔 Ne manquez rien de l'IA
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8 text-gray-600 dark:text-gray-300 text-lg"
      >
        Une fois par semaine, recevez des idées concrètes, des exemples visuels et nos nouveautés IA
        les plus percutantes. <br />
        Pas de spam. Que du lourd.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto"
      >
        <motion.input
          type="email"
          placeholder="Votre adresse email"
          disabled={submitted}
          className="px-4 py-3 rounded-lg w-full sm:w-72 text-black dark:text-white bg-gray-100 dark:bg-white/10 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-marque disabled:opacity-50"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={submitted}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-marque text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors disabled:opacity-50 flex items-center gap-2"
        >
          {submitted ? (
            <>
              <CheckCircle size={20} className="text-white" /> Inscrit
            </>
          ) : (
            "S’inscrire"
          )}
        </motion.button>
      </motion.form>

      <AnimatePresence>
        {submitted && (
          <motion.div
            key="confirmation"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-marque text-white px-6 py-3 rounded-xl shadow-lg z-50"
          >
            ✅ Merci pour votre confiance, on vous embarque dans l’aventure !
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
