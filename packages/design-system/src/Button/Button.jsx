import tokens from '@gympass/tokens';
import React from 'react';
import PropTypes from 'prop-types';

const Button = props => (
  <button
    style={{ backgroundColor: tokens.colors.madrid.crossfit }}
    {...props}
  />
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
