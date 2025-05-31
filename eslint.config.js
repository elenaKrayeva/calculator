import { defineConfig } from 'eslint/config';
import globals from 'globals';

export default defineConfig([
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error',
      semi: 'error',
      quotes: ['error', 'single'],
    },
  },
]);
