module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  rules: {
    "prettier/prettier": [
      //prettier 문제가 생기면 이 부분을 해겷해주면 됩니다
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
