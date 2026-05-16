import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#eaedf4',
          100: '#cdd7e4',
          200: '#a3b5ce',
          300: '#6f8cb2',
          400: '#466894',
          500: '#2d4b73',
          600: '#233b5c',
          700: '#1c2f4a',
          800: '#17273d',
          900: '#0A1628', // Core Deep Navy
          950: '#050c18',
        },
        gold: {
          50: '#fbf9f2',
          100: '#f5efe0',
          200: '#ead9be',
          300: '#dcbe91',
          400: '#C9A84C', // Core Warm Gold
          500: '#bc8a31',
          600: '#a16d25',
          700: '#865421',
          800: '#6f4421',
          900: '#5a381f',
          950: '#341d0e',
        },
        burgundy: {
          50: '#fdf3f4',
          100: '#fae3e6',
          200: '#f4cdd2',
          300: '#ebab14',
          400: '#df828e',
          500: '#ce5768',
          600: '#b63d4f',
          700: '#902e3b', // Core Muted Burgundy
          800: '#7a2935',
          900: '#672630',
          950: '#371017',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.7s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
