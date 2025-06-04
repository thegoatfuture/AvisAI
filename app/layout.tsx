import "@/styles/globals.css";

import React from "react";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import PageWrapper from "@/components/PageWrapper";
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
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");

  return (
    <html lang="fr" className={`${inter.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
        <Providers>
          <Header />
          <div className="flex min-h-screen">
            {isDashboard && <Sidebar />}
            <PageWrapper>{children}</PageWrapper>
          </div>
          <Footer />
          <SpeedInsights />
        </Providers>
      </body>
    </html>
  );
}