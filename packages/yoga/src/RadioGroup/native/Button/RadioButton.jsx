import React, { useContext } from 'react';
import { string, oneOfType, number, node } from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components';

import RadioGroupContext from '../../RadioGroupContext';

const RadioMark = styled.View(
  ({
    theme: {
      yoga: {
        components: { radiogroup },
      },
    },
    small,
    checked,
  }) => `
  align-items: center;
  justify-content: center;

  height: ${
    small ? radiogroup.button.height.small : radiogroup.button.height.normal
  }px;
  padding-left: ${radiogroup.button.padding.left}px;
  padding-right: ${radiogroup.button.padding.right}px;

  background-color: ${radiogroup.button.backgroundColor};
  border-radius: ${radiogroup.button.border.radius}px;

  font-size: ${radiogroup.font.size}px;

  ${
    checked
      ? `
          background-color: ${radiogroup.checked.backgroundColor};
        `
      : ``
  }
`,
);

const Text = styled.Text(
  ({
    theme: {
      yoga: {
        baseFont,
        components: { radiogroup },
      },
    },
    checked,
  }) => `
    font-family: ${baseFont.family};
    color: ${radiogroup.font.color};

    ${
      checked
        ? `
          color: ${radiogroup.checked.font.color};
          font-weight: ${radiogroup.checked.font.weight};
        `
        : ''
    }
    `,
);

/** Radio group allows user to select one option from a set of options. Use
value on group to set the selected option. */
const RadioGroupButton = React.forwardRef(
  ({ value, children, ...rest }, ref) => {
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
        <RadioMark small={small} checked={checked} ref={ref} {...rest}>
          <Text checked={checked}>{children}</Text>
        </RadioMark>
      </TouchableWithoutFeedback>
    );
  },
);

RadioGroupButton.displayName = 'RadioGroup.Button';

RadioGroupButton.propTypes = {
  value: oneOfType([string, number]),
  children: node.isRequired,
};

RadioGroupButton.defaultProps = {
  value: '',
};

export default RadioGroupButton;
