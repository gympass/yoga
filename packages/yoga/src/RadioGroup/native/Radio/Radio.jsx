import React, { useContext, useState } from 'react';
import { string, oneOfType, number, shape, bool } from 'prop-types';
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
    checked,
    disabled,
  }) => `
  positionL relative;

  justify-content: center;
  align-items: center;
  
  height: ${radioGroup.radio.size}px;
  width: ${radioGroup.radio.size}px;

  border-width: ${radioGroup.radio.size * 0.1}px;
  border-style: solid;
  border-color: ${radioGroup.radio.backgroundColor};
  border-radius: ${radioGroup.radio.border.radius}px;

  ${
    checked
      ? `
          border-color: ${radioGroup.checked.backgroundColor};
        `
      : ``
  }

  ${
    disabled
      ? `
          border-color: ${radioGroup.disabled.backgroundColor};
        `
      : ``
  }
`,
);

const Dot = styled.View(
  ({
    theme: {
      yoga: {
        components: { radioGroup },
      },
    },
    checked,
    disabled,
  }) => `
  height: ${radioGroup.radio.size * 0.5}px;
  width: ${radioGroup.radio.size * 0.5}px;

  background-color: ${radioGroup.radio.backgroundColor};
  
  border-radius: ${radioGroup.radio.border.radius}px;

  ${
    checked
      ? `
          background-color: ${radioGroup.checked.backgroundColor};
        `
      : ``
  }

  ${
    disabled
      ? `
          background-color: ${radioGroup.disabled.backgroundColor};
        `
      : ``
  }
`,
);

const Shadow = styled.View(
  ({
    theme: {
      yoga: {
        components: { radioGroup },
      },
    },
  }) => `
  position: absolute;
  height: ${radioGroup.radio.size + radioGroup.radio.size * 0.4 * 2}px;
  width: ${radioGroup.radio.size + radioGroup.radio.size * 0.4 * 2}px;

  border-width: ${radioGroup.radio.size * 0.4}px;
  border-style: solid;
  border-color: ${radioGroup.checked.hover.backgroundColor};
  border-radius: ${radioGroup.radio.border.radius}px;

  opacity: 0.75;
`,
);

/** The Radio is a type of selection control that allows the user to select a
 * single option from a list.  */
const RadioGroupRadio = ({ value, style, disabled, ...rest }) => {
  const { onChange, small, selectedValue, ...context } = useContext(
    RadioGroupContext,
  );

  const [pressing, togglePressing] = useState(false);

  const inputValue = value;
  const checked = inputValue === selectedValue;

  return (
    <TouchableWithoutFeedback
      onPressIn={() => {
        togglePressing(true);
      }}
      onPress={() => {
        onChange({ value: inputValue });
      }}
      onPressOut={() => {
        togglePressing(false);
      }}
      disabled={disabled}
      {...context}
    >
      <RadioMark checked={checked} disabled={disabled} {...rest} style={style}>
        <Dot checked={checked} disabled={disabled} />
        {pressing && <Shadow />}
      </RadioMark>
    </TouchableWithoutFeedback>
  );
};

RadioGroupRadio.displayName = 'RadioGroup.Radio';

RadioGroupRadio.propTypes = {
  disabled: bool,
  value: oneOfType([string, number]),
  style: shape({}),
};

RadioGroupRadio.defaultProps = {
  disabled: false,
  value: '',
  style: {},
};

export default RadioGroupRadio;
