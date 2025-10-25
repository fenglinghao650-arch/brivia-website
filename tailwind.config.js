/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: "#0B1C2C",
        brandRoyal: "#123B7A",
        brandGold: "#D4AF37",
        brandCream: "#FAF7F2",
      }
    },
  },
  plugins: [],
}
