import React from 'react';
import styled, { withTheme } from 'styled-components';
import { node, oneOfType, func, bool } from 'prop-types';

import withTouchable from './withTouchable';

import Text from '../../Text';

const Label = styled(Text.Medium)`
  text-align: center;
  ${({
    small,
    color,
    theme: {
      yoga: {
        components: { button },
      },
    },
  }) => `
      font-size: ${small ? button.font.size.small : button.font.size.default}px;
      color: ${color};
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
    flex-direction: row;
    align-items: center;
    justify-content: center;

    background-color: ${button.types.contained.backgroundColor.default};
    border-radius: ${button.border.radius}px;
    height: ${small ? button.height.small : button.height.default};
    justify-content: center;
    padding-left: ${
      small ? button.padding.small.left : button.padding.default.left
    }px;
    padding-right: ${
      small ? button.padding.small.right : button.padding.default.right
    }px;
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
  icon: Icon,
  theme: {
    yoga: {
      components: { button },
    },
  },
  ...rest
}) => {
  let textColor = button.types.contained.font.default.color;

  if (disabled) {
    textColor = button.types.contained.font.disabled.color;
  } else if (inverted) {
    textColor = button.types.contained.backgroundColor.default;
    if (pressed) {
      textColor = button.types.contained.backgroundColor.pressed;
    }
  } else if (pressed) {
    textColor = button.types.contained.font.pressed.color;
  }

  return (
    <ButtonContainer
      {...rest}
      full={full}
      pressed={pressed}
      disabled={disabled}
      small={small}
      inverted={inverted}
    >
      {Icon && (
        <Icon
          width={small ? button.icon.size.small : button.icon.size.default}
          height={small ? button.icon.size.small : button.icon.size.default}
          fill={textColor}
          style={{
            marginRight: button.icon.margin.right,
          }}
        />
      )}
      <Label
        disabled={disabled}
        pressed={pressed}
        inverted={inverted}
        small={small}
        color={textColor}
      >
        {children}
      </Label>
    </ButtonContainer>
  );
};

Button.propTypes = {
  children: node,
  full: bool,
  disabled: bool,
  small: bool,
  pressed: bool,
  inverted: bool,
  /** an Icon from yoga-icons package */
  icon: oneOfType([bool, func]),
};

Button.defaultProps = {
  children: 'Button',
  full: false,
  disabled: false,
  small: false,
  pressed: false,
  inverted: false,
  icon: undefined,
};

const ButtonWithTouchable = withTouchable(withTheme(Button));

export { Label, ButtonContainer, ButtonWithTouchable as default };
