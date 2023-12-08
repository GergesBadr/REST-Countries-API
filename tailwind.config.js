/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        sm: "575px",
      },
      colors: {
        "light-blue": "hsl(209, 23%, 22%)",
        "dark-blue": "hsl(207, 26%, 17%)",
        "very-dark-blue": "hsl(200, 15%, 8%)",
        "dark-gray": "hsl(0, 0%, 52%)",
        "very-light-gray": "hsl(0, 0%, 97%)",
      },
      fontFamily: {
        Nunito: "'Nunito Sans', sans-serif",
      },
      keyframes: {
        loading: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        loading: "loading linear infinite 0.75s",
      },
    },
  },

  plugins: [],
};

// Homepage Items: 14px
// Detail Page: 16px
