import React from 'react';
import { oneOf } from 'prop-types';
import styled from 'styled-components';

import { hexToRgb } from '@gympass/yoga-common';
import withTouchable from './withTouchable';
import { Label, ButtonContainer } from './Button';

const LabelOutline = styled(Label)`
  ${({
    disabled,
    pressed,
    inverted,
    variant,
    theme: {
      yoga: {
        colors: { white, [variant]: color },
        components: { button },
      },
    },
  }) => `
    color: ${color};

    ${disabled ? `color: ${button.types.outline.font.disabled.color};` : ''}
    ${!disabled && pressed ? `color: ${hexToRgb(color, 0.75)};` : ''}

    ${
      inverted && !disabled
        ? `
        color: ${white};
        ${
          !disabled && pressed
            ? `color: ${button.types.outline.backgroundColor.pressed};`
            : ''
        }
      `
        : ''
    }

    ${inverted && pressed ? `color: ${hexToRgb(white, 0.75)};` : ''}
  `}
`;

const ButtonContainerOutline = styled(ButtonContainer)`
  ${({
    pressed,
    disabled,
    inverted,
    variant,
    small,
    theme: {
      yoga: {
        colors: { white, [variant]: color },
        components: { button },
      },
    },
  }) => `
    border: ${
      small ? button.border.small.width : button.border.default.width
    }px solid ${color};
    background-color: ${button.types.outline.backgroundColor.default};

    ${
      !disabled && pressed
        ? `
      background-color: ${button.types.outline.backgroundColor.pressed};
      border-color: ${hexToRgb(color, 0.75)};
    `
        : ''
    }

    ${
      disabled
        ? `
      background-color: ${button.types.outline.backgroundColor.default};
      border-color: ${button.types.outline.font.disabled.color};
    `
        : ''
    }

    ${
      inverted && !disabled
        ? `
        background-color: transparent;
        border-color: ${white};
      `
        : ''
    }

    ${inverted && pressed ? `border-color: ${hexToRgb(white, 0.75)}` : ''}
  `}
`;

const ButtonOutline = ({
  children,
  disabled,
  pressed,
  inverted,
  variant,
  ...rest
}) => (
  <ButtonContainerOutline
    {...rest}
    disabled={disabled}
    pressed={pressed}
    inverted={inverted}
    variant={variant}
  >
    <LabelOutline
      disabled={disabled}
      pressed={pressed}
      inverted={inverted}
      variant={variant}
    >
      {children}
    </LabelOutline>
  </ButtonContainerOutline>
);

ButtonOutline.propTypes = {
  /** style the link following the theme (primary, secondary) */
  variant: oneOf(['primary', 'secondary']),
  ...ButtonContainer.propTypes,
};
ButtonOutline.defaultProps = {
  variant: 'primary',
  ...ButtonContainer.defaultProps,
};

export default withTouchable(ButtonOutline);
