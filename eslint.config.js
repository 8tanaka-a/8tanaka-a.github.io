import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';
import astroParser from 'astro-eslint-parser';
import tsParser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: config.files ?? ['**/*.{ts,tsx}'],
  })),
  ...eslintPluginAstro.configs.recommended,
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.astro'],
      },
    },
  },
  {
    ignores: ['dist/', 'node_modules/', '.astro/'],
  },
];
