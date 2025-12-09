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
  plugins: [
    scrollbar,
    require('tailwindcss-animate'),
    require('tailwindcss-gradient-border'),
  ],
};
