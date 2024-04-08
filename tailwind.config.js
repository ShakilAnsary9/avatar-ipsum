/** @type {import('tailwindcss').Config}*/
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        pngbg:
          "url(https://assets-global.website-files.com/636496d3f0ebfdaba9784655/65a759bb8d34c9b08dddfaff_transparent-background.svg)",
      },
    },
  },
  plugins: [],
};
