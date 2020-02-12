import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import styled, { withTheme } from 'styled-components';
import { bool, func, shape } from 'prop-types';
import { Visibility, VisibilityOff } from '@gympass/yoga-icons';

import Input from './Input';

const Wrapper = styled.View(
  ({
    full,
    theme: {
      yoga: {
        components: { input },
      },
    },
  }) => `
    position: relative;

    width: ${full ? '100%' : `${input.width}px`};
  `,
);

const IconWrapper = styled.View(
  ({
    theme: {
      yoga: { spacing },
    },
  }) => `
    position: absolute;
    top: 0;
    right: 0;

    padding-right: ${spacing.xsmall}px;
    padding-left: ${spacing.xsmall}px;
  `,
);

const Password = ({
  disabled,
  style,
  full,
  onBlur,
  onFocus,
  theme: {
    yoga: {
      colors,
      components: { input },
    },
  },
  ...props
}) => {
  const [showPassword, toggleShowPassword] = useState(false);
  const [focused, setFocused] = useState(false);

  const iconColor = () => {
    if (disabled) {
      return colors.disabled.background;
    }

    if (focused) {
      return input.font.color.focus;
    }

    return input.font.color.default;
  };

  return (
    <Wrapper style={style} full={full}>
      <Input
        {...props}
        autoCompleteType="password"
        blurOnSubmit={false}
        cleanable={false}
        clearTextOnFocus={false}
        disabled={disabled}
        full={full}
        secureTextEntry={!showPassword}
        textContentType="password"
        onSubmitEditing={() => Keyboard.dismiss()}
        onBlur={e => {
          setFocused(false);
          onBlur(e);
        }}
        onFocus={e => {
          setFocused(true);
          onFocus(e);
        }}
      />
      <TouchableWithoutFeedback
        accessibilityRole="button"
        onPress={() => {
          if (disabled) return;
          toggleShowPassword(!showPassword);
        }}
      >
        <IconWrapper disabled={disabled}>
          {showPassword ? (
            <Visibility height={input.height} fill={iconColor()} />
          ) : (
            <VisibilityOff height={input.height} fill={iconColor()} />
          )}
        </IconWrapper>
      </TouchableWithoutFeedback>
    </Wrapper>
  );
};

Password.propTypes = {
  disabled: bool,
  full: bool,
  style: shape({}),
  onBlur: func,
  onFocus: func,
};

Password.defaultProps = {
  disabled: false,
  full: false,
  style: undefined,
  onBlur: () => {},
  onFocus: () => {},
};

export default withTheme(Password);
