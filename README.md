# sebalaini-lints-config

Shared lint configuration package with various base configurations which can be extended by your project's `eslint`, `stylelint` & `prettier` configuration

## What this package is

This package is a complete lint configuration including `eslint`, `stylelint` & `prettier`. These are the base configurations for linting your code.

<br>

## Installation

Simply install the repository as a package by running:

```bash
yarn add -D git+https://sebalaini@github.com/sebalaini/sebalaini-lints-config.git
```

In your `package.json` it should appear in your `devDependencies` as:

```json
"sebalaini-lints-config": "git+https://sebalaini@github.com/sebalaini/sebalaini-lints-config.git",
```
<br>

## Usage

By default, the package exports the Eslint `eslint-config-next` configuration, extend these in your project's configuration file as needed.

### Eslint

The Eslint configuration exported by default includes `eslint-config-next` `prettier` & `tailwindcss`.

Add the below code to your `.eslintrc.js` file.

```js
extends: ['sebalaini-lints-config'],
```

or 

```js
extends: ['sebalaini-lints-config/next'],
```

This config includes specific Next.js & TypeScript rules.

<br>

### Stylelint

Add the below code to your `.stylelintrc.js` file.

```js
extends: ['sebalaini-lints-config/stylelintrc'],
```

<br>

### Prettier

Add the below code to your `.prettierrc.js` file.

```js
module.exports = {
  ...require('sebalaini-lints-config/prettierrc'),
}
```
