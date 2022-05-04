module.exports = {
  testMatch: ['<rootDir>/packages/**/native/**/*.test.jsx'],
  transform: { '^.+\\.jsx?$': 'babel-jest' },
  displayName: 'native',
  preset: '@testing-library/react-native',
  setupFilesAfterEnv: ['<rootDir>/jest/setup/native.js'],
  moduleDirectories: [
    '<rootDir>/node_modules',
    '<rootDir>/packages/labnative/node_modules',
  ],
  moduleNameMapper: {
    'styled-components': require.resolve(
      'styled-components/native/dist/styled-components.native.cjs',
    ),
    '\\.svg$': '<rootDir>/jest/mock/svg.native.js',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!@react-native-picker/picker|@ptomasroos/react-native-multi-slider|react-native).+\\.js$',
  ],
  rootDir: '../../',
};