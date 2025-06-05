# 🚀 AvisAI — Le Générateur d’Avis IA le Plus Crédible du Marché

Bienvenue sur **AvisAI**, une solution SaaS alimentée par l'IA pour générer, gérer et publier des témoignages clients percutants en un clic. Idéal pour les startups, freelances et e-commerçants.

---

## 🌟 Fonctionnalités clés

- ✅ Génération d'avis crédibles & contextualisés via IA
- 📊 Dashboard clair avec graphiques & tendances
- ✨ Intégration facile sur tout site (React, HTML, iframe…)
- 🔒 Authentification sécurisée via Google
- 🎨 UI moderne, animations fluides (Framer Motion + Tailwind)

---

## ⚙️ Stack technique

- **Next.js 14** (App Router)
- **Prisma ORM** + **PostgreSQL**
- **NextAuth** (auth Google OAuth)
- **Framer Motion** (animations pro)
- **Recharts** / **Chart.js** (graphiques dynamiques)
- **Supabase** (hébergement base de données)
- **Tailwind CSS** + **Dark mode**

---

## 🚀 Installation

```bash
git clone https://github.com/tonuser/avisai.git
cd avisai
npm install

# Copiez l'exemple de configuration puis remplissez vos variables
cp .env.example .env
# Ajoutez dans `.env` vos identifiants Google, l'URL de votre base
# PostgreSQL, la clé OpenAI...
npx prisma migrate dev
```

### Configuration

Le fichier `.env` doit contenir :

```env
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
DATABASE_URL=
OPENAI_API_KEY=
NEXTAUTH_SECRET=
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEWSLETTER_ENDPOINT=
```

### Utilisation

Pour démarrer le serveur de développement :

```bash
npm run dev
```

Pour construire et lancer l'application en production :

```bash
npm run build
npm start
```
