// Styling lives in src/index.css as design tokens and component classes.
// Tailwind is kept for its base reset and mirrors the same tokens here.
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Syne", "Space Grotesk", "sans-serif"],
        head: ["Space Grotesk", "sans-serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        paper: "#f3eee4",
        ink: "#15130f",
        cobalt: "#1f3fd1",
        vermilion: "#e2421f",
      },
    },
  },
  plugins: [],
};
