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
        "body-height": "calc(-9.5rem + 100vh)",
      },
      colors: {
        "custom-blue": "#243665",
        "custom-green": "#4C8381",
        "custom-beige": "#F1F1E7",
        "custom-dark-gray": "#A8AABA",
        "custom-light-gray": "#F7F7F7",
        "custom-mint": "#DDE8E7",
        "custom-black": "#000231",
      },
    },
    backgroundImage: (theme) => ({
      "gradient-background":
        "linear-gradient(107.04deg, rgba(130, 132, 138, 0.5) 38.27%, rgba(130, 132, 138, 0.5) 38.28%, rgba(39, 55, 98, 0.5) 113.7%), url('https://images.unsplash.com/photo-1541795795328-f073b763494e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80');",
      "notice-background":
        "linear-gradient(107.04deg, rgba(130, 132, 138, 0.5) 38.27%, rgba(130, 132, 138, 0.5) 38.28%, rgba(39, 55, 98, 0.5) 113.7%), url('https://images.unsplash.com/photo-1614194076674-0598e6dd5703?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2571&q=80');",
    }),
    content: ["./node_modules/flowbite/**/*.js"],
  },
  plugins: [require("flowbite/plugin")],
};
