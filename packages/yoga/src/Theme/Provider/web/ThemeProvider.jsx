import React from 'react';
import { node } from 'prop-types';

import Provider from '../Provider';
import GlobalStyle from './GlobalStyle';

/** This component provides a theme to all React components underneath itself via the context API. */
const ThemeProvider = ({ children, ...rest }) => (
  <Provider {...rest}>
    <GlobalStyle />
    {children}
  </Provider>
);

ThemeProvider.propTypes = {
  children: node.isRequired,
};

export default ThemeProvider;
