/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  "./*.html"],
  theme: {
    extend: {
      fontFamily: {
        'bai': ['Bai Jamjuree', 'sans-serif'],
        'Rubik': ['Rubik', 'sans-serif']
      },
    },
  },
  plugins: [require("daisyui")],
}

