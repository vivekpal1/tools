module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react", "@typescript-eslint"],
  root: true,
  rules: {
    // e.g., "@typescript-eslint/explicit-function-return-type": "off",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        // Rules specific to TypeScript files
      },
    },
  ],
};
