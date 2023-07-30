module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
  rules: {
    'media-feature-range-notation': 'prefix',
    'color-function-notation': 'legacy',
    'font-family-no-missing-generic-family-keyword': null,
  },
}
