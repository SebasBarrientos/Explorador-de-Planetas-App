import { heroui } from '@heroui/theme';
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(button|modal|ripple|spinner).js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        // Fondo psicodélico inspirado en el espacio
        'space-psychedelic': 'radial-gradient(ellipse at bottom, #0D1B2A 0%, #1B263B 60%, #415A77 100%)',
      },
      colors: {
        // Colores cósmicos para acentos y detalles
        'cosmic-purple': '#BEF264',
        'cosmic-blue': '#0D1B2A',
        'cosmic-light': '#778DA9',
      },
      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      // },
    },
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      dark: {
        colors: {
          primary: {
            DEFAULT: "#BEF264",
            foreground: "#000000",
          },
          focus: "#BEF264",
        },
      },
    },
  }),
  ],
} satisfies Config;
