/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Noto: ["Noto Sans KR", "sans-serif"],
      },
      height: {
        "body-height": "calc(-13.7rem + 100vh)",
      },
      colors: {
        "custom-blue": "#243665",
        "custom-green": "#4C8381",
        "custom-beige": "#F1F1E7",
        "custom-dark-gray": "#A8AABA",
        "custom-light-gray": "#F6F6F6",
        "custom-mint": "#DDE8E7",
        "custom-black": "000231",
      },
    },
  },
  plugins: [],
};
