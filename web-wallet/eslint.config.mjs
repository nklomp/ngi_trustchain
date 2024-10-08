import { Linter } from "eslint";

const config = /** @type {Linter.FlatConfig} */ ({
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: { project: "./tsconfig.json" },
  env: { commonjs: true, node: true },
  ignorePatterns: ["node_modules", "android"],
  plugins: ["import", "eslint-comments"],
  extends: [
    "eslint:recommended",
    "plugin:eslint-comments/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "prettier"
  ],
  globals: {
    BigInt: true,
    console: true,
    WebAssembly: true,
    __DEV__: true,
    localStorage: true
  },
  rules: {
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "eslint-comments/disable-enable-pair": ["error", { "allowWholeFile": true }],
    "eslint-comments/no-unused-disable": "error",
    "import/order": ["error", { "newlines-between": "always", "alphabetize": { "order": "asc" } }],
    "sort-imports": ["error", { "ignoreDeclarationSort": true, "ignoreCase": true }]
  }
});

export default config;
