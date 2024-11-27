/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Oswald", "serif"],
        paragraph: ["EB Garamond", "serif"],
      },
      colors: {
        // background: "#17153B",
        background: "#070F2B",
        primary: "#2E236C",
        secondary: "#433D8B",
        tertiary: "#C8ACD6",
        textPrimary: "#A0153E",
        secondaryText: "#FB773C",
      },
    },
  },
  plugins: [],
};
