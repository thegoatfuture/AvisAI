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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative py-24 px-6 bg-gradient-to-br from-white via-zinc-50 to-zinc-100 dark:from-black dark:via-zinc-900 dark:to-zinc-950 text-center overflow-hidden rounded-3xl shadow-xl mx-auto max-w-5xl"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold tracking-tight text-black dark:text-white mb-4"
      >
        🧠 Boostez votre cerveau IA
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10"
      >
        Recevez chaque semaine des idées IA visuelles et impactantes directement dans votre boîte mail.
        <br className="hidden sm:block" />
        Pas de spam. Juste de la valeur.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto"
      >
        <input
          type="email"
          required
          placeholder="Votre email pro"
          disabled={submitted}
          className="w-full sm:w-80 px-5 py-3 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-sm text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-marque placeholder:text-zinc-500 dark:placeholder:text-zinc-400 transition"
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={submitted}
          className="px-6 py-3 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 text-white font-bold shadow-md hover:shadow-lg transition disabled:opacity-50 flex items-center gap-2"
        >
          {submitted ? (
            <>
              <CheckCircle size={18} className="text-white" />
              Inscrit
            </>
          ) : (
            "Rejoindre la newsletter"
          )}
        </motion.button>
      </motion.form>

      <AnimatePresence>
        {submitted && (
          <motion.div
            key="success-toast"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-br from-green-500 to-emerald-600 text-white px-6 py-3 rounded-2xl shadow-lg z-50 text-sm font-medium"
          >
            ✅ Merci pour votre inscription ! À très vite.
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}