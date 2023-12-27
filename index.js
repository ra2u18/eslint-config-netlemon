const base = require("./lib/rules/base.js");
const react = require("./lib/rules/react.js");
const next = require("./lib/rules/next.js");

module.exports = {
  root: true,
  ignorePatterns: ["*.js", "*.yaml"],

  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
    tsconfigRootDir: "__dirname",
  },

  extends: [
    "airbnb",
    "airbnb/hooks",

    "plugin:prettier/recommended",

    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",

    "plugin:import/recommended",
    "plugin:import/typescript",

    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
  ],

  env: {
    browser: true,
    commonjs: true,
    es2024: true,
    jest: true,
    node: true,
  },

  rules: {
    ...base,
    ...react,
    ...next,
  },

  settings: {
    react: {
      version: "detect",
    },
  },
};
