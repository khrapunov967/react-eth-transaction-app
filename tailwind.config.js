/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "slideup": "slideup 0.7s ease-out forwards",
        "slideleft": "slideleft 0.7s ease-out forwards",
        "slideright": "slideright 0.7s ease-out forwards",
      },
      screens: {
        "max-md-screen": {"max": "768px"},
        "max-sm-screen": {"max": "312px"}
      },
      keyframes: {
        slideup: {
          "0%": {transform: "translateY(30px)", opacity: "0"},
          "100%": {transform: "translateY(0px)", opacity: "1"}
        },
        slideleft: {
          "from": {transform: "translateX(60px)", opacity: "0"},
          "to": {transform: "translateX(0px)", opacity: "1"}
        },
        slideright: {
          "from": {transform: "translateX(-60px)", opacity: "0"},
          "to": {transform: "translateX(0px)", opacity: "1"}
        },
      }
    },
  },
  plugins: [],
}
