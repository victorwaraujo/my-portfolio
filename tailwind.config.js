/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem', // 160px
        '11xl': '12rem', // 192px
        '12xl': '14rem', // 224px
        '13xl': '16rem', // 256px
      },
    },
  },
  plugins: [],
}

