import React, { useContext } from 'react';
import { string, oneOfType, number } from 'prop-types';
import styled from 'styled-components';

import RadioGroupContext from '../RadioGroupContext';
import { HiddenInput } from '../../shared';

const RadioMark = styled.label`
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;

  min-width: 126px;
  white-space: nowrap;

  cursor: pointer;

  ${({
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
    box-sizing: border-box;
    background-color: ${radio.backgroundColor.enabled};
    border-radius: ${radio.border.radius}px;

    ${
      checked
        ? `
            background-color: ${radio.checked.backgroundColor.enabled};
            box-shadow: 0 0 0 1px ${radio.checked.backgroundColor.enabled};
            color: ${radio.checked.textColor.enabled};
            font-weight: ${radio.checked.font.weight};
            z-index: 1;
          `
        : `
          &:hover, &:focus {
            background-color: ${radio.hover.backgroundColor};
          }
        `
    }

    font-size: ${radio.font.size}px;
    height: ${small ? radio.height.small : radio.height.normal}px;
    padding-left: ${radio.padding.left}px;
    padding-right: ${radio.padding.right}px;
  `}
`;

/** Radio group allows user to select one option from a set of options. Use
value on group to set the selected option. */
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

RadioGroupButton.displayName = 'RadioGroup.Button';

RadioGroupButton.propTypes = {
  children: oneOfType([string, number]).isRequired,
  value: oneOfType([string, number]),
};

RadioGroupButton.defaultProps = {
  value: '',
};

export default RadioGroupButton;
