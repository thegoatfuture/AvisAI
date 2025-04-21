export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { getAuthOptions } from "@/lib/authOptions";
import { db } from "@/lib/prisma";
import { OpenAIStream, OpenAIStreamPayload } from "@/lib/openai";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(getAuthOptions());

    if (!session?.user?.email) {
      return NextResponse.json({ message: "Non autorisé" }, { status: 401 });
    }

    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json({ message: "Prompt manquant" }, { status: 400 });
    }

    const payload: OpenAIStreamPayload = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "Tu es un expert en intelligence artificielle qui génère des avis persuasifs.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      stream: true,
    };

    // ✅ Enregistrement dans la base
    await db.review.create({
      data: {
        content: prompt,
        user: {
          connect: { email: session.user.email },
        },
      },
    });

    const stream = await OpenAIStream(payload);
    return new Response(stream);
  } catch (error) {
    console.error("Erreur dans la route /api/generate:", error);
    return NextResponse.json({ message: "Erreur serveur." }, { status: 500 });
  }
}