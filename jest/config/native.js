module.exports = {
  roots: ['<rootDir>/../../'],
  testMatch: ['<rootDir>/../../packages/**/native/**/*.test.jsx'],
  transform: { '^.+\\.jsx?$': 'babel-jest' },
  displayName: 'native',
  preset: '@testing-library/react-native',
  setupFilesAfterEnv: ['../setup/native.js'],
  moduleDirectories: [
    '<rootDir>/../../node_modules',
    '<rootDir>/../../packages/labnative/node_modules',
  ],
  moduleNameMapper: {
    'styled-components': require.resolve(
      'styled-components/native/dist/styled-components.native.cjs',
    ),
    '\\.svg$': '<rootDir>/../mock/svg.native.js',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!@ptomasroos/react-native-multi-slider|react-native|react-spring).+\\.js$',
  ],
};
