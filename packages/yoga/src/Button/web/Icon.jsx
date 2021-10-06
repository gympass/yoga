import React, { forwardRef } from 'react';
import { oneOfType, func, node, bool } from 'prop-types';
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
    large,
    theme: {
      yoga: {
        components: { button },
      },
    },
  }) => `
    width: ${
      large ? button.types.icon.size.large : button.types.icon.size.default
    }px;
    height: ${
      large ? button.types.icon.size.large : button.types.icon.size.default
    }px;
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
      large,
      ...props
    },
    ref,
  ) => {
    return (
      <IconStyled {...props} ref={ref} large={large}>
        <Icon
          as={icon}
          size={
            large ? button.types.icon.svg.large : button.types.icon.svg.default
          }
        />
      </IconStyled>
    );
  },
);

ButtonIcon.propTypes = {
  large: bool,
  disabled: bool,
  secondary: bool,
  inverted: bool,
  icon: oneOfType([node, func]),
};

ButtonIcon.defaultProps = {
  large: false,
  disabled: false,
  secondary: false,
  inverted: false,
  icon: undefined,
};

ButtonIcon.displayName = 'Button.Icon';

export default withTheme(ButtonIcon);
