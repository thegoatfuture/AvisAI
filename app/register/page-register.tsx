// app/register/page.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-black px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md space-y-8 rounded-2xl p-8 bg-zinc-100 dark:bg-zinc-900 shadow-xl"
      >
        <h2 className="text-2xl font-bold text-center text-pink-600">Créer un compte</h2>

        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Nom complet
            </label>
            <input
              type="text"
              id="name"
              placeholder="Votre nom"
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-zinc-800 text-black dark:text-white border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Adresse email
            </label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-zinc-800 text-black dark:text-white border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Mot de passe
            </label>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 rounded-lg bg-white dark:bg-zinc-800 text-black dark:text-white border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 rounded-lg transition"
          >
            Créer un compte
          </button>
        </form>

        <div className="text-center text-sm text-zinc-500 dark:text-zinc-400">ou</div>

        <button className="w-full flex items-center justify-center gap-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 py-2 rounded-lg hover:shadow-md transition">
          <img src="/google.svg" alt="Google" className="w-5 h-5" />
          <span className="text-sm font-medium">S'inscrire avec Google</span>
        </button>

        <div className="text-center text-sm pt-2">
          <Link href="/login" className="text-pink-500 hover:underline">
            Vous avez déjà un compte ? Connectez-vous
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
