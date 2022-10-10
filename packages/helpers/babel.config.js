module.exports = {
  presets: ['@babel/preset-typescript'],
  env: {
    esm: {
      presets: [['@babel/preset-env', { modules: false }]],
    },
    cjs: {
      presets: ['@babel/preset-env'],
    },
    test: {
      presets: [['@babel/preset-env'], '@babel/preset-react'],
    },
  },
};
