/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "420px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        ink: "#0D1928",
        "ink-2": "#13233A",
        paper: "#F5F6F3",
        blueprint: "#2B5CD9",
        "blueprint-deep": "#1E3F96",
        amber: "#DFA23A",
        mist: "#9AACC4",
        pen: "#42526A",
        hairline: "#DDE2E9",
      },
      fontFamily: {
        display: ["Archivo", "system-ui", "sans-serif"],
        body: ["'IBM Plex Sans'", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
      maxWidth: {
        page: "72rem",
      },
    },
  },
  plugins: [],
};
