/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       animation: {
        "spin-slow": "spin 1s linear infinite",   // custom slow spin
        "spin-slower": "spin 1s linear infinite", // even slower if needed
      },
    },
  },
  plugins: [],
}
