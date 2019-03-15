const eslintRules = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 2,
  },
  env: {
    es6: true,
    node: true,
    jest: true,
  },
};

module.exports = eslintRules;
