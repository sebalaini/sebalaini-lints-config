module.exports = {
  "extends": ["eslint-config-next", "plugin:prettier/recommended", "plugin:tailwindcss/recommended", "prettier"],
  "plugins": ["tailwindcss"],
  "rules": {
    'no-console': 'warn',
    "no-var": "error",
    'no-unused-vars': 'warn',
    "prefer-const": [
      "error", {
        "destructuring": "any",
        "ignoreReadBeforeAssign": false
      }
    ],
    camelcase: [
      1,
      {
        properties: 'always',
      },
    ],
    yoda: ['error', 'never'],
    "tailwindcss/no-custom-classname": 0,
    'prettier/prettier': [
      'error',
      {
        "parser": "flow",
        "printWidth": 10000,
        "endOfLine": "lf",
        "trailingComma": "es5",
        "tabWidth": 2,
        "semi": false,
        "singleQuote": true,
        "jsxSingleQuote": true,
        "singleAttributePerLine": true,
        "bracketSpacing": true,
        "bracketSameLine": false
      },
    ],
  },
  env: {
    es2021: true,
    node: true,
  },
}
