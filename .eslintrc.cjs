module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
    'jest/globals': true, // чтобы jest глобальные переменные (describe, test, expect) не ругались
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:jest/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'node', 'jest', 'import', 'react-hooks'],
  rules: {
    'node/no-process-env': 'error',

    'no-restricted-syntax': [
      'error',
      {
        selector: '[object.type=MetaProperty][property.name=env]',
        message: 'Use instead import { env } from "lib/env"',
      },
    ],

    // TypeScript
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'warn', // мягче, чем error

    // Import
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
    'import/first': 'error',

    // React
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',

    // React hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    react: {
      version: 'detect', // решает warning про React version
    },
  },
  ignorePatterns: ['node_modules/', 'dist/', '**/*.d.ts', '**/vite.config.ts', '*.config.js'],
  overrides: [
    {
      files: ['webapp/**/*.{ts,tsx}'],
      extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
    },
    {
      files: ['**/*.test.{ts,tsx,js,jsx}'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off', // в тестах можно any
      },
    },
  ],
};
