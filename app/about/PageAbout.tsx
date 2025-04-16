"use client";

import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PageAbout() {
  return (
    <>
      <Head>
        <title>AvisAI | À propos</title>
        <meta
          name="description"
          content="En savoir plus sur l'équipe et la mission de AvisAI, la plateforme de génération d'avis clients IA."
        />
      </Head>
      <main className="max-w-5xl mx-auto px-6 py-20">
        <motion.h1
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          À propos d'AvisAI
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          AvisAI est une solution SaaS développée pour aider les marques à renforcer leur crédibilité grâce à l'automatisation de la preuve sociale via l'intelligence artificielle.
        </motion.p>

        <motion.section
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold mb-2">Notre mission</h2>
            <p>
              Offrir aux entreprises un moyen simple, crédible et efficace de valoriser leur expérience client et de booster leur taux de conversion grâce aux avis IA.
            </p>
          </div>
          <div className="bg-zinc-100 dark:bg-zinc-800 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold mb-2">Notre vision</h2>
            <p>
              Démocratiser l'accès à des outils marketing intelligents en proposant une plateforme intuitive, performante et évolutive.
            </p>
          </div>
        </motion.section>

        <div className="text-center mt-16">
          <Link
            href="/features"
            className="inline-block bg-brand hover:bg-brand-dark text-white font-semibold py-3 px-6 rounded-xl transition"
          >
            Découvrir les fonctionnalités
          </Link>
        </div>
      </main>
    </>
  );
}
