/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mona: ["Mona Sans", ...fontFamily.sans],
      },
      animation: {
        'spin-slow': 'spin 100s linear infinite',
      },

    },
  },
  plugins: [
    require('tailwind-children'),
  ],
}

