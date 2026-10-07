/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <--- Makes sure Tailwind scans Card.jsx
  ],
  darkMode: "class", // Required for ThemeSwitcher project
  theme: {
    extend: {},
  },
  plugins: [],
}