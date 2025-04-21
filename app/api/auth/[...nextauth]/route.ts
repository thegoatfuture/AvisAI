export const dynamic = "force-dynamic"; // 🔒 Empêche le build statique de cette route

import NextAuth from "next-auth";
import { getAuthOptions } from "@/lib/authOptions";

// Appel direct de la fonction pour construire authOptions dynamiquement
const handler = NextAuth(getAuthOptions());

export const GET = handler;
export const POST = handler;