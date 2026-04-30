export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        display: ["'Syne'", "sans-serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'Space Mono'", "monospace"],
      },
      colors: {
        steel: {
          50: "#e8f4ff",
          100: "#c8e4ff",
          200: "#8cc6ff",
          300: "#50a8ff",
          400: "#1e8aff",
          500: "#006cd4",
          600: "#0055a8",
          700: "#003d7a",
          800: "#002752",
          900: "#001229",
        }
      },
      animation: {
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(30,138,255,0.3), 0 0 60px rgba(30,138,255,0.1)" },
          "50%": { boxShadow: "0 0 40px rgba(30,138,255,0.6), 0 0 100px rgba(30,138,255,0.2)" },
        }
      }
    }
  },
  plugins: []
}
