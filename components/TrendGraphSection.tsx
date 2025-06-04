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
import { useTheme } from "next-themes";

interface DataPoint {
  name: string;
  traffic: number;
  conversion: number;
}

type Filter = "7j" | "30j" | "90j";

const numberFormatter = new Intl.NumberFormat("fr-FR");

const datasets: Record<Filter, DataPoint[]> = {
  "7j": [
    { name: "Lun", traffic: 420, conversion: 120 },
    { name: "Mar", traffic: 510, conversion: 140 },
    { name: "Mer", traffic: 630, conversion: 160 },
    { name: "Jeu", traffic: 700, conversion: 190 },
    { name: "Ven", traffic: 650, conversion: 170 },
    { name: "Sam", traffic: 580, conversion: 150 },
    { name: "Dim", traffic: 720, conversion: 210 },
  ],
  "30j": Array.from({ length: 30 }, (_, i) => ({
    name: `J${i + 1}`,
    traffic: 600 + Math.floor(Math.random() * 200),
    conversion: 100 + Math.floor(Math.random() * 80),
  })),
  "90j": Array.from({ length: 90 }, (_, i) => ({
    name: `J${i + 1}`,
    traffic: 500 + Math.floor(Math.random() * 300),
    conversion: 90 + Math.floor(Math.random() * 120),
  })),
};

const filters: Filter[] = ["7j", "30j", "90j"];

export default function TrendGraphSection() {
  const [activeFilter, setActiveFilter] = useState<Filter>("7j");
  const data = datasets[activeFilter];

  const totalTraffic = data.reduce((acc, d) => acc + d.traffic, 0);
  const totalConversion = data.reduce((acc, d) => acc + d.conversion, 0);

  const { theme } = useTheme();

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
              onClick={() => setActiveFilter(f)}
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
              <defs>
                <linearGradient id="trafficGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor={theme === "dark" ? "#ef4444" : "#b91c1c"}
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="100%"
                    stopColor={theme === "dark" ? "#ef4444" : "#b91c1c"}
                    stopOpacity={0.2}
                  />
                </linearGradient>
                <linearGradient id="conversionGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="0%"
                    stopColor={theme === "dark" ? "#3b82f6" : "#1d4ed8"}
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="100%"
                    stopColor={theme === "dark" ? "#3b82f6" : "#1d4ed8"}
                    stopOpacity={0.2}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
              <XAxis dataKey="name" stroke="#888" />
              <YAxis tickFormatter={(v) => numberFormatter.format(v)} stroke="#888" />
              <Tooltip formatter={(v: number) => numberFormatter.format(v)} />
              <Line
                type="monotone"
                dataKey="traffic"
                stroke="url(#trafficGradient)"
                strokeWidth={3}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="conversion"
                stroke="url(#conversionGradient)"
                strokeWidth={3}
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
              <CountUp
                end={totalTraffic}
                duration={1.2}
                formattingFn={(v) => numberFormatter.format(v)}
              />
            </h3>
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400 mb-1">
              Conversions totales
            </p>
            <h3 className="text-3xl font-bold text-blue-500">
              <CountUp
                end={totalConversion}
                duration={1.2}
                formattingFn={(v) => numberFormatter.format(v)}
              />
            </h3>
          </div>
        </div>
      </motion.div>
    </section>
  );
}