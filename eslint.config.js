// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from '@eslint/js';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';
import tailwind from 'eslint-plugin-tailwindcss';
import fsdMessages from '@feature-sliced/eslint-plugin-messages';
import { FlatCompat } from '@eslint/eslintrc';
import i18nextPlugin from 'eslint-plugin-i18next';

const compat = new FlatCompat();

export default tseslint.config({ ignores: ['dist'] }, {
  extends: [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    ...compat.extends(
      '@feature-sliced/eslint-config/rules/import-order/experimental'
    ),
    ...compat.extends('@feature-sliced/eslint-config/rules/public-api'),
    ...compat.extends('@feature-sliced/eslint-config/rules/layers-slices'),
    ...tailwind.configs['flat/recommended'],
  ],
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    prettier: prettier,
    i18next: i18nextPlugin,
    tailwindcss: tailwind,
    react: reactPlugin,
  },
  settings: {
    tailwindcss: {
      callees: ['cn', 'clsx', 'twMerge'],
      config: './tailwind.config.js',
      cssFiles: [
        '**/*.css',
        '!**/node_modules',
        '!**/.*',
        '!**/dist',
        '!**/build',
      ],
      cssFilesRefreshRate: 5_000,
      removeDuplicates: true,
      skipClassAttribute: false,
      whitelist: [],
      tags: [],
      classRegex: '^class(Name)?$|^extraClass$',
    },
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'prettier/prettier': 'warn',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/jsx-pascal-case': 'error', // for component names
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-undef': 'error',
    // 👇 this one catches bad prop names (like camel-case)
    'react/no-unknown-property': 'error',
    // 'import/no-internal-modules': 'off', // Disables the import check of the type << import './styles/styles.css'; >>
    'i18next/no-literal-string': [
      'error',
      {
        markupOnly: true,
        ignoreAttribute: [
          'data-testid',
          'to',
          'key',
          'id',
          'type',
          'role',
          'src',
          'alt',
          'href',
        ],
      },
    ],
    //eslint-plugin-tailwindcss rules: https://github.com/francoismassart/eslint-plugin-tailwindcss/tree/master/docs/rules

    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/enforces-negative-arbitrary-values': 'warn',
    'tailwindcss/enforces-shorthand': 'warn',
    'tailwindcss/no-arbitrary-value': 'warn',
    'tailwindcss/no-contradicting-classname': 'warn',
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/no-unnecessary-arbitrary-value': 'warn',
    'eol-last': ['warn', 'always'],
  },
}, // FSD
{
  files: ['**/*.{ts,tsx}'],
  plugins: {
    '@feature-sliced/messages': fsdMessages,
  },
  processor: '@feature-sliced/messages/fs',
  rules: {
    'import/order': 'error',
    'import/no-internal-modules': 'off', // Disables the import check of the type << import './styles/styles.css'; >>
    'boundaries/element-types': 'error',
  },
}, storybook.configs["flat/recommended"]);
