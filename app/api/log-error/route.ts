export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    console.error("🔴 Log d'erreur reçu:", data);
    return NextResponse.json({ message: "Erreur enregistrée" });
  } catch (error) {
    console.error("❌ Erreur dans /api/log-error :", error);
    return NextResponse.json(
      { message: "Erreur serveur" },
      { status: 500 }
    );
  }
}
