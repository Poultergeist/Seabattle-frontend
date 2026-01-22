const scrollbar = require('tailwind-scrollbar');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
    './node_modules/@heroui/**/*.{js,ts,jsx,tsx}',
    './node_modules/.pnpm/@heroui+*/**/*.{js,ts,jsx,tsx}', // for pnpm
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        'dark-bg': 'var(--dark-bg)',
        'light-bg': 'var(--light-bg)',
        border: 'var(--border)',

        primary: 'var(--primary)',
        'primary-dark': 'var(--primary-dark)',

        secondary: 'var(--secondary)',
        'secondary-dark': 'var(--secondary-dark)',

        accent: 'var(--accent)',
        'accent-dark': 'var(--accent-dark)',

        danger: 'var(--danger)',
        'danger-dark': 'var(--danger-dark)',

        warning: 'var(--warning)',
        'warning-dark': 'var(--warning-dark)',

        success: 'var(--success)',
        'success-dark': 'var(--success-dark)',

        info: 'var(--info)',
        'info-dark': 'var(--info-dark)',

        foreground: 'var(--text-foreground)',
        'muted-foreground': 'var(--text-muted-foreground)',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
      },
      fontSize: {
        h1: '28px',
        '3.5xl': '40px',
        '3xl': '34px',
        '2.5xl': '28px',
        '2xs': '0.625rem',
        '3xs': '0.5rem',
      },

    },
  },
  plugins: [
    scrollbar,
    require('tailwindcss-animate'),
    require('tailwindcss-gradient-border'),
  ],
};
