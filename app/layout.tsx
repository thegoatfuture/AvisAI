import "@/styles/globals.css";

import React from "react";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import Footer from "@/components/Footer";
import LayoutShell from "@/components/LayoutShell";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: {
    default: "AvisAI – Générateur d'avis IA",
    template: "%s | AvisAI",
  },
  description:
    "Boostez votre crédibilité grâce à l'IA. Créez et gérez des témoignages clients automatiquement.",
  viewport: "width=device-width, initial-scale=1",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
        <Providers>
          <LayoutShell>{children}</LayoutShell>
          <Footer />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}