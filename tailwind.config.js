/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-color': '#F8B55F',
      },
      borderColor :{
        'primary' : '#3D365C',
        'secondary' : '#7C4585',
        'section' : '#C95792'
      }
    },
    fontFamily: {
      'Women-font' : 'Caveat',
      'woment-font2' : 'Edu QLD Beginner'

    }
  },
  plugins: [],
}

