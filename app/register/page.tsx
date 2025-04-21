"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, User, LogIn } from "lucide-react";

export default function RegisterPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md space-y-6 rounded-2xl p-8 bg-zinc-100 dark:bg-zinc-900 shadow-xl"
      >
        <h1 className="text-3xl font-bold text-center text-pink-600">
          Créer un compte
        </h1>

        <form className="space-y-5">
          <div className="relative">
            <User className="absolute left-3 top-3 text-pink-500" size={20} />
            <input
              type="text"
              placeholder="Nom complet"
              className="pl-10 w-full py-3 rounded-lg bg-white dark:bg-zinc-800 text-black dark:text-white border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="relative">
            <Mail className="absolute left-3 top-3 text-pink-500" size={20} />
            <input
              type="email"
              placeholder="Adresse email"
              className="pl-10 w-full py-3 rounded-lg bg-white dark:bg-zinc-800 text-black dark:text-white border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-3 top-3 text-pink-500" size={20} />
            <input
              type="password"
              placeholder="Mot de passe"
              className="pl-10 w-full py-3 rounded-lg bg-white dark:bg-zinc-800 text-black dark:text-white border border-zinc-300 dark:border-zinc-700 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 rounded-lg transition"
          >
            S’inscrire
          </button>
        </form>

        <div className="text-center text-sm text-zinc-500 dark:text-zinc-400">
          ou
        </div>

        <button className="w-full flex items-center justify-center gap-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 py-3 rounded-lg hover:shadow-md transition">
          <img src="/google.svg" alt="Google" className="w-5 h-5" />
          <span className="text-sm font-medium">S’inscrire avec Google</span>
        </button>

        <div className="text-center text-sm pt-2">
          <Link href="/login" className="text-pink-500 hover:underline flex items-center justify-center gap-1">
            <LogIn size={14} /> Déjà un compte ? Connectez-vous
          </Link>
        </div>
      </motion.div>
    </main>
  );
}