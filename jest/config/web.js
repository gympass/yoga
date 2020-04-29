module.exports = {
  testMatch: [
    '<rootDir>/../../packages/**/helpers/**/*.test.js',
    '<rootDir>/../../packages/**/web/**/*.test.js',
    '<rootDir>/../../packages/**/web/**/*.test.jsx',
  ],
  setupFilesAfterEnv: ['../setup/web.js'],
  displayName: 'web',
  moduleNameMapper: {
    '\\.svg$': '<rootDir>/../mock/svg.js',
  },
  roots: ['<rootDir>/../../'],
};
