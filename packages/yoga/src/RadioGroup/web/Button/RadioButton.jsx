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
        components: { radiogroup },
      },
    },
    small,
    checked,
  }) => `
    box-sizing: border-box;
    background-color: ${radiogroup.button.backgroundColor};
    border-radius: ${radiogroup.button.border.radius}px;

    ${
      checked
        ? `
            background-color: ${radiogroup.checked.backgroundColor};
            box-shadow: 0 0 0  ${radiogroup.button.border.width}px ${radiogroup.checked.backgroundColor};
            color: ${radiogroup.checked.font.color};
            font-weight: ${radiogroup.checked.font.weight};
            z-index: 1;
          `
        : `
          &:hover, &:focus {
            background-color: ${radiogroup.hover.backgroundColor};
          }
        `
    }

    font-size: ${radiogroup.font.size}px;
    height: ${
      small ? radiogroup.button.height.small : radiogroup.button.height.normal
    }px;
    padding-left: ${radiogroup.button.padding.left}px;
    padding-right: ${radiogroup.button.padding.right}px;
  `}
`;

const ButtonWrapper = styled.div`
  border-style: solid;

  ${({
    theme: {
      yoga: {
        components: { radiogroup },
      },
    },
  }) => `
    border-color: ${radiogroup.button.border.color};
    border-top-width: ${radiogroup.button.border.width}px;
    border-bottom-width: ${radiogroup.button.border.width}px;
    
    border-left: none;
    border-right: none;
    
    &:first-child {
      border-right-width: 0;
      border-left-width: ${radiogroup.button.border.width}px;
      border-left-style: solid;
      border-left-color: ${radiogroup.button.border.color};

      border-top-left-radius: ${radiogroup.button.border.radius}px;
      border-bottom-left-radius: ${radiogroup.button.border.radius}px;
    }
  
    &:last-child {
      border-left-width: 0;

      border-right-width: ${radiogroup.button.border.width}px;
      border-right-style: solid;
      border-right-color: ${radiogroup.button.border.color};

      border-top-right-radius: ${radiogroup.button.border.radius}px;
      border-bottom-right-radius: ${radiogroup.button.border.radius}px;
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
