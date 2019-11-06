import React, { useContext } from 'react';
import { string, oneOfType, number } from 'prop-types';
import styled from 'styled-components';

import RadioGroupContext from '../RadioGroupContext';
import { HiddenInput } from '../../shared';

const RadioMark = styled.label(
  ({
    theme: {
      components: {
        radioGroup: {
          radio: {
            border: { radius: borderRadius },
            padding: { left: paddingLeft, right: paddingRight },
            height: { small: smallHeight, normal: normalHeight },
            font: { size: fontSize },
            backgroundColor: { enabled: backgroundColor },
            hover: { backgroundColor: hoverBackgroundColor },
            checked: {
              backgroundColor: { enabled: checkedBackgroundColor },
              textColor: { enabled: checkedTextColor },
              font: { weight: checkedFontWeight },
            },
          },
        },
      },
    },
    small,
    checked,
  }) => `
  cursor: pointer;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
  white-space: nowrap;
  min-width: 126px;

  background-color: ${backgroundColor};
  border-radius: ${borderRadius}px;
    
  ${
    checked
      ? `
          background-color: ${checkedBackgroundColor};
          box-shadow: 0 0 0 1px ${checkedBackgroundColor};
          color: ${checkedTextColor};
          font-weight: ${checkedFontWeight};
          z-index: 1;
        `
      : `
        &:hover, &:focus {
          background-color: ${hoverBackgroundColor};
        }
      `
  }

  font-size: ${fontSize}px;
  height: ${small ? smallHeight : normalHeight}px;
  padding-left: ${paddingLeft}px;
  padding-right: ${paddingRight}px;
`,
);

const RadioGroupButton = ({ children, value, ...rest }) => {
  const { name, onChange, small, selectedValue, ...context } = useContext(
    RadioGroupContext,
  );

  const inputValue = value || children;
  const checked = inputValue === selectedValue;

  return (
    <RadioMark small={small} checked={checked}>
      <HiddenInput
        type="radio"
        value={inputValue}
        checked={checked}
        name={name}
        onChange={onChange}
        {...rest}
        {...context}
      />
      {children}
    </RadioMark>
  );
};

RadioGroupButton.displayName = 'RadioGroup.Radio';

RadioGroupButton.propTypes = {
  children: oneOfType([string, number]).isRequired,
  value: oneOfType([string, number]),
};

RadioGroupButton.defaultProps = {
  value: '',
};

export default RadioGroupButton;
