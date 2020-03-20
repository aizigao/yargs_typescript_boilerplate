module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ["standard", "plugin:prettier/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        arrowParens: "always",
        semi: false,
        singleQuote: true,
        trailingComma: "all"
      }
    ]
  }
};
