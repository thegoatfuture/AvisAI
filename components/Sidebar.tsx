"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import clsx from "clsx";
import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  MessageSquareText,
  BarChart2,
  Settings,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { label: "Générateur", href: "/dashboard", icon: LayoutDashboard },
  { label: "Avis", href: "/dashboard/avis", icon: MessageSquareText },
  { label: "Statistiques", href: "/dashboard/stats", icon: BarChart2 },
  { label: "Paramètres", href: "/dashboard/settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex w-64 flex-col bg-zinc-100 dark:bg-zinc-900 p-6 border-r border-zinc-200 dark:border-zinc-800">
      <h2 className="mb-6 text-lg font-semibold text-zinc-700 dark:text-zinc-300">Dashboard</h2>
      <nav className="space-y-2">
        {navItems.map(({ href, label, icon: Icon }) => {
          const isActive = pathname === href;
          return (
            <motion.div key={href} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={href}
                aria-current={isActive ? "page" : undefined}
                className={clsx(
                  "flex items-center gap-3 px-4 py-2 rounded-md font-medium transition-colors",
                  "hover:bg-zinc-200 dark:hover:bg-zinc-800",
                  isActive && "bg-zinc-200 dark:bg-zinc-800 text-marque"
                )}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span>{label}</span>
              </Link>
            </motion.div>
          );
        })}
      </nav>
    </aside>
  );
}
