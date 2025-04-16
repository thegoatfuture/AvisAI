/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: "#e02424",
        brandDark: "#b91c1c",
        surface: {
          light: "#ffffff",
          dark: "#000000"
        },
        text: {
          light: "#000000",
          dark: "#ffffff"
        }
      },
      animation: {
        "scroll-bar": "scrollGradient 4s ease infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        scrollGradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};