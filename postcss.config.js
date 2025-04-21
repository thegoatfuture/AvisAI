// postcss.config.js — Fix spécial pour Vercel (2025)
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {}, // ✅ Vercel accepte ce format uniquement
    autoprefixer: {},
  },
};