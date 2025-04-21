export const dynamic = "force-dynamic";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";
import ListeAvis, { Avis } from "@/components/ListeAvis";
import { motion } from "framer-motion";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  let avis: Avis[] = [];

  if (session?.user?.email) {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/avis`, {
        headers: {
          Cookie: "", // nécessaire si tu fais une requête serveur vers toi-même
        },
        cache: "no-store",
      });

      if (res.ok) {
        avis = await res.json();
      } else {
        console.error("Échec de la récupération des avis:", res.statusText);
      }
    } catch (error) {
      console.error("Erreur de requête vers /api/avis:", error);
    }
  }

  return (
    <main className="p-6 space-y-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold"
      >
        Bienvenue, {session?.user?.name || "Utilisateur"}
      </motion.h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">🧾 Vos derniers avis :</h2>
        <ListeAvis avis={avis} />
      </section>
    </main>
  );
}