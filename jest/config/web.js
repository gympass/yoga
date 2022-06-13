module.exports = {
  testMatch: [
    '<rootDir>/packages/**/web/**/*.test.js',
    '<rootDir>/packages/**/web/**/*.test.jsx',
  ],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest/setup/web.js'],
  displayName: 'web',
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/jest/mock/svg.js',
  },
  rootDir: '../../',
};
