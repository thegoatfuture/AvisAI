"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Section6() {
  return (
    <section className="relative overflow-hidden py-24 px-6 bg-gradient-to-br from-marqueDark via-marque to-red-600 text-white">
      <motion.div
        className="relative z-10 max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
          Propulsez votre crédibilité en un clin d'œil
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
          Automatisez la collecte et la diffusion de témoignages clients grâce à notre IA. Augmentez la confiance autour de votre marque et convertissez davantage.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link href="/register" passHref legacyBehavior>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-marque hover:bg-marqueDark transition px-8 py-3 rounded-full font-medium flex items-center gap-2 shadow-lg"
            >
              <Rocket size={18} /> Démarrer maintenant
            </motion.a>
          </Link>
          <Link href="/faq" passHref legacyBehavior>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 hover:bg-white/20 transition px-8 py-3 rounded-full font-medium flex items-center gap-2"
            >
              <Sparkles size={18} /> En savoir plus
            </motion.a>
          </Link>
        </div>
      </motion.div>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/20 via-transparent to-white/10 opacity-25 blur-2xl" />
    </section>
  );
}
