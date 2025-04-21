"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const stats = [
  { label: "Avis générés", value: 3421 },
  { label: "Utilisateurs actifs", value: 987 },
  { label: "Taux de satisfaction", value: 97, suffix: "%" },
];

export default function StatsSection() {
  return (
    <section className="bg-white dark:bg-zinc-950 text-black dark:text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Nos chiffres parlent pour nous 🚀
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-zinc-100 dark:bg-zinc-900 p-6 rounded-2xl shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-4xl font-bold text-red-600 mb-2">
                <CountUp
                  end={stat.value}
                  duration={2}
                  suffix={stat.suffix || ""}
                />
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}