/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "inter-400": ['Inter-400', 'sans-serif'],
      "inter-500": ['Inter-500', 'sans-serif'],
      "inter-600": ['Inter-600', 'sans-serif'],
      "inter-700": ['Inter-700', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}