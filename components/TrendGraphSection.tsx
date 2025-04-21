"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import CountUp from "react-countup";
import clsx from "clsx";

const datasets = {
  "7j": [
    { name: "Lun", traffic: 40, conversion: 10 },
    { name: "Mar", traffic: 50, conversion: 12 },
    { name: "Mer", traffic: 65, conversion: 15 },
    { name: "Jeu", traffic: 70, conversion: 20 },
    { name: "Ven", traffic: 60, conversion: 18 },
    { name: "Sam", traffic: 55, conversion: 16 },
    { name: "Dim", traffic: 75, conversion: 22 },
  ],
  "30j": Array.from({ length: 30 }, (_, i) => ({
    name: `J${i + 1}`,
    traffic: 50 + Math.floor(Math.random() * 40),
    conversion: 10 + Math.floor(Math.random() * 20),
  })),
  "90j": Array.from({ length: 90 }, (_, i) => ({
    name: `J${i + 1}`,
    traffic: 60 + Math.floor(Math.random() * 60),
    conversion: 8 + Math.floor(Math.random() * 30),
  })),
};

const filters = ["7j", "30j", "90j"];

export default function TrendGraphSection() {
  const [activeFilter, setActiveFilter] = useState<"7j" | "30j" | "90j">("7j");
  const data = datasets[activeFilter];

  const totalTraffic = data.reduce((acc, d) => acc + d.traffic, 0);
  const totalConversion = data.reduce((acc, d) => acc + d.conversion, 0);

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-zinc-100 dark:from-black dark:to-zinc-900 text-black dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          📊 Suivi des performances
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10">
          Visualisez l'évolution de votre trafic et vos taux de conversion.
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f as "7j" | "30j" | "90j")}
              className={clsx(
                "px-4 py-2 rounded-lg text-sm font-medium transition",
                f === activeFilter
                  ? "bg-red-500 text-white shadow-md"
                  : "bg-zinc-200 dark:bg-zinc-800 text-black dark:text-white"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Chart container */}
        <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-700 transition-colors">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="traffic"
                stroke="#ef4444"
                strokeWidth={2.5}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="conversion"
                stroke="#3b82f6"
                strokeWidth={2.5}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* KPIs */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-10 text-center">
          <div>
            <p className="text-gray-500 dark:text-gray-400 mb-1">Trafic total</p>
            <h3 className="text-3xl font-bold text-red-500">
              <CountUp end={totalTraffic} duration={1.2} separator=" " />
            </h3>
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400 mb-1">
              Conversions totales
            </p>
            <h3 className="text-3xl font-bold text-blue-500">
              <CountUp end={totalConversion} duration={1.2} separator=" " />
            </h3>
          </div>
        </div>
      </motion.div>
    </section>
  );
}