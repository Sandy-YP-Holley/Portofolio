/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        nest: {
          50: '#FFF1F2',
          100: '#FFE4E6',
          200: '#FECDD3',
          300: '#FDA4AF',
          400: '#FB7185',
          500: '#E0234E', // NestJS Crimson Red
          600: '#C7143D',
          700: '#9F0E30',
          800: '#7B0B25',
          900: '#4C0515',
        },
        dark: {
          950: '#07080B',
          900: '#0C0E14',
          850: '#11141D',
          800: '#171B26',
          750: '#1E2331',
          700: '#2A3042',
        },
        slate: {
          850: '#141A29',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', '"Geist Mono"', 'Consolas', 'monospace'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
