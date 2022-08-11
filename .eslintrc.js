module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    'jest/globals': true,
    node: true,
    parser: babel-eslint,
    parserOptions: {
      sourceType: "module",
      allowImportExportEverywhere: true
    }
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {},
  plugins: ['jest'],
};
  

// clear
