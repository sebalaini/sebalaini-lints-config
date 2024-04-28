[![GitHub release](https://img.shields.io/github/release/sebalaini/sebalaini-lints-config?include_prereleases=&sort=semver&color=blue)](https://github.com/sebalaini/sebalaini-lints-config/releases/)
[![License](https://img.shields.io/badge/License-MIT-blue)](#license)
[![issues - sebalaini-lints-config](https://img.shields.io/github/issues/sebalaini/sebalaini-lints-config)](https://github.com/sebalaini/sebalaini-lints-config/issues)

---

# sebalaini-lints-config

Shared lint configuration package with various base configurations which can be extended by your project's `eslint`, `stylelint` & `prettier` configuration

## What this package is

This package is a complete lint configuration including `eslint`, `stylelint` & `prettier`. These are the base configurations for linting your code.

<br>

## Installation

Simply install the package by running:

```bash
yarn add -D @sebalaini/sebalaini-lints-config
```

alternatively you can use `npm` or your preferred package manager.

<br>

## Usage

By default, the package exports the Eslint `eslint-config-next` configuration, extend these in your project's configuration file as needed.

### Eslint

The Eslint configuration exported by default includes `eslint-config-next` `prettier` & `tailwindcss`.

Add the below code to your `.eslintrc.js` file.

```js
extends: ['@sebalaini/sebalaini-lints-config'],
```

or 

```js
extends: ['@sebalaini/sebalaini-lints-config/next'],
```

This config includes specific Next.js & TypeScript rules.

<br>

### Stylelint

Add the below code to your `.stylelintrc.js` file.

```js
extends: ['@sebalaini/sebalaini-lints-config/stylelintrc'],
```

<br>

### Prettier

Add the below code to your `.prettierrc.js` file.

```js
module.exports = {
  ...require('@sebalaini/sebalaini-lints-config/prettierrc'),
}
```

## License

Released under [MIT](/LICENSE) by [@sebalaini](https://github.com/sebalaini).
