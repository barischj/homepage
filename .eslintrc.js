module.exports = {
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  parser: 'babel-eslint',
  globals: {
    document: true,
  },
  rules: {
    'import/order': 'warn',
    'react/prefer-stateless-function': 'warn',
  },
  settings: {
    'import/resolver': 'webpack',
  },
};
