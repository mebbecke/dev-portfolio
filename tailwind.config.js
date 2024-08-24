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
        plumber: "#1A1A1A", // dark mode background
        ice: "#E0E8F6", // light mode background
        sky: "#4FC3F7", // primary
        darkGray: "#484E53", // titles
        lightGray: "#E1E1E1", // dark mode text
      },
      backgroundImage: {
        pattern: "url(/images/bg.png)",
      },
    },
  },
  plugins: [],
}
