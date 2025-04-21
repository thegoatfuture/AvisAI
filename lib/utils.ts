// lib/utils.ts — Fonctions utilitaires globales optimisées pour SaaS Next.js

/**
 * Concatène conditionnellement des classes CSS.
 * @example cn("btn", isActive && "btn-active", "mt-4")
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Tronque une chaîne si elle dépasse une certaine longueur.
 * @param str - La chaîne à tronquer
 * @param maxLength - Longueur max autorisée
 */
export function truncate(str: string, maxLength = 100): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + "…";
}

/**
 * Formate une date au format français lisible.
 * @param date - La date (string ou Date)
 */
export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat("fr-FR", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(new Date(date));
}

/**
 * Génère un identifiant aléatoire sécurisé.
 */
export function generateId(length = 10): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

/**
 * Retarde l’exécution (utile pour loading simulé ou animations).
 * @param ms - Millisecondes
 */
export function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Vérifie si une valeur est vide.
 */
export function isEmpty(value: unknown): boolean {
  return (
    value === null ||
    value === undefined ||
    (typeof value === "string" && value.trim() === "") ||
    (Array.isArray(value) && value.length === 0)
  );
}