import React from 'react';
import PropTypes from 'prop-types';

/** This is a Buttton description, é nada. */
const Button = ({ text, children }) => (
  <button style={{ backgroundColor: 'red' }} text={text}>
    {children}
  </button>
);

Button.propTypes = {
  /** A text */
  text: PropTypes.string,
  /** Component children */
  children: PropTypes.node,
};

Button.defaultProps = {
  text: 'alo',
  children: undefined,
};

export default Button;
