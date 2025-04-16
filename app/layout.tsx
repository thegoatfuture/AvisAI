// app/layout.tsx
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Layout from "@/components/layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AvisAI | Générateur d'Avis IA",
  description: "Générez des preuves sociales crédibles en un clic grâce à l’IA.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`min-h-screen bg-white dark:bg-black text-black dark:text-white antialiased ${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Layout>{children}</Layout>
        </ThemeProvider>
      </body>
    </html>
  );
}