module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  globals: {
    document: true,
  },
  rules: {
    'sort-imports': 'warn',
  },
  settings: {
    'import/resolver': 'webpack',
  },
};
