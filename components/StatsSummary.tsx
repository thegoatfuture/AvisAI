"use client";

import React from "react";

const stats = [
  { label: "Avis générés", value: 124 },
  { label: "Taux de conversion", value: "12.5%" },
  { label: "Utilisateurs actifs", value: 842 },
];

export default function StatsSummary() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
      {stats.map((stat, i) => (
        <div key={i} className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-xl text-center border border-zinc-200 dark:border-zinc-700 transition-all duration-300 hover:scale-105">
          <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
          <p className="text-4xl font-extrabold text-marque mt-1 tracking-tight">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}