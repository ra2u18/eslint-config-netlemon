module.exports = {
  "import/no-extraneous-dependencies": [
    "error",
    {
      devDependencies: true,
    },
  ],
  "import/prefer-default-export": "off",
  "import/first": "error",
  "import/newline-after-import": "error",
  "import/no-duplicates": "error",
  "import/no-resolved": "off",
  "import/order": [
    "error",
    {
      alphabetize: {
        order: "asc",
        caseInsensitive: true,
      },
      groups: [
        ["builtin", "external"],
        ["index", "parent", "sibling", "internal", "object"],
        ["type"],
      ],
      "newlines-between": "always",
    },
  ],

  "sort-destructure-keys/sort-destructure-keys": "warn",
  "tailwindcss/classnames-order": "off",
  "no-console": "warn",
  "no-nested-ternary": "off",
  "no-underscore-dangle": "off",
  "no-use-before-define": "off",

  "@typescript-eslint/no-unused-vars": [
    "error",
    { argsIgnorePattern: "^_", args: "after-used" },
  ],
};
