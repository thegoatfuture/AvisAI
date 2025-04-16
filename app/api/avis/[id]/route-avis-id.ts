
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";

interface Params {
  params: { id: string };
}

export async function DELETE(_: Request, { params }: Params) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const avis = await prisma.avis.findUnique({ where: { id: params.id } });

  if (!avis || avis.userId !== session.user.id) {
    return NextResponse.json({ error: "Not allowed" }, { status: 403 });
  }

  await prisma.avis.delete({ where: { id: params.id } });

  return NextResponse.json({ success: true });
}

export async function PUT(req: Request, { params }: Params) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { content, imageUrl } = await req.json();

  const avis = await prisma.avis.findUnique({ where: { id: params.id } });

  if (!avis || avis.userId !== session.user.id) {
    return NextResponse.json({ error: "Not allowed" }, { status: 403 });
  }

  const updated = await prisma.avis.update({
    where: { id: params.id },
    data: { content, imageUrl },
  });

  return NextResponse.json(updated);
}
