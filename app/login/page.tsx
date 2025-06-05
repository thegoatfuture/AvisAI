// app/login/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  const errorMessage =
    error ? "Échec de la connexion. Veuillez réessayer." : null;

  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-black px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md space-y-8 rounded-2xl p-8 bg-zinc-100 dark:bg-zinc-900 shadow-xl"
      >
        <h2 className="text-2xl font-bold text-center text-pink-600">Connexion</h2>

        {errorMessage && (
          <p className="text-center text-sm text-red-500">{errorMessage}</p>
        )}

        <button
          onClick={() => signIn("google")}
          className="w-full flex items-center justify-center gap-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 py-2 rounded-lg hover:shadow-md transition"
        >
          <img src="/google.svg" alt="Google" className="w-5 h-5" />
          <span className="text-sm font-medium">Connexion avec Google</span>
        </button>

        <div className="text-center text-sm pt-2">
          <Link href="/register" className="text-pink-500 hover:underline">
            Pas encore de compte ? Inscrivez-vous
          </Link>
        </div>
      </motion.div>
    </main>
  );
}