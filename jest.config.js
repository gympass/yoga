const config = {
  testMatch: ['<rootDir>/tests/**/*.test.jsx'],
  transform: { '^.+\\.jsx?$': 'babel-jest' },
};

if (process.env.NODE_ENV === 'native') {
  config.preset = 'react-native';
}

module.exports = config;
