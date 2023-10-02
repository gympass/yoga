import React, { forwardRef } from 'react';
import { oneOfType, func, node, bool, string } from 'prop-types';
import styled, { withTheme } from 'styled-components';

import StyledButton from './StyledButton';
import Icon from '../../Icon';

const IconStyled = styled(StyledButton)`
  padding: 0;

  svg {
    width: unset;
    height: unset;
    margin-right: unset;

    transition: fill 0.2s;
  }

  ${({
    small,
    theme: {
      yoga: {
        components: { button },
      },
    },
  }) => `
    width: ${small ? button.height.small : button.height.default}px;
  `}
`;

const ButtonIcon = forwardRef(
  (
    {
      icon,
      theme: {
        yoga: {
          components: { button },
        },
      },
      small,
      disabled,
      ariaLabel,
      ...props
    },
    ref,
  ) => {
    return (
      <IconStyled
        {...props}
        ref={ref}
        small={small}
        disabled={disabled}
        aria-disabled={disabled}
        aria-label={ariaLabel}
      >
        <Icon
          as={icon}
          size={small ? button.icon.size.small : button.icon.size.default}
        />
      </IconStyled>
    );
  },
);

ButtonIcon.propTypes = {
  small: bool,
  disabled: bool,
  secondary: bool,
  inverted: bool,
  icon: oneOfType([node, func]),
  ariaLabel: string,
};

ButtonIcon.defaultProps = {
  small: false,
  disabled: undefined,
  secondary: false,
  inverted: false,
  icon: undefined,
  ariaLabel: undefined,
};

ButtonIcon.displayName = 'Button.Icon';

export default withTheme(ButtonIcon);
