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

    // 👉 Inscription via Sendinblue
    const apiKey = process.env.SENDINBLUE_API_KEY;
    const listId = process.env.SENDINBLUE_LIST_ID;

    if (!apiKey || !listId) {
      console.error(
        "❌ Configuration Sendinblue manquante: ajoutez SENDINBLUE_API_KEY et SENDINBLUE_LIST_ID"
      );
    } else {
      const res = await fetch("https://api.sendinblue.com/v3/contacts", {
        method: "POST",
        headers: {
          "api-key": apiKey,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email,
          listIds: [Number(listId)],
          updateEnabled: true,
        }),
      });

      if (!res.ok) {
        console.error(
          "❌ Erreur Sendinblue:",
          res.status,
          await res.text()
        );
        return NextResponse.json(
          { message: "Erreur lors de l'inscription" },
          { status: 500 }
        );
      }

      console.log(`✅ Nouvelle inscription newsletter : ${email}`);
    }

    return NextResponse.json({ message: "Inscription confirmée" });
  } catch (error) {
    console.error("❌ Erreur API /api/newsletter :", error);
    return NextResponse.json(
      { message: "Erreur serveur" },
      { status: 500 }
    );
  }
}
