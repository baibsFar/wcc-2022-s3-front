/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html, js}"],
  theme: {
    colors: {
      'orange': ' #F49338',
      'noir': '#292726',
      'gris': '#F7F5F6',
      'jaune': '#FFCE31'
    },
    extend: {
      fontFamily: {
        'sans': 'Okine Regular, Okine Medium, sans-serif'
      },
      fontSize: {
        'sm': '12px',
        'base': '14px'
      }
    }
  },
  plugins: [],
}
