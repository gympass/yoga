module.exports = {
  projects: [
    '<rootDir>/jest/config/native.js',
    '<rootDir>/jest/config/helpers.js',
    '<rootDir>/jest/config/system.js',
    '<rootDir>/jest/config/web.js',
  ],
  collectCoverageFrom: [
    '<rootDir>/packages/**/*.{js,jsx}',
    '!<rootDir>/packages/**/index.{js,native.js}',
    '!<rootDir>/packages/**/*.test.{js,jsx}',
    '!<rootDir>/packages/**/babel.config.js',
    '!<rootDir>/**/node_modules/**',
    '!<rootDir>/packages/labnative/**',
    '!<rootDir>/packages/doc/**',
  ],
  rootDir: '../../',
};
