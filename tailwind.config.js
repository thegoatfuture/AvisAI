/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{css,js,ts,jsx,tsx}", // ← 🧠 INDISPENSABLE pour détecter globals.css
  ],
  theme: {
    extend: {
      colors: {
        marque: "#e02424",
        marqueDark: "#b91c1c",
        surface: {
          light: "#ffffff",
          dark: "#000000",
          muted: "#f5f5f5",
        },
        text: {
          light: "#0f0f0f",
          dark: "#fafafa",
        },
        accent: {
          light: "#f87171",
          dark: "#7f1d1d",
        },
      },
      animation: {
        "scroll-bar": "scrollGradient 4s ease infinite",
        "spin-slow": "spin 8s linear infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        scrollGradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};