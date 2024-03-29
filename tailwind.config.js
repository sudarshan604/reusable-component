/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "square-diagonal": (Math.sqrt(2) * 100).toFixed(2) + "%",
      },
    },
  },
  plugins: [],
};
