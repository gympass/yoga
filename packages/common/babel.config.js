module.exports = {
  env: {
    esm: {
      presets: [['@babel/preset-env', { modules: false }]],
    },
    cjs: {
      presets: ['@babel/preset-env'],
    },
  },
};
