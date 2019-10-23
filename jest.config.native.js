module.exports = {
  testMatch: ['<rootDir>/packages/**/native/*.test.jsx'],
  transform: { '^.+\\.jsx?$': 'babel-jest' },
  displayName: 'native',
  preset: '@testing-library/react-native',
  moduleNameMapper: {
    'styled-components': require.resolve(
      'styled-components/native/dist/styled-components.native.cjs',
    ),
  },
};
