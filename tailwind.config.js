/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "#0c0c0c",
          night: "#0b1416",
          deep: "#102226",
          slate: "#3c4a4e",
          sea: "#456c75",
          teal: "#1f8fa6",
          tealdark: "#2d718b",
          sage: "#297b77",
          sky: "#3ba3e8",
          cream: "#cfcab9",
          paper: "#f4f2ec",
          mist: "#a5a5aa",
          muted: "#869199",
          blush: "#f0c9f7",
          mint: "#c9f2e7",
          pass: "#4ade80",
        },
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', "Segoe UI", "Arial", "sans-serif"],
        display: ['"Bricolage Grotesque"', '"IBM Plex Sans"', "sans-serif"],
        mono: ['"JetBrains Mono"', "Consolas", "monospace"],
      },
      backgroundImage: {
        "hero-bg": "url('./assets/Homepage.jpg')",
      },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        scan: { "0%": { transform: "translateY(-10%)" }, "100%": { transform: "translateY(1100%)" } },
        blink: { "0%, 49%": { opacity: 1 }, "50%, 100%": { opacity: 0 } },
        float: { "0%, 100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-10px)" } },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        scan: "scan 7s cubic-bezier(.5,0,.5,1) infinite",
        blink: "blink 1s steps(1) infinite",
        float: "float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
