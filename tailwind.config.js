/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'white': '#F8F8F8',
        'pink': '#F16E7C',
        'black': '#040204',
        'darkgray': '#757575',
        'lightgray': '#9E9DA5',
      },
      fontFamily: {
        chillax: ['"Chillax"', 'sans-serif'],
        lato: ['"Lato"', 'sans-serif'],
      },
      backgroundImage: {
        'custom-bg': "url('/videos/Gen-2 2033350013, pikaso_texttoimage_3, M 5.mp4')",
      },
      animation: {
      },
    },
  },
  variants: {},
  plugins: [],
}
