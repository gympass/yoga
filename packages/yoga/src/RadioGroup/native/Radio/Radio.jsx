import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { string, oneOfType, number, bool } from 'prop-types';
import { TouchableWithoutFeedback } from 'react-native';
import { hexToRgb } from '@gympass/yoga-common';

import RadioGroupContext from '../../RadioGroupContext';

const RadioMark = styled.View(
  ({
    theme: {
      yoga: {
        colors: { white },
        components: { radiogroup },
      },
    },
    checked,
    disabled,
    pressed,
  }) => `
  justify-content: center;
  align-items: center;
  
  height: ${radiogroup.radio.size}px;
  width: ${radiogroup.radio.size}px;

  background-color: ${
    pressed ? hexToRgb(radiogroup.hover.backgroundColor, 0.75) : white
  };

  border-width: ${radiogroup.radio.size * 0.1}px;
  border-style: solid;
  border-color: ${radiogroup.radio.backgroundColor};
  border-radius: ${radiogroup.radio.border.radius}px;

  ${
    checked
      ? `
          border-color: ${radiogroup.checked.backgroundColor};
          background-color: ${
            pressed
              ? hexToRgb(radiogroup.checked.hover.backgroundColor, 0.75)
              : white
          }
        `
      : ``
  }

  ${
    disabled
      ? `
          border-color: ${radiogroup.disabled.backgroundColor};
        `
      : ``
  }
`,
);

const Dot = styled.View(
  ({
    theme: {
      yoga: {
        components: { radiogroup },
      },
    },
    checked,
    disabled,
  }) => `
  height: ${radiogroup.radio.size * 0.5}px;
  width: ${radiogroup.radio.size * 0.5}px;

  background-color: ${radiogroup.radio.backgroundColor};
  border-radius: ${radiogroup.radio.border.radius}px;

  ${
    checked
      ? `
          background-color: ${radiogroup.checked.backgroundColor};
        `
      : ``
  }

  ${
    disabled
      ? `
          background-color: ${radiogroup.disabled.backgroundColor};
        `
      : ``
  }
`,
);

const Shadow = styled.View(
  ({
    checked,
    theme: {
      yoga: {
        components: { radiogroup },
      },
    },
  }) => `
  position: absolute;
  height: ${radiogroup.radio.size + radiogroup.radio.size * 0.4 * 2}px;
  width: ${radiogroup.radio.size + radiogroup.radio.size * 0.4 * 2}px;

  border-width: ${radiogroup.radio.size * 0.4}px;
  border-style: solid;
  border-color: ${
    checked
      ? hexToRgb(radiogroup.checked.hover.backgroundColor, 0.75)
      : hexToRgb(radiogroup.hover.backgroundColor, 0.75)
  };
  border-radius: ${radiogroup.radio.border.radius}px;

  opacity: 0.75;
`,
);

/** The Radio is a type of selection control that allows the user to select a
 * single option from a list.  */
const RadioGroupRadio = ({ value, disabled, ...rest }) => {
  const { onChange, small, selectedValue, ...context } =
    useContext(RadioGroupContext);

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
      <RadioMark
        checked={checked}
        disabled={disabled}
        pressed={pressing}
        {...rest}
      >
        {checked && <Dot checked={checked} disabled={disabled} />}
        {pressing && <Shadow checked={checked} />}
      </RadioMark>
    </TouchableWithoutFeedback>
  );
};

RadioGroupRadio.displayName = 'RadioGroup.Radio';

RadioGroupRadio.propTypes = {
  disabled: bool,
  value: oneOfType([string, number]),
};

RadioGroupRadio.defaultProps = {
  disabled: false,
  value: '',
};

export default RadioGroupRadio;
