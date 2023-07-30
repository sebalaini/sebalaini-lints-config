# eslint-config-corg

Shared eslint configuration package with various base configurations which can be extended by your project's `eslint` configuration.

## What this package is

This package is only eslint configurations. These are the base configurations for liniting JS or TS code.

## What this package is NOT

This package is for linting, **NOT formatting**. Formatting is not the job of the linter, and there are deliberatley no formatting rules in the linting configuration.

Instead this responsiblitiy is left to [Prettier](https://prettier.io/docs/en/comparison.html), formatting issues will not result in linting errors or be marked as errors or warnings in the IDE, formatting rules can be applied automatically with out the need for IDE errors.

Prettier is for formatting whilst linters are for catching bugs.

## Installation

### npm

```shell
npm i --save-dev @netmanagement/eslint-config-corg
```

### yarn

```shell
yarn add -D @netmanagement/eslint-config-corg
```

## Usage

The eslint configuration is split into more specific configurations which can be extended as required to best suit your needs. Extend these in your project's `eslintrc.js` file as needed.

_\*All the specific configurations extend the base configuration, so if using a more specific conguration, e.g. `@netmanagement/eslint-config-corg/typescript`, you **don't** need to also extend the base config._

### Base (JS only)

```js
extends: ['@netmanagement/eslint-config-corg'],
```

### Typescript

```js
extends: ['@netmanagement/eslint-config-corg/typescript'],
```

### Next.js

```js
extends: ['@netmanagement/eslint-config-corg/next'],
```

You can extend as many of the configurations as you need in your project, for example if you have a Next.js project with TS, you can extend the configuation like this:

```js
extends: ['@netmanagement/eslint-config-corg/typescript, @netmanagement/eslint-config-corg/next'],
```

# Automated Semantic Versioning
This package utilises automated semantic versioning. This takes away the decision-making on package version numbers from developers, in order to fully comply with the Semantic Versioning specification.

The setup utilizes the conventional-changelog git commit message convention, via Commitizen, to standardize your commit messages. These commit messages will then be analysed by the semantic-release package to determine if the threshold for a new release has been met.

In order to take advantage of this feature, you'll need to do the following:

1. Run `yarn`

2. If this is the first time using commitizen, install it globally:
```shell
npm install -g commitizen
```
3. If this is the first time using commitizen, initialise cz-conventional-changelog:
```shell
commitizen init cz-conventional-changelog --yarn --dev --exact
```

These steps should allow you to use the `cz` command, instead of `git commit`, to implement the correct git commit message standard.

More information can be found on the <a href="https://www.notion.so/winasone/Automated-Semantic-Versioning-Standardised-Git-Commits-6901a513fd0b4b5594e1bd99c4948f0c" target="_blank">Notion page here</a>