/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'minimum': {'min': '575px', 'max': '1200px'},
        'burger': {'min': '320px', 'max': '575px'},
        'cardsm':{'min': '320px', 'max': '767px'},
        'cardmd':{'min': '767px', 'max': '1280px'},
        'xs': {'min': '320px', 'max': '576px'},
        'sm': {'min': '576px', 'max': '767px'},
        'md': {'min': '767px', 'max': '1280px'},
        'lg': {'min': '1280px', 'max': '1440px'},
        'xl': {'min': '1280px','max':'2700px'},

      },
    },
  },
  plugins: [],
}
