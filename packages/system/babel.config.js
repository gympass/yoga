module.exports = {
  ignore: ['**/*.test.js'],
  env: {
    esm: {
      presets: [['@babel/preset-env', { modules: false }]],
    },
    cjs: {
      presets: ['@babel/preset-env'],
    },
  },
};
