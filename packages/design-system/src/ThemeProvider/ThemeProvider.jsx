import React from 'react';
import PropTypes from 'prop-types';
import { corp } from './themes';

const ThemeContext = React.createContext({
  theme: corp,
});

const ThemeConsumer = ThemeContext.Consumer;

const ThemeProvider = ({ children, theme }) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);

ThemeProvider.propTypes = {
  theme: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.node.isRequired,
};

ThemeProvider.defaultProps = {
  theme: corp,
};

export { ThemeProvider as default, ThemeContext, ThemeConsumer };
