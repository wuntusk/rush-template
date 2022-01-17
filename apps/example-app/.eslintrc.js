// This is a workaround for https://github.com/eslint/eslint/issues/3458
require('@rushstack/eslint-config/patch/modern-module-resolution');

module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    //'plugin:@typescript-eslint/recommended',
    '@rushstack/eslint-config/profile/node',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    '@rushstack/typedef-var': ['off'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false,
        },
      },
    ],
    'no-warning-comments': [
      'warn',
      { terms: ['todo', 'fixme'], location: 'anywhere' },
    ],
  },
  ignorePatterns: ['**/out/**/*.js', '**/out/**/*.ts', '**/generated'],
};
