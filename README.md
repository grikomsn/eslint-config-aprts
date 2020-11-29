# eslint-config-parts

ESLint configuration extending Prettier, Airbnb, React, and Typescript (also import resolvers) 🤠

## Installation

This packages does not ship with dependencies, so you can use `install-peerdeps` to install all the peer dependencies required.

```bash
# using npm
npx install-peerdeps --dev eslint-config-parts

# using yarn
npx install-peerdeps --dev --yarn eslint-config-parts
```

## Usage

Extend the config and add your own rules and settings. This package only adds settings for the import extensions/parsers/resolver ([see config](./.eslintrc.js)).

```js
// .eslintrc.js
module.exports = {
  extends: ["eslint-config-parts"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    // your custom rules
  },
  settings: {
    // your custom settings
  },
};
```

## References

- [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript)
- [eslint-config-kentcdodds](https://github.com/kentcdodds/eslint-config-kentcdodds)
- [eslint-config-react-typescript](https://github.com/ruanyl/eslint-config-react-typescript)
- [eslint-config-wesbos](https://github.com/wesbos/eslint-config-wesbos)

## License

[MIT License, Copyright (c) 2020 Griko Nibras](./LICENSE)
