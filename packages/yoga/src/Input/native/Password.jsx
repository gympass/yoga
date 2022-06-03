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

    padding-right: ${spacing.small}px;
    padding-left: ${spacing.xxsmall}px;
  `,
);

const Password = React.forwardRef(
  (
    {
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
    },
    ref,
  ) => {
    const [showPassword, toggleShowPassword] = useState(false);
    const [focused, setFocused] = useState(false);

    const iconColor = () => {
      if (disabled) {
        return colors.elements.backgroundAndDisabled;
      }

      if (focused) {
        return input.font.color.focus;
      }

      return input.font.color.default;
    };

    return (
      <Wrapper style={style} full={full}>
        <Input
          ref={ref}
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
              <Visibility height={input.height} width={20} fill={iconColor()} />
            ) : (
              <VisibilityOff
                height={input.height}
                width={20}
                fill={iconColor()}
              />
            )}
          </IconWrapper>
        </TouchableWithoutFeedback>
      </Wrapper>
    );
  },
);

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
