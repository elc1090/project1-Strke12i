/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "*.js",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '828px',
      'lg': '1128px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  
}
