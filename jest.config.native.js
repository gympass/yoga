module.exports = {
  testMatch: ['<rootDir>/packages/**/native/**/*.test.jsx'],
  transform: { '^.+\\.jsx?$': 'babel-jest' },
  displayName: 'native',
  preset: '@testing-library/react-native',
  setupFilesAfterEnv: ['./jest.setup.native.js'],
  moduleNameMapper: {
    'styled-components': require.resolve(
      'styled-components/native/dist/styled-components.native.cjs',
    ),
  },
  transformIgnorePatterns: [
    '/node_modules/(?!@ptomasroos/react-native-multi-slider|react-native).+\\.js$',
  ],
};
