import NextAuth from "next-auth";
import { authOptions } from "@/lib/authOptions";

console.log("🔍 authOptions at build time:", {
  providers: authOptions.providers?.length,
  secret: authOptions.secret,
  url: process.env.NEXTAUTH_URL,
  db: typeof authOptions.adapter !== "undefined" ? "adapter OK" : "adapter MISSING"
});

const handler = NextAuth(authOptions);

export const GET = handler;
export const POST = handler;