"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Dupont",
    company: "StartupBoost",
    feedback: "AvisAI m’a permis de crédibiliser mon service en quelques jours. Simple, rapide, efficace.",
  },
  {
    name: "Sophie Martin",
    company: "CoachMe",
    feedback: "Grâce à l’IA, j’ai généré des témoignages très ciblés qui ont boosté ma conversion.",
  },
  {
    name: "Mohamed El Kassimi",
    company: "FreelanceDev",
    feedback: "L’outil est bluffant de simplicité. J’en parle à tout mon réseau d’indé.",
  },
  {
    name: "Lisa Deneuve",
    company: "GrowthLab",
    feedback: "Interface fluide, résultats pertinents, j’utilise AvisAI chaque semaine.",
  },
  {
    name: "Julien Morel",
    company: "WebSphere",
    feedback: "Gagner du temps et de la crédibilité instantanément, c’est un no-brainer.",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5 text-yellow-400 mb-2">
      {Array(5).fill(0).map((_, i) => (
        <Star key={i} size={16} fill="currentColor" />
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: typeof testimonials[number] }) {
  return (
    <div className="min-w-[300px] max-w-sm p-5 bg-white dark:bg-zinc-900 rounded-xl shadow-lg border dark:border-zinc-700 hover:scale-[1.02] transition-all">
      <StarRating />
      <p className="text-sm text-gray-700 dark:text-zinc-300 mb-3 italic">"{t.feedback}"</p>
      <p className="font-semibold text-zinc-900 dark:text-white">{t.name}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400">{t.company}</p>
    </div>
  );
}

export default function TestimonialsSlider() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-black text-black dark:text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-10">Ils nous font confiance ⭐</h2>

        {/* First Marquee Row */}
        <motion.div
          className="flex gap-6 mb-10"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={`top-${i}`} t={t} />
          ))}
        </motion.div>

        {/* Second Marquee Row */}
        <motion.div
          className="flex gap-6"
          animate={{ x: ["-100%", "0%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={`bottom-${i}`} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}