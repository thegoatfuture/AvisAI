"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Section6() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 text-white overflow-hidden">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
          🚀 Propulsez vos témoignages avec notre IA
        </h2>
        <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Générer des avis authentiques n’a jamais été aussi simple. Automatisez votre preuve sociale en un clic, et convertissez davantage avec moins d'effort.
        </p>

        <div className="flex justify-center items-center gap-4 flex-wrap">
          <Link href="/register">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-pink-600 hover:bg-pink-700 transition px-8 py-3 text-white font-medium rounded-full shadow-lg"
            >
              Commencer maintenant
            </motion.button>
          </Link>
          <Link href="/faq">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-zinc-800 hover:bg-zinc-700 transition px-8 py-3 text-white font-medium rounded-full shadow-lg flex items-center gap-2"
            >
              <Sparkles size={18} /> En savoir plus
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}