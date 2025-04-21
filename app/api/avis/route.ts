// app/api/avis/route.ts
export const dynamic = "force-dynamic"; // ✅ Indique à Next.js que cette route ne peut PAS être statique

import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import { db } from "@/lib/prisma";

/**
 * 📥 GET - Récupère les avis de l'utilisateur connecté
 */
export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return NextResponse.json(
        { message: "Non autorisé" },
        { status: 401 }
      );
    }

    const user = await db.user.findUnique({
      where: { email: session.user.email },
      include: {
        reviews: true, // ✅ Récupère les avis associés
      },
    });

    if (!user) {
      return NextResponse.json(
        { message: "Utilisateur introuvable" },
        { status: 404 }
      );
    }

    return NextResponse.json(user.reviews);
  } catch (error) {
    console.error("❌ Erreur API /api/avis :", error);
    return NextResponse.json(
      { message: "Erreur serveur. Veuillez réessayer plus tard." },
      { status: 500 }
    );
  }
}