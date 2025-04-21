// app/api/avis/[id]/route.ts
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { db } from "@/lib/prisma";

/**
 * 📥 GET - Récupère un avis spécifique via son ID
 */
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    if (!id) {
      return NextResponse.json(
        { message: "ID de l'avis manquant" },
        { status: 400 }
      );
    }

    const avis = await db.review.findUnique({
      where: { id },
    });

    if (!avis) {
      return NextResponse.json(
        { message: "Avis introuvable" },
        { status: 404 }
      );
    }

    return NextResponse.json(avis);
  } catch (error) {
    console.error("❌ Erreur /api/avis/[id] :", error);
    return NextResponse.json(
      { message: "Erreur serveur" },
      { status: 500 }
    );
  }
}