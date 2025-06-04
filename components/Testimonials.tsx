"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  company: string;
  role: string;
  avatar: string;
  feedback: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Alex Dupont",
    company: "StartupBoost",
    role: "CEO",
    avatar: "/Avatars/avatar_1.png",
    feedback:
      "AvisAI crédibilise instantanément nos services. L’outil est simple et redoutablement efficace.",
    rating: 5,
  },
  {
    name: "Sophie Martin",
    company: "CoachMe",
    role: "Marketing Manager",
    avatar: "/Avatars/avatar_2.png",
    feedback:
      "Grâce à l’IA, nous publions des retours clients ciblés qui ont fait bondir notre taux de conversion.",
    rating: 5,
  },
  {
    name: "Mohamed El Kassimi",
    company: "FreelanceDev",
    role: "Fondateur",
    avatar: "/Avatars/avatar_3.png",
    feedback:
      "L’outil est bluffant de simplicité. J’en parle à tout mon réseau d’indépendants.",
    rating: 5,
  },
  {
    name: "Lisa Deneuve",
    company: "GrowthLab",
    role: "Head of Growth",
    avatar: "/Avatars/avatar_4.png",
    feedback:
      "Interface fluide et résultats pertinents, AvisAI est devenu notre allié chaque semaine.",
    rating: 4,
  },
  {
    name: "Julien Morel",
    company: "WebSphere",
    role: "CTO",
    avatar: "/Avatars/avatar_5.png",
    feedback:
      "Gagner du temps et de la crédibilité instantanément, c’est pour nous un véritable no‑brainer.",
    rating: 5,
  },
  {
    name: "Claire Renard",
    company: "InnovApp",
    role: "Product Lead",
    avatar: "/Avatars/avatar_6.png",
    feedback:
      "La mise en place a été immédiate et nos utilisateurs font beaucoup plus confiance à nos pages.",
    rating: 4,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-yellow-400 mb-2" aria-label={`${rating} étoiles`}>
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} size={16} fill="currentColor" />
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className="min-w-[280px] max-w-sm p-6 bg-white/80 dark:bg-zinc-900/80 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-800 backdrop-blur-md hover:scale-[1.02] transition-transform">
      <div className="flex items-center gap-4 mb-4">
        <Image
          src={t.avatar}
          alt={`Photo de ${t.name}`}
          width={48}
          height={48}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-zinc-900 dark:text-white">{t.name}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {t.role} - {t.company}
          </p>
        </div>
      </div>
      <StarRating rating={t.rating} />
      <p className="text-sm text-gray-700 dark:text-zinc-300 italic">"{t.feedback}"</p>
    </div>
  );
}

export default function TestimonialsSlider() {
  return (
    <section
      aria-label="Témoignages clients"
      className="py-24 px-6 bg-white dark:bg-black text-black dark:text-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-12">Nos clients témoignent ⭐</h2>

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