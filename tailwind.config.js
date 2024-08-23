/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: "Poppins",
    },
    extend: {
      colors: {
        sky: "#4FC3F7", // primary
        plumber: "#1A1A1A", // background
        darkGray: "#484E53", // titles
        lightGray: "#E1E1E1", // text on dark mode
      },
      backgroundImage: {
        pattern: "url(/images/bg.png)",
      },
    },
  },
  plugins: [],
}
