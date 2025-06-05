"use client";

import React, { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { LazyMotion, domAnimation } from "framer-motion";
import { ThemeProvider } from "next-themes";
import ErrorBoundary from "./ErrorBoundary";

interface ProvidersProps {
  children: ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <LazyMotion strict features={domAnimation}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          enableColorScheme
        >
          <ErrorBoundary>{children}</ErrorBoundary>
        </ThemeProvider>
      </LazyMotion>
    </SessionProvider>
  );
}