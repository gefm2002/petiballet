/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        offwhite: "#F6F3EE",
        ink: "#1C1B1A",
        muted: "#5E5D59",
        brand: "#3A2A2A",
        cta: "#1F4A7A",
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 30px rgba(28, 27, 26, 0.08)",
      },
    },
  },
  plugins: [],
}

