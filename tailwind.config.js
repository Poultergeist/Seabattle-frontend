const scrollbar = require('tailwind-scrollbar');
const plugin = require('tailwindcss/plugin');
const glowPreset = require('./tailwind.glow.preset');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  presets: [glowPreset],
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
    './node_modules/@heroui/**/*.{js,ts,jsx,tsx}',
    './node_modules/.pnpm/@heroui+*/**/*.{js,ts,jsx,tsx}', // for pnpm
  ],
  theme: {
    extend: {
      glow: {
        md: '0 0 14px var(--tw-glow-color)',
      },
      glowColor: {
        bg: 'hsl(var(--bg))',
        'dark-bg': 'hsl(var(--dark-bg))',
        'light-bg': 'hsl(var(--light-bg))',
        border: 'hsl(var(--border))',

        primary: 'hsl(var(--primary))',
        'primary-dark': 'hsl(var(--primary-dark))',

        secondary: 'hsl(var(--secondary))',
        'secondary-dark': 'hsl(var(--secondary-dark))',

        accent: 'hsl(var(--accent))',
        'accent-light': 'hsl(var(--accent-light))',
        'accent-dark': 'hsl(var(--accent-dark))',

        danger: 'hsl(var(--danger))',
        'danger-dark': 'hsl(var(--danger-dark))',

        warning: 'hsl(var(--warning))',
        'warning-dark': 'hsl(var(--warning-dark))',

        success: 'hsl(var(--success))',
        'success-dark': 'hsl(var(--success-dark))',

        info: 'hsl(var(--info))',
        'info-dark': 'hsl(var(--info-dark))',

        foreground: 'hsl(var(--text-foreground))',
        'muted-foreground': 'hsl(var(--text-muted-foreground))',
      },
      colors: {
        bg: 'hsl(var(--bg) / <alpha-value>)',
        'dark-bg': 'hsl(var(--dark-bg) / <alpha-value>)',
        'light-bg': 'hsl(var(--light-bg) / <alpha-value>)',
        border: 'hsl(var(--border) / <alpha-value>)',
        
        primary: 'hsl(var(--primary) / <alpha-value>)',
        'primary-dark': 'hsl(var(--primary-dark) / <alpha-value>)',

        secondary: 'hsl(var(--secondary) / <alpha-value>)',
        'secondary-dark': 'hsl(var(--secondary-dark) / <alpha-value>)',

        accent: 'hsl(var(--accent) / <alpha-value>)',
        'accent-light': 'hsl(var(--accent-light) / <alpha-value>)',
        'accent-dark': 'hsl(var(--accent-dark) / <alpha-value>)',

        danger: 'hsl(var(--danger) / <alpha-value>)',
        'danger-dark': 'hsl(var(--danger-dark) / <alpha-value>)',

        warning: 'hsl(var(--warning) / <alpha-value>)',
        'warning-dark': 'hsl(var(--warning-dark) / <alpha-value>)',

        success: 'hsl(var(--success) / <alpha-value>)',
        'success-dark': 'hsl(var(--success-dark) / <alpha-value>)',

        info: 'hsl(var(--info) / <alpha-value>)',
        'info-dark': 'hsl(var(--info-dark) / <alpha-value>)',

        foreground: 'hsl(var(--text-foreground) / <alpha-value>)',
        'muted-foreground': 'hsl(var(--text-muted-foreground) / <alpha-value>)',
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
      boxShadow: {
        glow: '0 0 10px var(--tw-shadow-color, var(--primary))'
      }
    },
  },
  plugins: [
    scrollbar,
    require('tailwindcss-animate'),
    require('tailwindcss-gradient-border'),
  ],
};
