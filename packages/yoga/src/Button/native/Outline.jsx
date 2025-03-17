import React, { forwardRef } from 'react';
import styled, { withTheme } from 'styled-components';

import { bool, node } from 'prop-types';
import { hexToRgb } from '@gympass/yoga-common';
import withTouchable from './withTouchable';
import { Label, ButtonContainer } from './Button';

const getInvertedStyles = ({ outline, pressed, white, disabled }) => {
  const newStyles = {};

  if (disabled) {
    newStyles.backgroundColor = white;
    newStyles.borderColor = outline.border.color.disabled;
  }

  if (!disabled && pressed) {
    newStyles.backgroundColor = hexToRgb(white, 0.75);
    newStyles.borderColor = 'transparent';
  }

  return {
    backgroundColor: outline.backgroundColor.default,
    borderColor: white,
    borderWidth: outline.border.width,
    ...newStyles,
  };
};

const getDisabledStyles = ({ outline }) => {
  return {
    backgroundColor: outline.backgroundColor.default,
    borderColor: outline.border.color.disabled,
    borderWidth: outline.border.width,
  };
};

const getStyles = ({ outline, pressed, secondary }) => {
  const state = secondary ? 'secondary' : 'primary';
  const newStyles = {};

  if (pressed) {
    newStyles.backgroundColor = outline.font.pressed[state].color;
    newStyles.borderColor = 'transparent';
  }

  return {
    backgroundColor: outline.backgroundColor.default,
    borderColor: outline.font.default[state].color,
    borderWidth: outline.border.width,
    ...newStyles,
  };
};

const LabelText = styled(Label)`
  ${({ color }) => `
    color: ${color};
    text-decoration: none;
  `},
`;

const ButtonContainerOutline = styled(ButtonContainer)`
  ${({
    secondary,
    inverted,
    disabled,
    pressed,
    theme: {
      yoga: {
        colors: { white },
        components: {
          button: {
            types: { outline },
          },
        },
      },
    },
  }) => {
    if (inverted) {
      return getInvertedStyles({ outline, pressed, white, disabled });
    }

    if (disabled) {
      return getDisabledStyles({ outline });
    }

    return getStyles({ outline, pressed, secondary });
  }}}
`;

const ButtonOutline = forwardRef(
  (
    {
      children = 'Button',
      full = false,
      disabled = false,
      small = false,
      pressed = false,
      inverted = false,
      secondary = false,
      theme: {
        yoga: {
          colors,
          components: {
            button: {
              types: { outline },
            },
          },
        },
      },
      ...rest
    },
    ref,
  ) => {
    const state = secondary ? 'secondary' : 'primary';
    let textColor = colors[state];

    if (disabled) {
      textColor = outline.font.disabled.color;
    } else if (inverted) {
      textColor = colors.white;
      if (pressed) {
        textColor = outline.font.inverted.color;
      }
    } else if (pressed) {
      textColor = colors.white;
    }

    return (
      <ButtonContainerOutline
        {...rest}
        full={full}
        disabled={disabled}
        pressed={pressed}
        small={small}
        secondary={secondary}
        inverted={inverted}
        accessible
        accessibilityRole="button"
        ref={ref}
      >
        <LabelText
          disabled={disabled}
          pressed={pressed}
          small={small}
          secondary={secondary}
          color={textColor}
        >
          {children}
        </LabelText>
      </ButtonContainerOutline>
    );
  },
);

ButtonOutline.propTypes = {
  children: node,
  full: bool,
  disabled: bool,
  small: bool,
  pressed: bool,
  inverted: bool,
  secondary: bool,
};

export default withTouchable(withTheme(ButtonOutline));
