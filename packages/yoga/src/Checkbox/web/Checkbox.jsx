import React from 'react';
import { bool, string, objectOf, any, oneOf } from 'prop-types';
import styled from 'styled-components';
import { hexToRgb } from '@gympass/yoga-common';
import { Done } from '@gympass/yoga-icons';

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
    error,
    variant,
    theme: {
      yoga: {
        colors: { [variant]: color = [], negative },
        components: { checkbox },
      },
    },
  }) => `
    width: ${checkbox.size}px;
    height: ${checkbox.size}px;

    margin-right: ${checkbox.margin.right}px;

    border-radius: ${checkbox.border.radius}px;
    border-width: ${checkbox.border.width}px;
    border-color: ${disabled ? checkbox.disabled.border.color : color[3]};

    ${
      checked
        ? `
        background-color: ${color[3]}; 

        svg {
          position: absolute;
          top: 50%;
          left: 50%;
          
          fill: ${checkbox.checked.icon.color};

          transform: translate(-50%, -50%);
        }
        `
        : ''
    }

    ${
      disabled && checked
        ? `background-color: ${checkbox.disabled.backgroundColor};`
        : ''
    }

    ${error ? `border-color: ${negative[1]};` : ''}

    ${error && checked ? `background-color: ${negative[1]};` : ''}
  `}
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
    variant,
    theme: {
      yoga: {
        colors: { [variant]: color = [] },
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

      ${Label}:active {
        ${Shadow} {
          background-color: ${hexToRgb(color[1], 0.75)};

          box-shadow: 0 0 0 ${shadowSize}px ${hexToRgb(color[1], 0.75)};
        }
      }

      &:focus-within, &:hover {
        ${Shadow} {
          background-color: ${hexToRgb(color[1], 0.5)};
          
          box-shadow: 0 0 0 ${shadowSize}px ${hexToRgb(color[1], 0.5)};
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
        colors: { negative },
        components: { checkbox },
      },
    },
  }) => `
    color: ${error ? negative[1] : checkbox.helper.font.color};

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
  variant,
  ...rest
}) => (
  <CheckboxWrapper style={style} className={className}>
    <CheckboxStyled variant={variant}>
      <Label>
        <Shadow />
        <CheckMark
          {...{
            disabled,
            checked,
            error,
            variant,
          }}
        >
          {checked && <Done />}
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
  error: string,
  /** set a style to the checkbox container */
  style: objectOf(any),
  className: string,
  /** style the card following the theme (primary, secondary, tertiary) */
  variant: oneOf(['primary', 'secondary', 'tertiary']),
};

Checkbox.defaultProps = {
  label: undefined,
  value: undefined,
  helper: undefined,
  checked: false,
  disabled: false,
  error: undefined,
  style: undefined,
  className: undefined,
  variant: 'primary',
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
