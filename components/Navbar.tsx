"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");

  return (
    <header className="w-full px-6 py-4 bg-white dark:bg-zinc-950 shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-marque">AvisAI</Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
          <Link href="/">Accueil</Link>
          <Link href="/features">Fonctionnalités</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
          {isDashboard ? (
            <Link href="/logout" className="text-red-500">Déconnexion</Link>
          ) : (
            <Link href="/login" className="text-marque">Connexion</Link>
          )}
        </nav>
      </div>
    </header>
  );
}
