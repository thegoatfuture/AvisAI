export const dynamic = "force-dynamic";

import NextAuth from "next-auth";
import { getAuthOptions } from "@/lib/authOptions";

const handler = NextAuth(getAuthOptions());

export const GET = handler;
export const POST = handler;