module.exports = {
  extends: [
    './index.js',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        format: ['camelCase'],
        selector: ['variable', 'function'],
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
  },
}
