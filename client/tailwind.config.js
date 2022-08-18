/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    borderWidth: {
      '1': '1px'
    },
    fontFamily: {
      'charter': ['Charter'],
      'poppins': ['Poppins', 'sans-serif'],
      'silkscreen': ['Silkscreen', 'cursive'],
      'quicksand': ['Quicksand', 'sans-serif'],
      'karla': ['Karla', 'sans-serif'],
    },
    extend: {
      gridTemplateColumns: {
        'sky': '7%  67% 26%'
      },
      colors: {
        'txt': '#f2f2f2',
        'col-txt': '#292929'
      },
    },
  },
  plugins: [],
}
