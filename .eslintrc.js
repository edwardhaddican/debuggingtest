module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    'jest/globals': true,
    node: true,
  },
  extends: 'eslint:recommended',
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
    allowImportExportEverywhere: true
  },
  rules: {},
  plugins: ['jest'],
};
  

// clear
