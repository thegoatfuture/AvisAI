"use client";

import "@/styles/globals.css"; // 💡 Import global obligatoire (ex: Tailwind, typographie, reset, etc.)

import React from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import PageWrapper from "@/components/PageWrapper";
import Providers from "@/components/Providers";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");

  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="bg-white dark:bg-black text-black dark:text-white transition-colors duration-500">
        <Providers>
          <Header />
          <div className={`flex min-h-screen`}>
            {isDashboard && <Sidebar />}
            <PageWrapper>{children}</PageWrapper>
          </div>
        </Providers>
      </body>
    </html>
  );
}
