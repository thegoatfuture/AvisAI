"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LogIn } from "lucide-react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function RegisterPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const errorMessage =
    error ? "Échec de l'inscription. Veuillez réessayer." : null;

  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-black text-black dark:text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md space-y-6 rounded-2xl p-8 bg-zinc-100 dark:bg-zinc-900 shadow-xl"
      >
        <h1 className="text-3xl font-bold text-center text-pink-600">Créer un compte</h1>

        {errorMessage && (
          <p className="text-center text-sm text-red-500">{errorMessage}</p>
        )}

        <button
          onClick={() => signIn("google")}
          className="w-full flex items-center justify-center gap-3 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 py-3 rounded-lg hover:shadow-md transition"
        >
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