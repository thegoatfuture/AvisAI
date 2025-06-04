"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/features", label: "Fonctionnalités" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut({ callbackUrl: "/" });
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 dark:bg-black/70 backdrop-blur-sm border-b border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold text-marque">
          AvisAI
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-700 dark:text-zinc-300 md:flex">
          {links.map(({ href, label }) => (
            <motion.div key={href} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link href={href}>{label}</Link>
            </motion.div>
          ))}
          {isDashboard && session ? (
            <button onClick={handleSignOut} className="text-red-500">
              Déconnexion
            </button>
          ) : (
            <Link href="/login" className="text-marque">
              Connexion
            </Link>
          )}
          <ThemeToggle />
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center md:hidden"
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden px-6 pb-4 md:hidden"
          >
            <div className="flex flex-col gap-4 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              {links.map(({ href, label }) => (
                <Link key={href} href={href} onClick={() => setOpen(false)}>
                  {label}
                </Link>
              ))}
              {isDashboard && session ? (
                <button onClick={handleSignOut} className="text-left text-red-500">
                  Déconnexion
                </button>
              ) : (
                <Link href="/login" onClick={() => setOpen(false)} className="text-marque">
                  Connexion
                </Link>
              )}
              <ThemeToggle />
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
