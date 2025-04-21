"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-black py-28 px-6 text-center">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-pink-100/30 to-transparent dark:from-pink-500/10 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold text-zinc-900 dark:text-white leading-tight"
        >
          Générez des <span className="text-pink-600">avis clients</span> crédibles en un clic.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-zinc-600 dark:text-zinc-400"
        >
          AvisAI propulse votre crédibilité en ligne grâce à une IA qui crée des témoignages personnalisés et engageants.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link
            href="/register"
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-xl transition"
          >
            Commencer gratuitement
          </Link>
          <Link
            href="#demo"
            className="text-pink-600 hover:underline font-medium px-6 py-3"
          >
            Voir une démo
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16"
        >
          <Image
            src="/images/hero-img.png"
            alt="Illustration de l'IA"
            width={800}
            height={480}
            className="mx-auto rounded-xl shadow-xl"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}