module.exports = {
  testMatch: [
    '<rootDir>/packages/**/web/**/*.test.js',
    '<rootDir>/packages/**/web/**/*.test.jsx',
  ],
  setupFilesAfterEnv: ['./jest.setup.web.js'],
  displayName: 'web',
};
