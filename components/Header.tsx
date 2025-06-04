"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { name: "Accueil", href: "/" },
  { name: "Fonctionnalités", href: "/features" },
  { name: "Tarifs", href: "/pricing" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed w-full top-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur-lg border-b border-zinc-200 dark:border-zinc-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-pink-600 dark:text-pink-500">
          AvisAI
        </Link>

        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          {NAV_LINKS.map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href={link.href}
                className={`transition ${
                  pathname === link.href
                    ? "text-pink-600 dark:text-pink-500 font-semibold"
                    : "text-zinc-700 dark:text-zinc-200 hover:text-pink-600"
                }`}
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
          aria-label="Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden px-6 pb-4 space-y-2"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`block transition ${
                  pathname === link.href
                    ? "text-pink-600 dark:text-pink-500 font-semibold"
                    : "text-zinc-700 dark:text-zinc-200 hover:text-pink-600"
                }`}
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
      </AnimatePresence>
    </header>
  );
}