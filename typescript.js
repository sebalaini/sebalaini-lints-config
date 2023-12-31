const base = require('./index.js')

module.exports = {
  extends: [
      ...base.extends,
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [...base.plugins, '@typescript-eslint'],
  rules: {
    ...base.rules,
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
      },
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
  },
  env: {
    ...base.env
  },
}
