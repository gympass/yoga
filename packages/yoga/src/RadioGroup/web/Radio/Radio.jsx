import React, { useContext } from 'react';
import { bool, oneOfType, string, number, shape } from 'prop-types';
import styled from 'styled-components';
import { hexToRgb } from '@gympass/yoga-common';

import RadioGroupContext from '../../RadioGroupContext';
import { HiddenInput } from '../../../shared';

const Radio = styled.span`
  position: relative;
  display: block;

  pointer-events: none;

  ${({
    theme: {
      yoga: {
        components: {
          radiogroup: { radio },
        },
      },
    },
  }) =>
    `
      width: ${radio.size}px;
      height: ${radio.size}px;

      border-width: ${radio.size * 0.1}px; 
      border-style: solid;
      border-color: ${radio.backgroundColor};
      border-radius: ${radio.border.radius}px;
    `}
`;

const Input = styled(HiddenInput)`
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`;

const Wrapper = styled.div`
  position: relative;

  ${({
    checked,
    disabled,
    theme: {
      yoga: {
        components: { radiogroup },
      },
    },
  }) => {
    const stateColors = {
      hover: checked
        ? hexToRgb(radiogroup.checked.backgroundColor, 0.25)
        : hexToRgb(radiogroup.hover.backgroundColor, 0.25),
      focusWithin: hexToRgb(radiogroup.checked.hover.backgroundColor, 0.5),
      active: checked
        ? hexToRgb(radiogroup.checked.hover.backgroundColor, 0.75)
        : hexToRgb(radiogroup.hover.backgroundColor, 0.75),
    };

    return `
    width: ${radiogroup.radio.size}px;
    height: ${radiogroup.radio.size}px;

    &:hover {
      ${Input} {
        cursor: pointer;
      }
      ${Radio} {
        z-index: 1;
        box-shadow: 0 0 0 ${radiogroup.radio.size * 0.4}px ${stateColors.hover};
        background-color: ${hexToRgb(radiogroup.hover.backgroundColor, 0.25)};
      }
    }

    &:active {
      ${Radio} {
        box-shadow: 0 0 0 ${radiogroup.radio.size * 0.4}px ${
      stateColors.active
    };
        background-color: ${hexToRgb(radiogroup.hover.backgroundColor, 0.75)};
      }
    }

    ${
      checked
        ? `
    
      &:hover {
        ${Radio} {
          background-color: ${stateColors.hover};
          box-shadow: 0 0 0 ${radiogroup.radio.size * 0.4}px 
            ${stateColors.hover};
        }
      }
    
      &:focus-within {
        ${Radio} {
          z-index: 1;
          background-color: ${stateColors.focusWithin};
          box-shadow: 0 0 0 ${radiogroup.radio.size * 0.4}px 
            ${stateColors.focusWithin};
        }
      }
    
      &:active {
        ${Radio} {
          background-color: ${stateColors.active};
          box-shadow: 0 0 0 ${radiogroup.radio.size * 0.4}px 
            ${stateColors.active};
        }
      }

      ${Radio} {
        border-color: ${radiogroup.checked.backgroundColor};

        &:after {
          position: absolute;
          top: 50%;
          left: 50%;

          width: ${radiogroup.radio.size * 0.5}px;
          height: ${radiogroup.radio.size * 0.5}px;
          
          border-radius: 100%;
          background-color: ${radiogroup.checked.backgroundColor};
          
          transform: translate(-50%, -50%);
          
          content: '';
        }
      }
    `
        : ''
    }

    ${
      disabled
        ? `
        ${Radio} {
          border-color: ${radiogroup.disabled.backgroundColor};
        }

        &:hover {
          ${Input} {
            cursor: not-allowed;
          }
          ${Radio} {
            box-shadow: none;
          }
        }
      `
        : ``
    }

    ${
      disabled && checked
        ? `
          ${Radio}:after {
            background-color: ${radiogroup.disabled.backgroundColor};
          }
        `
        : ''
    }
  `;
  }}
`;

/** The Radio is a type of selection control that allows the user to select a
 * single option from a list. */
const RadioGroupRadio = ({ value, disabled, style, className, ...rest }) => {
  const { name, onChange, selectedValue, ...context } = useContext(
    RadioGroupContext,
  );

  const inputValue = value;
  const checked = inputValue === selectedValue;

  return (
    <Wrapper
      {...{
        checked,
        disabled,
        style,
        className,
      }}
    >
      <Radio checked={checked} />
      <Input
        type="radio"
        {...{
          value,
          checked,
          name,
          onChange,
          disabled,
        }}
        {...rest}
        {...context}
      />
    </Wrapper>
  );
};

RadioGroupRadio.displayName = 'RadioGroup.Radio';

RadioGroupRadio.propTypes = {
  className: string,
  disabled: bool,
  style: shape({}),
  value: oneOfType([string, number]),
};

RadioGroupRadio.defaultProps = {
  className: undefined,
  disabled: false,
  style: {},
  value: '',
};

export default RadioGroupRadio;
