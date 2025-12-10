const scrollbar = require('tailwind-scrollbar');
const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
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

        danger: 'var(--danger)',
        'danger-dark': 'var(--danger-dark)',

        warning: 'var(--warning)',
        'warning-dark': 'var(--warning-dark)',

        success: 'var(--success)',
        'success-dark': 'var(--success-dark)',

        info: 'var(--info)',
        'info-dark': 'var(--info-dark)',

        'text-foreground': 'var(--text-foreground)',
        'text-muted-foreground': 'var(--text-muted-foreground)',
      },
    },
  },
  plugins: [
    scrollbar,
    require('tailwindcss-animate'),
    require('tailwindcss-gradient-border'),
  ],
};
