const config = {
  testMatch: ['<rootDir>/packages/**/*.test.jsx'],
  transform: { '^.+\\.jsx?$': 'babel-jest' },
};

if (process.env.NODE_ENV === 'native') {
  config.preset = '@testing-library/react-native';
  config.moduleNameMapper = {
    'styled-components': require.resolve(
      'styled-components/native/dist/styled-components.native.cjs',
    ),
  };
}

module.exports = config;
