/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        dark: "rgba(59 67 99 / <alpha-value>)",
        score: "rgba(42 70 192 / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
