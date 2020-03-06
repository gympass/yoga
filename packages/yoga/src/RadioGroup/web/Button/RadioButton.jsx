import React, { useContext } from 'react';
import { string, oneOfType, number } from 'prop-types';
import styled from 'styled-components';

import RadioGroupContext from '../../RadioGroupContext';
import { HiddenInput } from '../../../shared';

const Button = styled.label`
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
        components: { radioGroup },
      },
    },
    small,
    checked,
  }) => `
    box-sizing: border-box;
    background-color: ${radioGroup.button.backgroundColor};
    border-radius: ${radioGroup.button.border.radius}px;

    ${
      checked
        ? `
            background-color: ${radioGroup.checked.backgroundColor};
            box-shadow: 0 0 0  ${radioGroup.button.border.width}px ${radioGroup.checked.backgroundColor};
            color: ${radioGroup.checked.font.color};
            font-weight: ${radioGroup.checked.font.weight};
            z-index: 1;
          `
        : `
          &:hover, &:focus {
            background-color: ${radioGroup.hover.backgroundColor};
          }
        `
    }

    font-size: ${radioGroup.font.size}px;
    height: ${
      small ? radioGroup.button.height.small : radioGroup.button.height.normal
    }px;
    padding-left: ${radioGroup.button.padding.left}px;
    padding-right: ${radioGroup.button.padding.right}px;
  `}
`;

const ButtonWrapper = styled.div`
  border-style: solid;

  ${({
    theme: {
      yoga: {
        components: { radioGroup },
      },
    },
  }) => `
    border-color: ${radioGroup.button.border.color};
    border-top-width: ${radioGroup.button.border.width}px;
    border-bottom-width: ${radioGroup.button.border.width}px;
    
    border-left: none;
    border-right: none;
    
    &:first-child {
      border-right-width: 0;
      border-left-width: ${radioGroup.button.border.width}px;
      border-left-style: solid;
      border-left-color: ${radioGroup.button.border.color};

      border-top-left-radius: ${radioGroup.button.border.radius}px;
      border-bottom-left-radius: ${radioGroup.button.border.radius}px;
    }
  
    &:last-child {
      border-left-width: 0;

      border-right-width: ${radioGroup.button.border.width}px;
      border-right-style: solid;
      border-right-color: ${radioGroup.button.border.color};

      border-top-right-radius: ${radioGroup.button.border.radius}px;
      border-bottom-right-radius: ${radioGroup.button.border.radius}px;
    }
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
    <ButtonWrapper>
      <Button {...{ small, checked }}>
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
      </Button>
    </ButtonWrapper>
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
