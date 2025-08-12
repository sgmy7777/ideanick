module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'node'],
  rules: {
    'node/no-process-env': 'error',
    'no-restricted-syntax': [
      'error',
      {
        selector: '[object.type=MetaProperty][property.name=env]',
        message: 'Use instead import { env } from "lib/env"',
      },
    ],
    // Настройки для TypeScript
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off', // Полностью отключаем non-null assertion

    // Общие настройки
    'no-console': ['warn', { allow: ['warn', 'error'] }], // Разрешаем console.warn и console.error
    'no-new': 'off',
    // React-специфичные (для webapp)
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off', // Не требовать указания типов возврата
    '@typescript-eslint/no-explicit-any': 'warn', // Предупреждать об any
    'react-hooks/rules-of-hooks': 'error', // Проверка правил хуков
    'react-hooks/exhaustive-deps': 'warn', // Проверка зависимостей эффектов
  },
  ignorePatterns: ['node_modules/', 'dist/', '**/*.d.ts', '**/vite.config.ts'],
  overrides: [
    {
      files: ['webapp/**/*.{ts,tsx}'],
      extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ],
};
