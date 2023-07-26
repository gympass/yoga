module.exports = {
  projects: [
    '<rootDir>/jest/config/native.js',
    '<rootDir>/jest/config/helpers.js',
    '<rootDir>/jest/config/system.js',
    '<rootDir>/jest/config/web.js',
  ],
  collectCoverageFrom: [
    '<rootDir>/packages/**/*.{js,jsx,ts,tsx}',
    '!<rootDir>/packages/**/index.{js,native.js,ts}',
    '!<rootDir>/packages/**/*.test.{js,jsx,ts,tsx}',
    '!<rootDir>/packages/**/babel.config.js',
    '!<rootDir>/**/node_modules/**',
    '!<rootDir>/packages/labnative/**',
    '!<rootDir>/packages/doc/**',
  ],
  rootDir: '../../',
};
