/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        primary: "#7371fc",
        primaryVariant: "#a594f9",
        secondary: "",
        secondaryVariant: "",
        backgroundLight: "#e5e5e5",
        backgroundDark: "#131316",
        surfaceLight: "#fff",
        surfaceDark: "#26262c",
        textLight1: "#000",
        textLight2: "#e5e5e5",
        textDarkt1: "#fff",
        textDarkt2: "#e5e5e5",
      },
    },
  },
  plugins: [],
};
