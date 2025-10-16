/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        soft: "0 10px 25px -10px rgba(0,0,0,0.25)"
      },
      borderRadius: {
        xxl: "1.5rem"
      }
    },
  },
  plugins: [],
}