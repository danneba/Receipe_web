/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'define-yellow':'#F5F6EA',
        'define-pink':'#D54215',
        'define-login':'#F15025'
      },
      spacing:{
        '65':'165px',
        '75':'275px',
        '85':'181px',
        '98':'596px',
        '95':'398px'
      },
    },
  },
  plugins: [],
}
