import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: config.files ?? ['**/*.{ts,tsx}'],
  })),
  // .astro のパーサー (astro-eslint-parser + @typescript-eslint/parser) と
  // extraFileExtensions は eslint-plugin-astro の recommended が内包しているため
  // ここでは指定しない
  ...eslintPluginAstro.configs.recommended,
  {
    ignores: ['dist/', 'node_modules/', '.astro/'],
  },
];
