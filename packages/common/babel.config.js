module.exports = {
  env: {
    esm: {
      presets: [
        ['@babel/preset-env', { modules: false }],
        '@babel/preset-typescript',
      ],
    },
    cjs: {
      presets: ['@babel/preset-env', '@babel/preset-typescript'],
    },
  },
};
