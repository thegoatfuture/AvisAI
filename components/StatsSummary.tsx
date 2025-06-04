"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { MessageSquareText, TrendingUp, Users } from "lucide-react";

type Stat = {
  label: string;
  value: number;
  suffix?: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const stats: Stat[] = [
  { label: "Avis générés", value: 124, Icon: MessageSquareText },
  { label: "Taux de conversion", value: 12.5, suffix: "%", Icon: TrendingUp },
  { label: "Utilisateurs actifs", value: 842, Icon: Users },
];

export default function StatsSummary() {
  return (
    <div className="grid grid-cols-1 gap-6 my-10 md:grid-cols-3">
      {stats.map(({ label, value, suffix, Icon }, index) => (
        <motion.div
          key={label}
          className="rounded-xl border border-zinc-200 bg-white p-6 text-center shadow-xl transition-colors dark:border-zinc-700 dark:bg-zinc-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
        >
          <Icon className="mx-auto mb-2 h-8 w-8 text-marque" />
          <p className="text-sm text-gray-500 dark:text-gray-400">{label}</p>
          <p className="mt-1 text-4xl font-extrabold tracking-tight text-marque">
            <CountUp end={value} duration={1.5} suffix={suffix ?? ""} />
          </p>
        </motion.div>
      ))}
    </div>
  );
}
