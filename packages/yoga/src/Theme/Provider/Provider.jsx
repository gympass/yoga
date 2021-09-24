import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import * as tokens from '@gympass/yoga-tokens';
import yogaTheme from '../theme';

const getTheme = ({ locale }) => {
  const token = tokens[locale] || tokens.default;

  return yogaTheme(token);
};

/** This component provides a theme to all React components underneath itself via the context API. */
const Provider = ({ locale, ...rest }) => (
  <ThemeProvider theme={{ yoga: getTheme({ locale }) }} {...rest} />
);

Provider.propTypes = {
  locale: PropTypes.string,
};

Provider.defaultProps = {
  locale: 'pt-BR',
};

export default Provider;
