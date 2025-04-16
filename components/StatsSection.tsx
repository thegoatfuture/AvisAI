// src/components/StatsSection.jsx

import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { useInView } from "react-intersection-observer";

const stats = [
  { label: "Avis Générés", value: 339224 },
  { label: "Visuels Créés", value: 124650 },
  { label: "Contenus Publis", value: 8920777 },
];

export default function StatsSection() {
  return (
    <section className="bg-black py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 text-center">
        {stats.map((stat, i) => (
          <StatItem key={stat.label} stat={stat} index={i} />
        ))}
      </div>
    </section>
  );
}

function StatItem({ stat, index }) {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: false });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.2, type: "spring", stiffness: 120 }}
    >
      <motion.div
        whileHover={{ rotate: 10, scale: 1.2 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="text-red-500 mb-2"
      >
        <TrendingUp size={28} className="md:w-8 md:h-8" />
      </motion.div>

      <div className="text-white text-2xl md:text-3xl font-bold mt-1">
        +{inView ? <CountUp end={stat.value} duration={2} separator="," /> : "0"}
      </div>

      {/* Barre animée */}
      <motion.div
        className="h-1 w-10 mt-2 rounded-full bg-red-500"
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ delay: index * 0.3 + 0.5, duration: 0.4 }}
        style={{ transformOrigin: "left" }}
      />

      <div className="text-red-400 text-xs md:text-sm uppercase tracking-widest mt-2">
        {stat.label}
      </div>
    </motion.div>
  );
}