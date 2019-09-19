import tokens from '@gympass/tokens';
import React from 'react';

const Button = props => (
  <button
    style={{ backgroundColor: tokens.colors.madrid.crossfit }}
    {...props}
  />
);

export default Button;
