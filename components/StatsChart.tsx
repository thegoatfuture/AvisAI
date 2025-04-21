"use client";

import React from "react";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from "recharts";

const data = [
  { day: "Lun", avis: 12 },
  { day: "Mar", avis: 18 },
  { day: "Mer", avis: 9 },
  { day: "Jeu", avis: 23 },
  { day: "Ven", avis: 16 },
];

export default function StatsChart() {
  return (
    <div className="w-full h-80 bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-xl mt-10 border border-zinc-200 dark:border-zinc-700">
      <h3 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-white">📈 Évolution des avis</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
          <XAxis dataKey="day" stroke="#8884d8" />
          <YAxis />
          <Tooltip
            contentStyle={{ backgroundColor: "#1f2937", borderRadius: "10px", color: "#fff" }}
          />
          <Line
            type="monotone"
            dataKey="avis"
            stroke="#ef4444"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}