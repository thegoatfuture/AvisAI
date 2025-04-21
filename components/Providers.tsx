"use client";

import { SessionProvider } from "next-auth/react";
import { LazyMotion, domAnimation } from "framer-motion";
import { ThemeProvider } from "next-themes";
import React from "react";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <LazyMotion features={domAnimation}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </LazyMotion>
    </SessionProvider>
  );
}