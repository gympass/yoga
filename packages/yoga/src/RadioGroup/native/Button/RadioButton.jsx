import React, { useContext } from 'react';
import { string, oneOfType, number, node } from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components';

import RadioGroupContext from '../../RadioGroupContext';

const RadioMark = styled.View(
  ({
    theme: {
      yoga: {
        components: { radioGroup },
      },
    },
    small,
    checked,
  }) => `
  align-items: center;
  justify-content: center;

  height: ${
    small ? radioGroup.button.height.small : radioGroup.button.height.normal
  }px;
  padding-left: ${radioGroup.button.padding.left}px;
  padding-right: ${radioGroup.button.padding.right}px;
  
  background-color: ${radioGroup.button.backgroundColor};
  border-radius: ${radioGroup.button.border.radius}px;
  
  font-size: ${radioGroup.font.size}px;
  
  ${
    checked
      ? `
          background-color: ${radioGroup.checked.backgroundColor};
        `
      : ``
  }
`,
);

const Text = styled.Text(
  ({
    theme: {
      yoga: {
        components: { radioGroup },
      },
    },
    checked,
  }) =>
    checked
      ? `
          color: ${radioGroup.checked.font.color};
          font-weight: ${radioGroup.checked.font.weight};
        `
      : '',
);

/** Radio group allows user to select one option from a set of options. Use
value on group to set the selected option. */
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

RadioGroupButton.displayName = 'RadioGroup.Button';

RadioGroupButton.propTypes = {
  value: oneOfType([string, number]),
  children: node.isRequired,
};

RadioGroupButton.defaultProps = {
  value: '',
};

export default RadioGroupButton;
