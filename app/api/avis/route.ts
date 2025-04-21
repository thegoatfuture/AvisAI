export const dynamic = "force-dynamic"; // ✅ Rend la route dynamique (Next.js App Router)

import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { getAuthOptions } from "@/lib/authOptions";
import { db } from "@/lib/prisma";

/**
 * 📥 GET - Récupère les avis de l'utilisateur connecté
 */
export async function GET() {
  try {
    const session = await getServerSession(getAuthOptions());

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