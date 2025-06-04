"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Twitter,
  Facebook,
  Linkedin,
  Github,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 text-black dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4"
      >
        {/* Col 1 - Marque / baseline + réseaux */}
        <div>
          <Link href="/" className="text-2xl font-extrabold tracking-tight text-pink-600 dark:text-pink-500">
            AvisAI
          </Link>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            Générateur d’avis intelligent pour booster votre crédibilité.
          </p>
          <div className="mt-4 flex space-x-4">
            <Link href="#" aria-label="Twitter" className="hover:text-pink-600">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" aria-label="Facebook" className="hover:text-pink-600">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" aria-label="LinkedIn" className="hover:text-pink-600">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="#" aria-label="GitHub" className="hover:text-pink-600">
              <Github className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Col 2 - Navigation */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-pink-500">Accueil</Link>
            </li>
            <li>
              <Link href="/features" className="hover:text-pink-500">Fonctionnalités</Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-pink-500">Tarifs</Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-pink-500">FAQ</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-pink-500">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Col 3 - Ressources */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-3">Ressources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-pink-500">À propos</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-pink-500">Blog</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-pink-500">Support</Link>
            </li>
          </ul>
        </div>

        {/* Col 4 - Légal */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider mb-3">Légal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-pink-500">Mentions légales</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-pink-500">Conditions</Link>
            </li>
            <li>
              <Link href="#" className="hover:text-pink-500">Confidentialité</Link>
            </li>
          </ul>
        </div>
      </motion.div>

      <div className="border-t border-zinc-200 dark:border-zinc-800 mt-12 py-6 text-center text-xs text-zinc-500 dark:text-zinc-600">
        © {new Date().getFullYear()} AvisAI. Tous droits réservés.
      </div>
    </footer>
  );
}