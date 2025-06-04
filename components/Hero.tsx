"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={container}
      className="relative overflow-hidden bg-white dark:bg-black py-28 px-6 text-center"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-pink-100/30 to-transparent dark:from-pink-500/10" />

      <div className="relative mx-auto max-w-5xl">
        <motion.h1
          variants={item}
          className="text-4xl font-extrabold leading-tight text-zinc-900 dark:text-white md:text-6xl"
        >
          Générez des <span className="text-pink-600">avis clients</span> crédibles en un clic.
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 md:text-xl"
        >
          AvisAI propulse votre crédibilité en ligne grâce à une IA qui crée des témoignages personnalisés et engageants.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="/register"
            className="rounded-xl bg-pink-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-pink-700"
          >
            Commencer gratuitement
          </Link>
          <Link
            href="#demo"
            className="px-6 py-3 font-medium text-pink-600 underline-offset-4 hover:underline"
          >
            Voir une démo
          </Link>
        </motion.div>

        <motion.div variants={item} className="mt-16">
          <Image
            src="/images/hero-img.png"
            alt="Illustration d'une IA générant des avis clients"
            width={800}
            height={480}
            className="mx-auto rounded-xl shadow-xl"
            priority
          />
        </motion.div>
      </div>
    </motion.section>
  );
}