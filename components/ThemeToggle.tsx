// components/ThemeToggle.tsx
"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Changer le thème"
      className="p-2 rounded-full border border-white/30 hover:border-white transition-all duration-300 bg-transparent text-white hover:rotate-180"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}