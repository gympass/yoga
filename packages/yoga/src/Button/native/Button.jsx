import React from 'react';
import styled from 'styled-components';
import { node, bool } from 'prop-types';
import withTouchable from './withTouchable';

import Text from '../../Text';

const Label = styled(Text.Bold)`
  text-align: center;
  ${({
    disabled,
    pressed,
    inverted,
    theme: {
      yoga: {
        components: { button },
      },
    },
  }) => `
      font-size: ${button.font.size};
      color: ${button.types.contained.font.default.color};

      ${disabled ? `color: ${button.types.contained.font.disabled.color};` : ''}
      ${
        !disabled && pressed
          ? `color: ${button.types.contained.font.pressed.color};`
          : ''
      }

      ${
        inverted && !disabled
          ? `
        color: ${button.types.contained.backgroundColor.default};

        ${
          !disabled && pressed
            ? `color: ${button.types.contained.backgroundColor.pressed};`
            : ''
        }
      `
          : ''
      }
    `}
`;

const ButtonContainer = styled.View`
  ${({
    pressed,
    disabled,
    full,
    small,
    inverted,
    theme: {
      yoga: {
        components: { button },
      },
    },
  }) => `
      background-color: ${button.types.contained.backgroundColor.default};
      border-radius: ${button.border.radius}px;
      height: ${small ? button.height.small : button.height.default};
      justify-content: center;
      padding-left: ${button.padding.left}px;
      padding-right: ${button.padding.right}px;
      ${full ? 'width: 100%;' : ''}

      ${
        !disabled && pressed
          ? `
        background-color: ${button.types.contained.backgroundColor.pressed};
      `
          : ''
      }

      ${
        disabled
          ? `
        background-color: ${button.types.contained.backgroundColor.disabled};
      `
          : ''
      }

      ${
        inverted && !disabled
          ? `
          background-color: ${button.types.contained.font.default.color};
        `
          : ''
      }
    `}
`;

/** Buttons make common actions more obvious and help users more easily perform
them. Buttons use labels and sometimes icons to communicate the action that will
occur when the user touches them. */
const Button = ({
  children,
  full,
  disabled,
  small,
  pressed,
  inverted,
  ...rest
}) => (
  <ButtonContainer
    {...rest}
    full={full}
    pressed={pressed}
    disabled={disabled}
    small={small}
    inverted={inverted}
  >
    <Label disabled={disabled} pressed={pressed} inverted={inverted}>
      {children}
    </Label>
  </ButtonContainer>
);

Button.propTypes = {
  children: node,
  full: bool,
  disabled: bool,
  small: bool,
  pressed: bool,
  inverted: bool,
};

Button.defaultProps = {
  children: 'Button',
  full: false,
  disabled: false,
  small: false,
  pressed: false,
  inverted: false,
};

const ButtonWithTouchable = withTouchable(Button);

export { Label, ButtonContainer, ButtonWithTouchable as default };
