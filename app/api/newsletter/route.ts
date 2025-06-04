export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { message: "Email manquant" },
        { status: 400 }
      );
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "Email invalide" },
        { status: 400 }
      );
    }

    // 👉 Ici, connectez-vous à votre fournisseur d'emailing ou base de données
    // Exemple : await fetch(process.env.NEWSLETTER_ENDPOINT!, { ... })
    console.log(`✅ Nouvelle inscription newsletter : ${email}`);

    return NextResponse.json({ message: "Inscription confirmée" });
  } catch (error) {
    console.error("❌ Erreur API /api/newsletter :", error);
    return NextResponse.json(
      { message: "Erreur serveur" },
      { status: 500 }
    );
  }
}
