/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "slideleft": "slideleft 0.4s linear forwards"
      },
      screens: {
        "max-md-screen": {"max": "768px"}
      },
      keyframes: {
        slideleft: {
          "from": {transform: "translateX(60px)", opacity: "0"},
          "to": {transform: "translateX(0px)", opacity: "1"}
        }
      }
    },
  },
  plugins: [],
}
