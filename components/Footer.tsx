import React from "react";

export default function Footer() {
  return (
    <footer className="bg-marque text-white py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-1">AvisAI</h3>
          <p className="text-white/80 text-sm">
            © {new Date().getFullYear()} Tous droits réservés
          </p>
        </div>

        <nav className="flex gap-6 text-white/90 text-sm">
          <a href="/features" className="hover:text-white transition">Fonctionnalités</a>
          <a href="/faq" className="hover:text-white transition">FAQ</a>
          <a href="/contact" className="hover:text-white transition">Contact</a>
        </nav>

        <div className="flex gap-4">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-5" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/icons/twitter.svg" alt="Twitter" className="h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}