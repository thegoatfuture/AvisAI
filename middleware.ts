// middleware.ts — Global Middleware pour sécurisation et redirection dans une app SaaS

import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default withAuth(
  function middleware(req: NextRequest) {
    // Log des tentatives d'accès pour debugging ou audit
    console.log("🛡️ Vérification d'accès à :", req.nextUrl.pathname);
    
    return NextResponse.next();
  },
  {
    pages: {
      signIn: "/login", // Redirection personnalisée si l'utilisateur n'est pas connecté
    },
  }
);

// 🔐 Active le middleware uniquement sur les routes protégées
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/avis/:path*",
    "/profile/:path*",
    "/generate/:path*"
  ],
};