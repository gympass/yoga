module.exports = {
  plugins: ['@babel/plugin-proposal-optional-chaining', 'import-glob'],
  presets: [
    [
      'babel-preset-gatsby',
      {
        targets: {
          browsers: ['>0.25%', 'not dead'],
        },
      },
    ],
  ],
};
