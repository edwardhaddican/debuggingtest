module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    'jest/globals': true,
    node: true,
    parser: "@babel/eslint-parser",
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module",
    allowImportExportEverywhere: true
  },
  rules: {},
  plugins: ['jest'],
};
  

// clear
