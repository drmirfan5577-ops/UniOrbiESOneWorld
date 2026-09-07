import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        arabic: ["Amiri", "serif"],
      },
      colors: {
        brand: {
          emerald: "#00C896",
          crimson: "#DC143C",
          gold: "#FFD700",
          sapphire: "#0066FF",
          rose: "#FF69B4",
          aurora: "#00FFAA",
          diamond: "#F8FAFF",
        },
        glass: {
          white: "rgba(255,255,255,0.85)",
          frost: "rgba(255,255,255,0.6)",
          light: "rgba(255,255,255,0.4)",
          ultra: "rgba(255,255,255,0.95)",
        },
      },
      animation: {
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "ticker": "ticker 30s linear infinite",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "float": "float 4s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "tube-glow": "tubeGlow 1.5s ease-in-out infinite",
        "gradient-shift": "gradientShift 5s ease infinite",
        "slide-in-left": "slideInLeft 0.3s ease-out",
        "slide-in-right": "slideInRight 0.3s ease-out",
        "fade-in": "fadeIn 0.3s ease-out",
        "bounce-subtle": "bounceSubtle 2s ease-in-out infinite",
      },
      keyframes: {
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(0,200,150,0.5), 0 0 20px rgba(0,200,150,0.3)" },
          "50%": { boxShadow: "0 0 20px rgba(0,200,150,0.9), 0 0 60px rgba(0,200,150,0.5)" },
        },
        ticker: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        tubeGlow: {
          "0%, 100%": { opacity: "0.7", textShadow: "0 0 8px currentColor" },
          "50%": { opacity: "1", textShadow: "0 0 20px currentColor, 0 0 40px currentColor" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        slideInLeft: {
          from: { transform: "translateX(-100%)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          from: { transform: "translateX(100%)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        bounceSubtle: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
      backgroundSize: {
        "200": "200% 200%",
        "400": "400% 400%",
      },
      backdropBlur: {
        xs: "2px",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
