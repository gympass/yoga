import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, children }) => (
  <button style={{ backgroundColor: 'red' }} text={text}>
    {children}
  </button>
);

Button.propTypes = {
  text: PropTypes.string,
  children: PropTypes.node,
};

Button.defaultProps = {
  text: 'alo',
  children: undefined,
};

export default Button;
