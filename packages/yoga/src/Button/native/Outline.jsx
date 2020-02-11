import React from 'react';
import styled from 'styled-components';

import withTouchable from './withTouchable';
import { Label, ButtonContainer } from './Button';

const LabelOutline = styled(Label)`
  ${({
    disabled,
    pressed,
    inverted,
    theme: {
      yoga: {
        colors: { white, gray },
        components: { button },
      },
    },
  }) => `
    color: ${button.types.outline.font.default.color};

    ${disabled ? `color: ${button.types.outline.font.disabled.color};` : ''}
    ${
      !disabled && pressed
        ? `color: ${button.types.outline.font.pressed.color};`
        : ''
    }

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

    ${inverted && pressed ? `color: ${gray[3]};` : ''}
  `}
`;

const ButtonContainerOutline = styled(ButtonContainer)`
  ${({
    pressed,
    disabled,
    inverted,
    small,
    theme: {
      yoga: {
        colors: { white, gray },
        components: { button },
      },
    },
  }) => `
    border: ${
      small ? button.border.small.width : button.border.default.width
    }px solid ${button.types.outline.font.default.color};
    background-color: ${button.types.outline.backgroundColor.default};

    ${
      !disabled && pressed
        ? `
      background-color: ${button.types.outline.backgroundColor.pressed};
      border-color: ${button.types.outline.font.pressed.color};
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

    ${inverted && pressed ? `border-color: ${gray[3]}` : ''}
  `}
`;

const ButtonOutline = ({ children, disabled, pressed, inverted, ...rest }) => (
  <ButtonContainerOutline
    {...rest}
    disabled={disabled}
    pressed={pressed}
    inverted={inverted}
  >
    <LabelOutline disabled={disabled} pressed={pressed} inverted={inverted}>
      {children}
    </LabelOutline>
  </ButtonContainerOutline>
);

ButtonOutline.propTypes = ButtonContainer.propTypes;
ButtonOutline.defaultProps = ButtonContainer.defaultProps;

export default withTouchable(ButtonOutline);
