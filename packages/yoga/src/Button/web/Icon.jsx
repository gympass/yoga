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
      ...props
    },
    ref,
  ) => {
    return (
      <IconStyled {...props} ref={ref} small={small}>
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
};

ButtonIcon.defaultProps = {
  small: false,
  disabled: false,
  secondary: false,
  inverted: false,
  icon: undefined,
};

ButtonIcon.displayName = 'Button.Icon';

export default withTheme(ButtonIcon);
