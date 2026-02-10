const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    glow: {
      DEFAULT: '0 0 10px var(--tw-glow-color)',
      sm: '0 0 6px var(--tw-glow-color)',
      lg: '0 0 18px var(--tw-glow-color)',
    },
    glowColor: {},
  },

  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      // glow / glow-sm / glow-lg
      matchUtilities(
        {
          glow: (value) => ({
            boxShadow: value,
          }),
        },
        { values: theme('glow') }
      );

      // glow-primary / glow-danger / etc
      matchUtilities(
        {
          glow: (value) => ({
            '--tw-glow-color': value,
          }),
        },
        { values: theme('glowColor') }
      );
    }),
  ],
};