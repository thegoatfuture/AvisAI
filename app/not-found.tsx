import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-zinc-950 text-black dark:text-white px-6">
      <h1 className="text-5xl font-extrabold mb-4">Page introuvable</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8 text-center">
        Oups ! La page que vous recherchez n'existe pas.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-lg bg-marque text-white hover:bg-red-600 transition"
      >
        Retour à l'accueil
      </Link>
    </main>
  );
}
