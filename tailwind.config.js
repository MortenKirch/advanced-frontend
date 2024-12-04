/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D4654A',
        teal: '#579192',
        sage: '#BBC9AF',
        rose: '#C28D93',
        tan: '#C98F57',
        gold: '#E6C680',
        butter: '#F0E0AE',
        blush: '#F1CDCC',
        white: "#FBF9F5"
      },
      borderRadius: {

        'large': '20px',
      }
    },
  },
  plugins: [],
};