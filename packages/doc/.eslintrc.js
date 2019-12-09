const path = require('path');
const baseConfig = require('../../.eslintrc.js');

module.exports = {
  ...baseConfig,
  settings: {
    'import/resolver': {
      'babel-module': {
        alias: {
          components: path.resolve(__dirname, 'src/components'),
          images: path.resolve(__dirname, 'src/images'),
        },
      },
    },
  },
};
