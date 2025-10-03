/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 2s linear infinite",   // slower spin
        "spin-slower": "spin 4s linear infinite", // even slower spin
      },
    },
  },
  plugins: [],
};
