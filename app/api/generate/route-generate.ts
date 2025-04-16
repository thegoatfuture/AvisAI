
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    // Génération du texte
    const textResponse = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // Remplace par "gpt-4" si dispo
      messages: [
        {
          role: "user",
          content:
            "Rédige un avis positif et convaincant d’un client satisfait par un service professionnel. Utilise un ton chaleureux, authentique, entre 30 et 60 mots.",
        },
      ],
    });

    const content = textResponse.choices[0].message.content?.trim();

    if (!content) {
      return NextResponse.json({ error: "No content generated" }, { status: 500 });
    }

    // Génération de l'image via DALL·E
    const imageResponse = await openai.images.generate({
      model: "dall-e-3",
      prompt:
        "Portrait d’un client heureux et souriant dans un cadre professionnel, style illustration réaliste et lumineuse, fond flouté.",
      size: "1024x1024",
      n: 1,
    });

    const imageUrl = imageResponse.data[0].url;

    // Enregistrement dans la BDD
    const avis = await prisma.avis.create({
      data: {
        userId: session.user.id,
        content,
        imageUrl,
      },
    });

    return NextResponse.json(avis, { status: 201 });
  } catch (error) {
    console.error("Erreur IA:", error);
    return NextResponse.json({ error: "Erreur génération IA" }, { status: 500 });
  }
}
