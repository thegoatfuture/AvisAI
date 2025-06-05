// types.d.ts — Typages globaux pour l'app SaaS IA

// 🔐 Variables d'environnement pour NextAuth + Google OAuth
declare global {
    namespace NodeJS {
      interface ProcessEnv {
        GOOGLE_CLIENT_ID: string;
        GOOGLE_CLIENT_SECRET: string;
        DATABASE_URL: string;
        NEXTAUTH_SECRET: string;
        NEXTAUTH_URL: string;
        SENDINBLUE_API_KEY: string;
        SENDINBLUE_LIST_ID: string;
      }
    }
  
    // 🧠 Extensibilité du typage NextAuth
    namespace NextAuth {
      interface Session {
        user: {
          id: string;
          name?: string | null;
          email?: string | null;
          image?: string | null;
        };
      }
  
      interface User {
        id: string;
        name?: string | null;
        email?: string | null;
        image?: string | null;
      }
  
      interface JWT {
        id: string;
      }
    }
  
    // 📦 Typages personnalisés pour les composants et l'app métier
    namespace AppTypes {
      interface User {
        id: string;
        name?: string;
        email?: string;
        image?: string;
        createdAt?: Date;
      }
  
      interface Review {
        id: string;
        content: string;
        rating?: number;
        userId: string;
        createdAt: Date;
      }
    }
  }
  
  export {};