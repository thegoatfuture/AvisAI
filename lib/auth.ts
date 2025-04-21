import { getServerSession } from "next-auth";
import { getAuthOptions } from "@/lib/authOptions";

/**
 * 🔒 Récupère la session serveur avec les options d'authentification centralisées
 */
export async function getSession() {
  return await getServerSession(getAuthOptions());
}