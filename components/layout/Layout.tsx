"use client";

import React from "react";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      className={cn(
        "bg-white dark:bg-black text-black dark:text-white min-h-screen antialiased",
        inter.className
      )}
    >
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Header />
        <main>{children}</main>
      </ThemeProvider>
    </div>
  );
}
