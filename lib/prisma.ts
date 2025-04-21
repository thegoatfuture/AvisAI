// lib/prisma.ts — Initialisation client Prisma optimisée pour Next.js App Router

import { PrismaClient } from "@prisma/client";

declare global {
  // Permet la persistance du client Prisma entre les reloads en dev
  var prisma: PrismaClient | undefined;
}

// ✅ Utilise une instance partagée côté dev pour éviter les multiples connexions
export const db =
  global.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") global.prisma = db;