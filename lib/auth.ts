import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions"; // ✅ Mieux

/**
 * 🔒 Récupère la session serveur avec les options d'authentification centralisées
 */
export async function getSession() {
  return await getServerSession(authOptions);
}