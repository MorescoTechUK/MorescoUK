/** @type {import('tailwindcss').Config} */
export default {
  content: [
    
    "./index.html",
    "./dist/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {},
   
  },
  plugins: [
    require('preline/plugin.js'),
   
  ],
}