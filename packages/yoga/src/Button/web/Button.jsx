import React from 'react';
import { func, node, oneOfType, bool } from 'prop-types';
import StyledButton from './StyledButton';

/** Buttons make common actions more obvious and help users more easily perform them. Buttons use labels and sometimes icons to communicate the action that will occur when the user touches them. */
const Button = ({
  children,
  onClick,
  full,
  disabled,
  inverted,
  small,
  secondary,
  icon: Icon,
  ...props
}) => (
  <StyledButton
    disabled={disabled}
    full={full}
    inverted={inverted}
    onClick={onClick}
    small={small}
    secondary={secondary}
    {...props}
  >
    {Icon && <Icon />}
    {children}
  </StyledButton>
);

Button.propTypes = {
  children: node,
  disabled: bool,
  full: bool,
  inverted: bool,
  onClick: func,
  small: bool,
  secondary: bool,
  /** an Icon from yoga-icons package */
  icon: oneOfType([node, func]),
};

Button.defaultProps = {
  children: 'Button',
  disabled: false,
  full: false,
  inverted: false,
  onClick: () => {},
  small: false,
  secondary: false,
  icon: undefined,
};

Button.displayName = 'Button';

export default Button;
