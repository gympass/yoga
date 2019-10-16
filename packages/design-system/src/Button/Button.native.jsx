import React, { useState } from 'react';
import styled from 'styled-components';
import { node, func, bool } from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Label = styled.Text`
  text-align: center;
  ${({
    disabled,
    pressed,
    outline,
    text,
    theme: {
      components: {
        button: {
          font: { size, weight },
          types,
        },
      },
    },
  }) => {
    const currentType = outline ? 'outline' : text ? 'text' : 'contained';
    const currentState = disabled
      ? 'disabled'
      : pressed
      ? 'pressed'
      : 'enabled';
    const { textColor } = types[currentType];

    return `
      font-size: ${size};
      font-weight: ${weight};
      color: ${textColor[currentState]};
    `;
  }}
`;

const ButtonContainer = styled.View`
  ${({
    pressed,
    disabled,
    full,
    small,
    text,
    outline,
    theme: {
      components: {
        button: {
          padding: { left: paddingLeft, right: paddingRight },
          height: { normal: normalHeight, small: smallHeight },
          border: { width: borderWidth, radius },
          types,
        },
      },
    },
  }) => {
    const currentType = outline ? 'outline' : text ? 'text' : 'contained';
    const currentState = disabled
      ? 'disabled'
      : pressed
      ? 'pressed'
      : 'enabled';
    const { backgroundColor, textColor } = types[currentType];

    return `
      align-self: center;
      background-color: ${backgroundColor[currentState]};
      border: ${borderWidth}px solid ${
      currentType === 'outline'
        ? textColor[currentState]
        : backgroundColor[currentState]
    };
      border-radius: ${radius}px;
      padding-left: ${paddingLeft}px;
      padding-right: ${paddingRight}px;
      height: ${small ? smallHeight : normalHeight};
      justify-content: center;
      ${full ? 'width: 100%;' : ''}
    `;
  }}
`;

function Button({
  children,
  onPress,
  full,
  disabled,
  small,
  outline,
  text,
  ...rest
}) {
  const [pressed, setPressed] = useState(false);

  return (
    <TouchableWithoutFeedback
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={onPress}
    >
      <ButtonContainer
        {...rest}
        full={full}
        pressed={pressed}
        disabled={disabled}
        small={small}
        outline={outline}
        text={text}
      >
        <Label
          disabled={disabled}
          pressed={pressed}
          outline={outline}
          text={text}
        >
          {children}
        </Label>
      </ButtonContainer>
    </TouchableWithoutFeedback>
  );
}

Button.propTypes = {
  children: node,
  onPress: func,
  full: bool,
  disabled: bool,
  small: bool,
  outline: bool,
  text: bool,
};

Button.defaultProps = {
  children: 'Gympass',
  onPress: () => {},
  full: false,
  disabled: false,
  small: false,
  outline: false,
  text: false,
};

export default Button;
