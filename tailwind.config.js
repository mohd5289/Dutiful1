/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        circular: ["Circular Std", "sans-serif"],
        recoleta: ["Recoleta", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "dutiful-color": "#532F82",
        "menu-color": "#686868",
        "login-button-color": "#603F8B",
      },
    },
  },
  plugins: [],
};
