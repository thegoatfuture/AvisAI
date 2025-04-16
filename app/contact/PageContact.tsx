"use client";

import React, { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";

export default function PageContact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1000);
  };

  return (
    <>
      <Head>
        <title>Contactez-nous | AvisAI</title>
        <meta name="description" content="Contactez l'équipe AvisAI pour toute question ou demande de démo personnalisée." />
      </Head>

      <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-6 py-24">
        <div className="max-w-2xl mx-auto">
          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contactez-nous
          </motion.h1>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-400 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Une question ? Une démo personnalisée ? Écrivez-nous via ce formulaire.
          </motion.p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Votre nom"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-zinc-800 text-black dark:text-white"
            />

            <input
              type="email"
              name="email"
              placeholder="Votre email"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-zinc-800 text-black dark:text-white"
            />

            <textarea
              name="message"
              rows={5}
              placeholder="Votre message"
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-zinc-800 text-black dark:text-white"
            ></textarea>

            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              {status === "sending" ? "Envoi en cours..." : "Envoyer"}
            </button>
          </form>

          {status === "sent" && (
            <motion.div
              className="mt-6 text-green-500 font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Merci pour votre message, nous vous répondrons rapidement.
            </motion.div>
          )}

          <div className="mt-12 border-t pt-6 text-sm text-gray-500 dark:text-gray-400">
            <p>Email : contact@avisai.fr</p>
            <p>Adresse : 8 Rue du Web, 75000 Paris</p>
          </div>
        </div>
      </main>
    </>
  );
}
