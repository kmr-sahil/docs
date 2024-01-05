/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile-lg': '480px',

      'tablet': '640px',

      'tablet-lg': '968px',

      'laptop': '1240px'

    },
    extend: {},
  },
  plugins: [],
}

