/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins"
      },
      colors: {
        "primary": "#6d28d9"
      }
    },
  },
  plugins: [],
}