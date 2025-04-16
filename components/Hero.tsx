import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-24 px-6 text-center max-w-4xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-4xl md:text-5xl font-bold mb-6 block">
          Générez des <span className="text-brand">avis clients IA</span><br />
          et des visuels crédibles en quelques clics.
        </span>
      </motion.h1>

      <motion.p
        className="text-gray-600 dark:text-white/70 text-lg mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Boostez votre crédibilité. Automatisez la preuve sociale de votre marque.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
      >
        <a
          href="/features"
          className="bg-brand px-6 py-3 rounded-xl text-white font-semibold text-lg hover:bg-brand-dark transition"
        >
          Voir les fonctionnalités
        </a>
      </motion.div>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Image
          src="/images/hero-img.png"
          alt="Illustration IA"
          width={800}
          height={500}
          className="mx-auto rounded-xl"
        />
      </motion.div>
    </section>
  );
}
