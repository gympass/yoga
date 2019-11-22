import React, { useContext } from 'react';
import { string, oneOfType, number, node } from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components';

import RadioGroupContext from '../RadioGroupContext';

const RadioMark = styled.View(
  ({
    theme: {
      yoga: {
        components: {
          radioGroup: { radio },
        },
      },
    },
    small,
    checked,
  }) => `
  align-items: center;
  justify-content: center;
  background-color: red;
  background-color: ${radio.backgroundColor.enabled};
  border-radius: ${radio.border.radius}px;
  font-size: ${radio.font.size}px;
  height: ${small ? radio.height.small : radio.height.normal}px;
  padding-left: ${radio.padding.left}px;
  padding-right: ${radio.padding.right}px;

  ${
    checked
      ? `
          background-color: ${radio.checked.backgroundColor.enabled};
        `
      : ``
  }
`,
);

const Text = styled.Text(
  ({
    theme: {
      yoga: {
        components: {
          radioGroup: { radio },
        },
      },
    },
    checked,
  }) =>
    checked
      ? `
          color: ${radio.checked.textColor.enabled};
          font-weight: ${radio.checked.font.weight};
        `
      : '',
);

const RadioGroupButton = ({ value, children, ...rest }) => {
  const { onChange, small, selectedValue, ...context } = useContext(
    RadioGroupContext,
  );

  const inputValue = value || children;
  const checked = inputValue === selectedValue;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        onChange({ value: inputValue });
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
