import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sophie D.",
    review: "AvisAI a transformé la manière dont je gère les avis clients. Un gain de temps fou !",
  },
  {
    name: "Julien M.",
    review: "Des visuels super pros générés automatiquement. Impressionnant !",
  },
  {
    name: "Amélie C.",
    review: "Le dashboard est simple et efficace. Je recommande à fond !",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-[#111] text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">Ce que disent nos clients</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="bg-[#1a1a1a] p-6 rounded-xl border border-white/10"
          >
            <p className="text-white/80 italic mb-4">“{item.review}”</p>
            <p className="text-brand font-semibold">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}