import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import * as tokens from '@gympass/yoga-tokens';
import * as themes from '../themes';

const getTheme = ({ theme, locale }) => {
  const token = tokens[locale] || tokens.default;
  const appTheme = themes[theme] || themes.default;
  return appTheme(token);
};

/** This component provides a theme to all React components underneath itself via the context API. */
const Provider = ({ theme, locale, ...rest }) => (
  <ThemeProvider theme={{ yoga: getTheme({ theme, locale }) }} {...rest} />
);

Provider.propTypes = {
  theme: PropTypes.string,
  locale: PropTypes.string,
};

Provider.defaultProps = {
  theme: 'endUser',
  locale: 'pt-BR',
};

export default Provider;
