import React from 'react';
import { node, func, bool } from 'prop-types';
import StyledButton from './StyledButton';

/** Buttons make common actions more obvious and help users more easily perform them. Buttons use labels and sometimes icons to communicate the action that will occur when the user touches them. */
const Button = ({
  children,
  onClick,
  full,
  disabled,
  inverted,
  small,
  icon: Icon,
  ...props
}) => (
  <StyledButton
    disabled={disabled}
    full={full}
    inverted={inverted}
    onClick={onClick}
    small={small}
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
  /** an Icon from yoga-icons package */
  icon: node,
};

Button.defaultProps = {
  children: 'Button',
  disabled: false,
  full: false,
  inverted: false,
  onClick: () => {},
  small: false,
  icon: false,
};

Button.displayName = 'Button';

export default Button;
