import { heroui } from '@heroui/theme'
import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [
    heroui({
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {
            primary: {
              50: '#fefce8',
              100: '#fef9c3',
              200: '#fef08a',
              300: '#fde047',
              400: '#facc15',
              500: '#eab308',
              600: '#ca8a04',
              700: '#a16207',
              800: '#854d0e',
              900: '#713f12',
              foreground: '#000000',
              DEFAULT: '#facc15',
            },
          }, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {
            primary: {
              50: '#fefce8',
              100: '#fef9c3',
              200: '#fef08a',
              300: '#fde047',
              400: '#facc15',
              500: '#eab308',
              600: '#ca8a04',
              700: '#a16207',
              800: '#854d0e',
              900: '#713f12',
              foreground: '#000000',
              DEFAULT: '#facc15',
            },
          }, // dark theme colors
        },
        // ... custom themes
      },
    }),
  ],
} satisfies Config
