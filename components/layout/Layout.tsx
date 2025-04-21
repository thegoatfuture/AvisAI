import "./globals.css";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AvisAI – Générateur d'avis IA",
  description: "Boostez votre crédibilité grâce à l'IA. Créez et gérez des témoignages clients automatiquement.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>
        <Providers>
          {children}
          <SpeedInsights /> {/* Pour tracking Vercel si tu déploies dessus */}
        </Providers>
      </body>
    </html>
  );
}