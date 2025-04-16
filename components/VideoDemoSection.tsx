// src/components/VideoDemoSection.jsx

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function VideoDemoSection() {
  const scrollToFeatures = () => {
    const el = document.getElementById("features");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 px-6 text-center bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="inline-block bg-marque text-xs font-semibold uppercase text-white px-4 py-1 rounded-full mb-6"
      >
        Nouveau
      </motion.div>

      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        BrandTracker
      </motion.h2>

      <motion.p
        className="text-white/70 text-lg max-w-2xl mx-auto mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        Analysez les plus grandes marques. Surveillez les tendances publicitaires.
        Découvrez les créations les plus performantes.
      </motion.p>

      <motion.div
        className="aspect-video max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl group transition duration-300"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
      >
        <video
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-red-500/50 group-hover:shadow-2xl"
          autoPlay
          muted
          loop
          playsInline
          src="/video/demo.mp4"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        viewport={{ once: true }}
        className="mt-8"
      >
        <button
          onClick={scrollToFeatures}
          className="inline-flex items-center gap-2 bg-marque hover:bg-marque/90 text-white font-semibold py-3 px-6 rounded-full transition"
        >
          En savoir plus <ArrowRight size={18} />
        </button>
      </motion.div>

      <motion.p
        className="text-sm text-white/50 mt-4"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        viewport={{ once: true }}
      >
        Mis à jour <span className="font-semibold">il y a 10 heures</span>
      </motion.p>
    </section>
  );
}