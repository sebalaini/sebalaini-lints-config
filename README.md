# sebalaini-lints-config

Shared lint configuration package with various base configurations which can be extended by your project's `eslint`, `stylelint` & `prettier` configuration

## What this package is

This package is a complete lint configurations including `eslint`, `stylelint` & `prettier`. These are the base configurations for linting JS code.

## Installation

### package.json

```json
"sebalaini-lints-config": "git+https://sebalaini@github.com/sebalaini/sebalaini-lints-config.git",
```

## Usage

The eslint configuration exported by default is Next.js specific and includes TailwindCSS & scss lint.

Extend these in your project's configuration file as needed.

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
