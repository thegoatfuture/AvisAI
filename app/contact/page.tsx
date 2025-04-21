"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import { CheckCircle } from "lucide-react";

export default function PageContact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1500);
  };

  return (
    <>
      <Head>
        <title>Contact | AvisAI</title>
        <meta
          name="description"
          content="Contactez l'équipe d'AvisAI pour vos demandes de partenariat, démos ou support."
        />
      </Head>

      <main className="min-h-screen bg-white dark:bg-zinc-950 px-6 py-24 text-black dark:text-white">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contactez notre équipe
          </motion.h1>

          <motion.p
            className="text-gray-600 dark:text-gray-400 mb-10 text-center text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Une question ? Une démo ? Une idée de partenariat ?<br />
            Nous sommes à votre écoute.
          </motion.p>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-zinc-100 dark:bg-zinc-900 p-8 rounded-2xl shadow-lg"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-800 text-black dark:text-white border border-zinc-300 dark:border-zinc-700 focus:ring-2 focus:ring-marque"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Adresse e-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-800 text-black dark:text-white border border-zinc-300 dark:border-zinc-700 focus:ring-2 focus:ring-marque"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-zinc-800 text-black dark:text-white border border-zinc-300 dark:border-zinc-700 focus:ring-2 focus:ring-marque"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-marque hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition"
            >
              {status === "sending" ? "Envoi en cours..." : "Envoyer"}
            </button>
          </form>

          <AnimatePresence>
            {status === "sent" && (
              <motion.div
                role="status"
                className="mt-6 flex items-center justify-center text-green-600 dark:text-green-400 gap-2 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                <CheckCircle className="w-5 h-5" /> Message envoyé avec succès !
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </>
  );
}