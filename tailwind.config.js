/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#42b883",
        "on-primary": "#213547",
        secondary: "#2f2f2f",
        "on-secondary": "#aac8e4",
        surface: "#1a1a1a",
        "on-surface": "#f1f1f1",
        "surface-b": "rgba(84, 84, 84, 0.48)",
      },
    },
  },
  plugins: [],
};
