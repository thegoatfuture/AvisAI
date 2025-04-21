// types/next-auth.d.ts

import NextAuth from "next-auth";
import { DefaultSession, DefaultUser } from "next-auth";

/**
 * Module augmentation pour ajouter des champs personnalisés
 * à la session NextAuth (ex: id utilisateur depuis la base).
 */
declare module "next-auth" {
  interface Session {
    user: {
      id: string; // ← Ajout pour gérer l'ID utilisateur dans JWT
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    id: string; // ← Assure que 'user.id' soit toujours accessible
  }
}