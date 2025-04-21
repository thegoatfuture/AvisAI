export const dynamic = "force-dynamic"; // 🚨 Forcer rendu dynamique pour éviter crash au build

import NextAuth from "next-auth";

console.log("⏳ [NextAuth] Début import dynamique de authOptions...");

let authOptions: any = {};
try {
  const imported = await import('@/lib/authOptions');
  authOptions = imported.authOptions;

  console.log("✅ [NextAuth] authOptions importés :", {
    hasProviders: !!authOptions.providers,
    hasAdapter: !!authOptions.adapter,
    hasSecret: !!authOptions.secret,
  });
} catch (err) {
  console.error("❌ [NextAuth] ERREUR lors de l'import de authOptions :", err);
  throw err;
}

const handler = NextAuth(authOptions);

export const GET = handler;
export const POST = handler;