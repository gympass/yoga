module.exports = {
  env: {
    jest: true,
  },
  parser: 'babel-eslint',
  plugins: ['react', 'prettier'],
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
    'import/no-cycle': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': [2, { ignore: ['theme'] }],
    'import/no-extraneous-dependencies': 0,
    'no-plusplus': 0,
  },
  globals: {
    window: true,
    fetch: false,
    document: true,
  },
};
