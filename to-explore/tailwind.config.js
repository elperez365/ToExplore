/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#71B379",
        secondary: "#FFFFF",
        complement: "#B25690",
        contrast: "#34823e",
        contrast2: "#366e3d",
        cardPrimary: "#1D63DC",
        cardFooter: "#0a0a7d",
      },
    },
  },
  plugins: [],
};
// primary = verde acqua
// secondary = giallo scuro
// complement = rosa
// contrast = blue pastello
// contrast2 = ciano
