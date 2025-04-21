"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Générateur", href: "/dashboard" },
  { label: "Avis", href: "/dashboard/avis" },
  { label: "Statistiques", href: "/dashboard/stats" },
  { label: "Paramètres", href: "/dashboard/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 hidden md:flex flex-col bg-zinc-100 dark:bg-zinc-900 p-6 border-r dark:border-zinc-800">
      <h2 className="text-lg font-semibold mb-6 text-zinc-700 dark:text-zinc-300">Dashboard</h2>
      <nav className="space-y-3">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`block px-4 py-2 rounded-md transition hover:bg-zinc-200 dark:hover:bg-zinc-800 ${
              pathname === href ? "bg-zinc-200 dark:bg-zinc-800 font-bold" : ""
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
