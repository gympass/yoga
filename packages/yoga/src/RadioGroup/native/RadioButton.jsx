import React, { useContext, useRef, useState } from 'react';
import { string, oneOfType, number, node } from 'prop-types';
import styled from 'styled-components';

import RadioGroupContext from '../RadioGroupContext';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const RadioMark = styled.View`
  align-items: center;
  justify-content: center;
  background-color: red;

  ${({
    theme: {
      components: {
        radioGroup: {
          radio: {
            border: { radius: borderRadius },
            padding: { left: paddingLeft, right: paddingRight },
            height: { small: smallHeight, normal: normalHeight },
            font: { size: fontSize },
            backgroundColor: { enabled: backgroundColor },
            checked: {
              backgroundColor: { enabled: checkedBackgroundColor },
            },
          },
        },
      },
    },
    small,
    checked,
  }) => `
    background-color: ${backgroundColor};
    border-radius: ${borderRadius}px;
    font-size: ${fontSize}px;
    height: ${small ? smallHeight : normalHeight}px;
    padding-left: ${paddingLeft}px;
    padding-right: ${paddingRight}px;
    
    ${
      checked
        ? `
      background-color: ${checkedBackgroundColor};
    `
        : ``
    }
  `};
`;

const Text = styled.Text`
  ${({
    theme: {
      components: {
        radioGroup: {
          radio: {
            checked: {
              textColor: { enabled: checkedTextColor },
              font: { weight: checkedFontWeight },
            },
          },
        },
      },
    },
    checked,
  }) =>
    checked
      ? `
      color: ${checkedTextColor};
      font-weight: ${checkedFontWeight};
    `
      : ''}
`;

const RadioGroupButton = ({ value, children, ...rest }) => {
  const { onChange, small, selectedValue, ...context } = useContext(
    RadioGroupContext,
  );

  const inputValue = value || children;
  const checked = inputValue === selectedValue;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        onChange({ value });
      }}
      {...context}
    >
      <RadioMark small={small} checked={checked} {...rest}>
        <Text checked={checked}>{children}</Text>
      </RadioMark>
    </TouchableWithoutFeedback>
  );
};

RadioGroupButton.displayName = 'RadioGroup.Radio';

RadioGroupButton.propTypes = {
  value: oneOfType([string, number]),
  children: node.isRequired,
};

RadioGroupButton.defaultProps = {
  value: '',
};

export default RadioGroupButton;
