/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': ['url("/images/BG.png")']
      },
      colors: {
        gray: {
          '900': '#0B1D26',
        },
        yellow: {
          '900': '#FBD784'
        }
      }
    },
  },
  plugins: [],
}