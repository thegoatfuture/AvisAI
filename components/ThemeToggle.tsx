"use client";

import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const spring = { type: "spring", stiffness: 400, damping: 20 };

export default function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? resolvedTheme : theme;

  const toggleTheme = useCallback(() => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  }, [currentTheme, setTheme]);

  if (!mounted) {
    return (
      <span className="inline-block h-8 w-8 rounded-full bg-zinc-200 dark:bg-zinc-700 animate-pulse" />
    );
  }

  return (
    <motion.button
      type="button"
      aria-label="Changer le thème"
      aria-pressed={currentTheme === "dark"}
      onClick={toggleTheme}
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      transition={spring}
      className={clsx(
        "p-2 rounded-full border shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-marque",
        "bg-white/90 border-zinc-300 hover:bg-zinc-100 dark:bg-zinc-900 dark:border-zinc-700 dark:hover:bg-zinc-800"
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {currentTheme === "dark" ? (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="h-5 w-5 text-yellow-500" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="h-5 w-5 text-zinc-800 dark:text-zinc-200" />
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
}


