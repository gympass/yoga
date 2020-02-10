import React, { useState } from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import styled, { withTheme } from 'styled-components';
import { bool, func, shape, string } from 'prop-types';
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
  value,
  onBlur,
  onChangeText,
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
  const [inputValue, setInputValue] = useState(value || '');
  const [typed, setTyped] = useState(Boolean(value));

  const iconColor = () => {
    if (disabled) {
      return colors.disabled.background;
    }

    if (focused || typed) {
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
        value={inputValue}
        textContentType="password"
        onSubmitEditing={() => Keyboard.dismiss()}
        onBlur={e => {
          setFocused(false);
          onBlur(e);
        }}
        onChangeText={text => {
          setTyped(Boolean(text));
          setInputValue(text);
          onChangeText(text);
        }}
        onFocus={e => {
          setFocused(true);
          onFocus(e);
        }}
      />
      <TouchableWithoutFeedback
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
  value: string,
  onBlur: func,
  onChangeText: func,
  onFocus: func,
};

Password.defaultProps = {
  disabled: false,
  full: false,
  style: undefined,
  value: undefined,
  onBlur: () => {},
  onChangeText: () => {},
  onFocus: () => {},
};

export default withTheme(Password);
