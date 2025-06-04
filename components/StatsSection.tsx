"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { ThumbsUp, Users, Smile } from "lucide-react";

type StatItem = {
  label: string;
  value: number;
  suffix?: string;
  icon: React.ReactNode;
};

const STATS: StatItem[] = [
  { label: "Avis générés", value: 3421, icon: <ThumbsUp className="w-6 h-6" /> },
  { label: "Utilisateurs actifs", value: 987, icon: <Users className="w-6 h-6" /> },
  {
    label: "Taux de satisfaction",
    value: 97,
    suffix: "%",
    icon: <Smile className="w-6 h-6" />,
  },
];

export default function StatsSection() {
  return (
    <section
      aria-labelledby="stats-heading"
      className="relative bg-gradient-to-br from-white to-zinc-100 dark:from-zinc-950 dark:to-zinc-900 py-24 px-6 text-black dark:text-white"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-marque/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-marqueDark/20 blur-2xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          id="stats-heading"
          className="text-3xl md:text-5xl font-extrabold mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Nos chiffres clés
        </motion.h2>

        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {STATS.map((stat, index) => (
            <motion.li
              key={stat.label}
              className="rounded-2xl bg-white/60 dark:bg-zinc-900/60 backdrop-blur p-6 shadow-md border border-zinc-200 dark:border-zinc-800"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-2 text-marque">{stat.icon}</div>
              <div className="text-4xl font-bold text-marque mb-1">
                <CountUp end={stat.value} duration={2} suffix={stat.suffix ?? ""} enableScrollSpy />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}