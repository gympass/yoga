import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import * as tokens from '@gympass/yoga-tokens';
import * as themes from '../themes';

const getTheme = ({ theme, locale }) => {
  const token = tokens[locale] || tokens.default;
  const appTheme = themes[theme] || themes.default;

  return appTheme(token);
};

const ThemeProvider = ({ children, ...theme }) => (
  <SCThemeProvider theme={{ yoga: getTheme(theme) }}>
    {children}
  </SCThemeProvider>
);

ThemeProvider.propTypes = {
  theme: PropTypes.string,
  locale: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ThemeProvider.defaultProps = {
  theme: 'endUser',
  locale: 'pt-BR',
};

export default ThemeProvider;
