
# AvisAI 🧠💬 – SaaS IA de génération d'avis clients

AvisAI est un SaaS innovant permettant de générer automatiquement des **avis clients texte et image** à l'aide de l'intelligence artificielle. Conçu pour les professionnels souhaitant booster leur preuve sociale et réputation en ligne.

## 🚀 Fonctionnalités

- 🔐 Authentification via Google (NextAuth)
- 🤖 Génération IA d'avis (texte via GPT, image via DALL·E)
- 📊 Dashboard client sécurisé
- ✍️ CRUD complet des avis
- 🧱 Stack moderne : Next.js 13 App Router, Prisma, Tailwind, OpenAI
- 🌍 Déploiement prêt sur Vercel

## 🧠 Technologies

- Frontend : Next.js 13, TypeScript, TailwindCSS
- Backend : NextAuth, Prisma, PostgreSQL
- IA : OpenAI GPT-3.5 / GPT-4, DALL·E 3
- Base de données : Supabase / Railway / PostgreSQL
- Déploiement : Vercel

## ⚙️ Démarrer en local

```bash
git clone https://github.com/lefuturchèvre/AvisAI.git
cd AvisAI
npm install
cp .env.example .env.local # Remplir avec tes infos OpenAI + DB
npx prisma generate
npm run dev
```

## 📦 .env.local à configurer

```env
DATABASE_URL=postgresql://...
NEXTAUTH_SECRET=xxxxxxxxxxxx
NEXTAUTH_URL=http://localhost:3000
OPENAI_API_KEY=sk-...
GOOGLE_CLIENT_ID=...
GOOGLE_CLIENT_SECRET=...
```

---

## ✨ À venir

- 💳 Intégration Stripe pour abonnements
- 📈 Statistiques d’utilisation
- 🌐 Mode multilingue
- 🛡️ Tableau de bord admin

---

## 🧑‍💻 Auteur

Développé par [@lefuturchèvre](https://github.com/lefuturchèvre)  
Ce projet est personnel, en cours de lancement en tant que **SaaS professionnel**.
