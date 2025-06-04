"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function VideoDemoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(videoRef, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    } else {
      video.pause();
    }
  }, [isInView]);

  return (
    <section className="relative py-24 px-6 bg-white dark:bg-zinc-950 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white">
          💡 Démo en action
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
          Découvrez AvisAI en 60 secondes : un aperçu clair, rapide et inspirant de ce que notre plateforme peut faire pour votre entreprise.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto aspect-video rounded-3xl overflow-hidden shadow-xl border border-zinc-200 dark:border-zinc-800"
      >
        <video
          ref={videoRef}
          muted
          loop
          playsInline
          controls
          preload="metadata"
          className="w-full h-full object-cover"
        >
          <source src="/demo.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture vidéo.
        </video>
      </motion.div>

      {/* Overlay de gradient décoratif */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white dark:via-zinc-900/20 dark:to-zinc-950 pointer-events-none z-0" />

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-12 text-sm text-gray-500 dark:text-gray-400 z-10 relative"
      >
        Pas besoin d’un long tuto – juste ce qu’il faut pour vous convaincre 🚀
      </motion.p>
    </section>
  );
}