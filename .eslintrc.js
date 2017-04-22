module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  globals: {
    document: true,
  },
  rules: {
    // Lack of .json extension is not ignored, even though it is listed in
    // webpack config.
    'import/extensions': 'warn',
    'react/prefer-stateless-function': 'warn',
    'sort-imports': 'warn',
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: 'webpack.config.js',
      }
    }
  },
};
