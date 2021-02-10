import React from 'react';
import { bool, string, objectOf, any } from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { hexToRgb } from '@gympass/yoga-common';
import { Check } from '@gympass/yoga-icons';

import { HiddenInput } from '../../shared';

const CheckboxWrapper = styled.div`
  display: inline-block;

  * {
    box-sizing: border-box;
  }
`;

const CheckMark = styled.div`
  position: relative;

  border-style: solid;

  ${({
    checked,
    disabled,
    inverted,
    error,
    theme: {
      yoga: {
        colors: { primary, feedback, elements, white },
        components: { checkbox },
      },
    },
  }) => {
    let borderColor;
    let bgColor = 'transparent';
    let checkColor = checkbox.checked.icon.color;

    if (error) {
      [, borderColor] = feedback.attention;

      if (checked) {
        [, bgColor] = feedback.attention;
      }
    } else if (disabled) {
      borderColor = checkbox.disabled.border.color;

      if (checked) {
        bgColor = checkbox.disabled.backgroundColor;
        borderColor = elements.lineAndBorders;
      }
    } else if (checked) {
      borderColor = primary;
      bgColor = primary;
      checkColor = checkbox.checked.icon.color;

      if (inverted) {
        bgColor = white;
        borderColor = white;
        checkColor = primary;
      }
    } else if (inverted) {
      borderColor = white;
      checkColor = primary;
    }

    return `
    width: ${checkbox.size}px;
    height: ${checkbox.size}px;

    margin-right: ${checkbox.margin.right}px;
    
    background-color: ${bgColor}; 

    border-radius: ${checkbox.border.radius}px;
    border-width: ${checkbox.border.width}px;
    border-color: ${borderColor};

    svg {
      position: absolute;
      top: 50%;
      left: 50%;

      fill: ${checkColor};

      transform: translate(-50%, -50%);
    }`;
  }}
`;

const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;

  cursor: pointer;

  ${({
    theme: {
      yoga: {
        components: { checkbox },
      },
    },
  }) => `
    font-size: ${checkbox.label.font.size}px;
    color: ${checkbox.label.font.color};
  `}
`;

const Shadow = styled.span`
  position: absolute;
  display: none;

  ${({
    theme: {
      yoga: {
        components: { checkbox },
      },
    },
  }) => `
    width: ${checkbox.size}px;
    height: ${checkbox.size}px;
    border-radius: ${checkbox.hover.border.radius}px;
  `}
`;

const CheckboxStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${({
    theme: {
      yoga: {
        colors: { elements },
        components: { checkbox },
      },
    },
  }) => {
    const shadowSize = Math.round(checkbox.size * 0.33);

    return `
      ${Label}:active,
      &:focus-within,
      &:hover  {
        ${Shadow} {
          display: block;
        }
      }

      &:hover {
        ${Shadow} {
          background-color: ${hexToRgb(elements.lineAndBorders, 0.25)};
          
          box-shadow: 0 0 0 ${shadowSize}px 
            ${hexToRgb(elements.lineAndBorders, 0.25)};
        }
      }

      &:focus-within {
        ${Shadow} {
          background-color: ${hexToRgb(elements.lineAndBorders, 0.5)};
          
          box-shadow: 0 0 0 ${shadowSize}px 
            ${hexToRgb(elements.lineAndBorders, 0.5)};
        }
      }

      ${Label}:active {
        ${Shadow} {
          background-color: ${hexToRgb(elements.lineAndBorders, 0.75)};

          box-shadow: 0 0 0 ${shadowSize}px 
            ${hexToRgb(elements.lineAndBorders, 0.75)};
        }
      }
    `;
  }}
`;

const HelperWrapper = styled.div`
  width: 100%;

  ${({
    theme: {
      yoga: {
        components: { checkbox },
      },
    },
  }) => `
    margin-top: ${checkbox.helper.margin.top}px;
  `}
`;

const Helper = styled.span`
  ${({
    error,
    theme: {
      yoga: {
        colors: { feedback },
        components: { checkbox },
      },
    },
  }) => `
    color: ${error ? feedback.attention[1] : checkbox.helper.font.color};

    font-size: ${checkbox.helper.font.size}px;
  `}
`;

/** The checkbox component is used when the user needs to select one or more
 * items on a task. This component can also allow the user to turn an option on
 * or off.  */
const Checkbox = ({
  value,
  label,
  helper,
  disabled,
  checked,
  error,
  style,
  className,
  inverted,
  theme: {
    yoga: {
      components: { checkbox },
    },
  },
  ...rest
}) => (
  <CheckboxWrapper style={style} className={className}>
    <CheckboxStyled>
      <Label>
        <Shadow />
        <CheckMark
          {...{
            disabled,
            checked,
            error,
            inverted,
          }}
        >
          {checked && <Check width={checkbox.size} height={checkbox.size} />}
        </CheckMark>
        <HiddenInput
          type="checkbox"
          checked={checked}
          disabled={disabled}
          {...rest}
        />
        {label}
      </Label>
    </CheckboxStyled>
    {(helper || error) && (
      <HelperWrapper>
        <Helper error={error}>{error || helper}</Helper>
      </HelperWrapper>
    )}
  </CheckboxWrapper>
);

Checkbox.propTypes = {
  label: string,
  /** short helper text under checkbox */
  helper: string,
  value: string,
  checked: bool,
  disabled: bool,
  inverted: bool,
  error: string,
  /** set a style to the checkbox container */
  style: objectOf(any),
  className: string,
};

Checkbox.defaultProps = {
  label: undefined,
  value: undefined,
  helper: undefined,
  checked: false,
  disabled: false,
  inverted: false,
  error: undefined,
  style: undefined,
  className: undefined,
};

Checkbox.displayName = 'Checkbox';

export default withTheme(Checkbox);
