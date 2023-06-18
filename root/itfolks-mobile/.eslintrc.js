module.exports = {
    root: true,
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-native/all',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'prettier',
      'prettier/react',
      'prettier/@typescript-eslint',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['react', 'react-native', '@typescript-eslint', 'prettier'],
    env: {
      browser: true,
      node: true,
      es6: true,
      'react-native/react-native': true,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2021,
      sourceType: 'module',
      project: './tsconfig.json',
    },
    rules: {
      'no-console': 'warn',
      'no-debugger': 'warn',
      'no-alert': 'warn',
      'no-unused-vars': 'off', 
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'react/prop-types': 'off',
  
      'react-native/no-color-literals': 'error',
      'react-native/no-raw-text': 'error',
      'react-native/no-inline-styles': 'error',
      'react-native/sort-styles': ['error', 'asc', { ignoreClassNames: false, ignoreStyleProperties: false }],
  
      'prettier/prettier': 'error',
    },
  };