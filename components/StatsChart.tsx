"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
} from "recharts";

export type StatPoint = {
  label: string;
  value: number;
};

export interface StatsChartProps {
  /**
   * Dataset to display. If not provided a default example is used.
   */
  data?: StatPoint[];
  /**
   * Title displayed above the chart.
   */
  title?: string;
  /**
   * Stroke color for the line.
   */
  color?: string;
  /**
   * Optional container className for custom layout.
   */
  className?: string;
}

const defaultData: StatPoint[] = [
  { label: "Lun", value: 12 },
  { label: "Mar", value: 18 },
  { label: "Mer", value: 9 },
  { label: "Jeu", value: 23 },
  { label: "Ven", value: 16 },
];

export default function StatsChart({
  data = defaultData,
  title = "📈 Évolution des avis",
  color = "#e02424",
  className = "",
}: StatsChartProps) {
  return (
    <div
      className={`w-full h-80 bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-xl border border-zinc-200 dark:border-zinc-700 ${className}`}
    >
      <h3 className="text-xl font-semibold mb-4 text-zinc-800 dark:text-white">
        {title}
      </h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ left: 0, right: 0, top: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.4} />
              <stop offset="100%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.1} />
          <XAxis dataKey="label" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1f2937",
              borderRadius: "10px",
              color: "#fff",
            }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="none"
            fill="url(#lineGradient)"
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

