module.exports = {
  env: {
    jest: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  plugins: ['react', 'prettier'],
  extends: ['airbnb', 'prettier', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': 'error',
    'import/no-cycle': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': [2, { ignore: ['theme'] }],
    'react/require-default-props': 'off',
    'import/no-extraneous-dependencies': 0,
    'no-plusplus': 0,
    'no-restricted-globals': 0,
    'padding-line-between-statements': [
      2,
      { blankLine: 'always', prev: ['const', 'var', 'let'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'var', 'let'],
        next: ['const', 'var', 'let'],
      },
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
    ],
    'import/no-named-as-default': 0,
  },
  globals: {
    window: true,
    fetch: false,
    document: true,
    HTMLElement: true,
  },
};
