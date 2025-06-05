import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "@/lib/prisma";
import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions } from "next-auth";

export const getAuthOptions = (): NextAuthOptions => ({
  adapter: PrismaAdapter(db),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  callbacks: {
    async session({ session, token }) {
      if (session.user && token.sub) session.user.id = token.sub;
      return session;
    },
    async jwt({ token, user }) {
      if (user) token.id = user.id;
      return token;
    },
  },
  events: {
    async error(message) {
      console.error("NextAuth error:", message);
      try {
        await fetch(`${process.env.NEXTAUTH_URL}/api/log-error`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ error: String(message) }),
        });
      } catch (loggingError) {
        console.error("Échec d'envoi du log NextAuth:", loggingError);
      }
    },
  },
  debug: process.env.NODE_ENV === "development",
});