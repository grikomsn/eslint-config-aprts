module.exports = {
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "prettier",
    "prettier/@typescript-eslint",
    "prettier/react",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "import", "react"],
  rules: {
    //
  },
  settings: {
    "import/extensions": [".js", ".jsx", ".mjs", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      node: {
        extensions: [".d.ts", ".js", ".json", ".jsx", ".ts", ".tsx"],
      },
      typescript: {
        //
      },
    },
  },
};
