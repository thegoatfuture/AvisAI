"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "Fonctionnalités", href: "/features" },
  { name: "Tarifs", href: "/pricing" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur-lg border-b border-zinc-200 dark:border-zinc-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-pink-600 dark:text-pink-500">
          AvisAI
        </Link>

        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href={link.href}
                className="text-zinc-700 dark:text-zinc-200 hover:text-pink-600 transition"
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/login"
            className="bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
          >
            Se connecter
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-zinc-700 dark:text-zinc-200"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          className="md:hidden px-6 pb-4 space-y-2"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-zinc-700 dark:text-zinc-200 hover:text-pink-600 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/login"
            className="block w-full bg-pink-600 text-white text-center font-medium py-2 rounded-lg mt-2 hover:bg-pink-700 transition"
            onClick={() => setIsOpen(false)}
          >
            Se connecter
          </Link>
        </motion.div>
      )}
    </header>
  );
}