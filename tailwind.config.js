/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./{src,public}/**/*.{html,js,ts,jsx,tsx}", "./src/Pages/*.tsx", "./src/Components/*.tsx", {raw: '<div class=min-h-screen', extension: 'html' }],
  theme: {
  extend: {},
  },
  plugins: [
  ]
}