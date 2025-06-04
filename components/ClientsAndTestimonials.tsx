"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AvisCard from "./AvisCard";

interface Client {
  src: string;
  name: string;
}

interface Testimonial {
  name: string;
  avatar: string;
  rating: number;
  content: string;
}

const clients: Client[] = [
  { src: "/clients/google.svg", name: "Google" },
  { src: "/clients/meta.svg", name: "Meta" },
  { src: "/clients/shopify.svg", name: "Shopify" },
  { src: "/clients/stripe.svg", name: "Stripe" },
  { src: "/clients/vercel.svg", name: "Vercel" },
];

const testimonials: Testimonial[] = [
  {
    name: "Camille D.",
    avatar: "/avatars/camille.png",
    rating: 5,
    content:
      "AvisAI m'a permis d'augmenter la conversion de 27% en une semaine seulement ! Un outil indispensable.",
  },
  {
    name: "Léo M.",
    avatar: "/avatars/leo.png",
    rating: 4,
    content:
      "L'intégration des avis est super fluide, et l'effet est immédiat sur notre crédibilité.",
  },
];

export default function ClientsAndTestimonials() {
  return (
    <section className="bg-white dark:bg-zinc-950 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Logos des clients */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-zinc-800 dark:text-white">
            Ils nous font confiance
          </h2>
          <div className="flex flex-wrap gap-6">
            {clients.map((client) => (
              <Image
                key={client.src}
                src={client.src}
                alt={client.name}
                width={120}
                height={40}
                className="h-10 w-auto grayscale hover:grayscale-0 transition"
              />
            ))}
          </div>
        </motion.div>

        {/* Témoignages */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold mb-4 text-zinc-800 dark:text-white">
            Ce qu’ils disent de nous
          </h2>
          <div className="grid gap-6">
            {testimonials.map((testimonial, i) => (
              <AvisCard key={i} {...testimonial} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
