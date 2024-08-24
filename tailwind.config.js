/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      poppins: "Poppins",
    },
    extend: {
      colors: {
        plumber: "#1A1A1A", // dark mode background
        ice: "#E0E8F6", // light mode background
        sky: "#4FC3F7", // primary
        darkGray: "#484E53", // titles
        lightGray: "#E1E1E1", // dark mode text
        darkPurple: "#1C1E53", // light mode text
      },
      // backgroundImage: {
      //   pattern: "url(/images/bg.png)",
      // },
      // boxShadow: {
      //   shape:
      //     "0px 8px 8px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.1), 0px 2px 2px rgba(0, 0, 0, 0.1), 0px 0px 0px 1px rgba(0, 0, 0, 0.1), inset 0px 0px 0px 1px rgba(255, 255, 255, 0.03), inset 0px 1px 0px rgba(255, 255, 255, 0.03)",
      // },
    },
  },
  plugins: [],
}
