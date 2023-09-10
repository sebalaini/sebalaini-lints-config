module.exports = {
  extends: ['next', './index.js'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/naming-convention': 'off',
    // This rule currently doesn't correctly support React server components
    'react-hooks/rules-of-hooks': 'off',
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
}
