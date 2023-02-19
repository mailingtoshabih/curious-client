/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Figtree'],
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
