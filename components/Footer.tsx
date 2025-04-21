"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 px-6 py-12 text-black dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {/* Col 1 - Marque / baseline */}
        <div>
          <h2 className="text-xl font-semibold mb-2">AvisAI</h2>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Générateur d’avis intelligent pour votre marque. Boostez votre crédibilité.
          </p>
        </div>

        {/* Col 2 - Liens rapides */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-pink-500 transition">Accueil</Link>
            </li>
            <li>
              <Link href="/features" className="hover:text-pink-500 transition">Fonctionnalités</Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-pink-500 transition">Tarifs</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-pink-500 transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Col 3 - Contact rapide */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-3">Contact</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">contact@avisai.fr</p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">8 Rue du Web, 75000 Paris</p>
        </div>
      </motion.div>

      <div className="text-center mt-10 text-xs text-zinc-500 dark:text-zinc-600">
        © {new Date().getFullYear()} AvisAI. Tous droits réservés.
      </div>
    </footer>
  );
}