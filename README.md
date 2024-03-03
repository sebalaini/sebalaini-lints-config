# sebalaini-lints-config

Shared lint configuration package with various base configurations which can be extended by your project's `eslint`, `stylelint` & `prettier` configuration

## What this package is

This package is a complete lint configuration including `eslint`, `stylelint` & `prettier`. These are the base configurations for linting your code.

## Installation

Simply install the repository as a package by running:

```bash
yarn add -D git+https://sebalaini@github.com/sebalaini/sebalaini-lints-config.git
```

In your `package.json` it should appear in your `devDependencies` as:

```json
"sebalaini-lints-config": "git+https://sebalaini@github.com/sebalaini/sebalaini-lints-config.git",
```

## Usage

The Eslint configuration exported by default is Next.js specific and includes TailwindCSS & SCSS lint.

Extend these config in your project's configuration file as needed.

### Base

```js
extends: ['sebalaini-lints-config'],
```

### Stylelint

```js
extends: ['sebalaini-lints-config/stylelintrc'],
```

### Prettier

```js
module.exports = {
  ...require('sebalaini-lints-config/prettierrc'),
}
```
