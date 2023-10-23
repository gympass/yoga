import React, { forwardRef } from 'react';
import { oneOfType, func, node, bool } from 'prop-types';
import styled, { withTheme } from 'styled-components';

import StyledButton from './StyledButton';
import Icon from '../../Icon';
import Spinner from '../../Spinner';

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
      isLoading,
      ...props
    },
    ref,
  ) => {
    return (
      <IconStyled
        {...props}
        ref={ref}
        small={small}
        disabled={disabled || isLoading}
        aria-disabled={disabled}
        isLoading={isLoading}
      >
        {isLoading ? (
          <Spinner color="deep" size={small ? 'small' : 'medium'} />
        ) : (
          <Icon
            as={icon}
            size={small ? button.icon.size.small : button.icon.size.default}
            role="img"
          />
        )}
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
  isLoading: bool,
};

ButtonIcon.defaultProps = {
  small: false,
  disabled: undefined,
  secondary: false,
  inverted: false,
  icon: undefined,
  isLoading: false,
};

ButtonIcon.displayName = 'Button.Icon';

export default withTheme(ButtonIcon);
