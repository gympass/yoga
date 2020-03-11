import React from 'react';
import { bool, string, objectOf, any } from 'prop-types';
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
    theme: {
      yoga: {
        components: { checkbox },
      },
    },
  }) => `
    width: ${checkbox.size}px;
    height: ${checkbox.size}px;

    margin-right: ${checkbox.margin.right}px;

    border-radius: ${checkbox.border.radius}px;
    border-width: ${checkbox.border.width}px;

    border-color: ${
      disabled ? checkbox.disabled.border.color : checkbox.border.color
    };

    ${
      checked
        ? `
        background-color: ${checkbox.checked.backgroundColor}; 

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

    ${error ? `border-color: ${checkbox.error.border.color};` : ''}

    ${
      error && checked
        ? `background-color: ${checkbox.error.backgroundColor};`
        : ''
    }
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
    theme: {
      yoga: {
        components: { checkbox },
      },
    },
  }) => `

  ${Label}:active,
  &:focus-within,
  &:hover  {
    ${Shadow} {
      display: block;
    }
  }

  ${Label}:active {
    ${Shadow} {
      background-color: ${hexToRgb(checkbox.hover.backgroundColor, 0.75)};

      box-shadow: 0 0 0 ${Math.round(
        checkbox.size * 0.33 + checkbox.border.width * 2,
      )}px
      ${hexToRgb(checkbox.hover.backgroundColor, 0.75)};
    }
  }

  &:focus-within {
    ${Shadow} {
      background-color: ${hexToRgb(checkbox.hover.backgroundColor, 0.5)};
      
      box-shadow: 0 0 0 ${Math.round(
        checkbox.size * 0.33 + checkbox.border.width * 2,
      )}px
        ${hexToRgb(checkbox.hover.backgroundColor, 0.5)};
      }
  }

  &:hover {
    ${Shadow} {
      background-color: ${hexToRgb(checkbox.hover.backgroundColor, 0.25)};

      box-shadow: 0 0 0 ${Math.round(
        checkbox.size * 0.33 + checkbox.border.width * 2,
      )}px
      ${hexToRgb(checkbox.hover.backgroundColor, 0.25)};
    }
  }
  `}
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
        components: { checkbox },
      },
    },
  }) => `
    color: ${
      error ? checkbox.helper.selected.font.color : checkbox.helper.font.color
    };

    font-size: ${checkbox.helper.font.size}px;
  `}
`;

const Checkbox = ({
  value,
  label,
  helper,
  disabled,
  checked,
  error,
  style,
  className,
  ...rest
}) => (
  <CheckboxWrapper style={style} className={className}>
    <CheckboxStyled>
      <Label>
        <Shadow />
        <CheckMark disabled={disabled} checked={checked} error={error}>
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
    {helper && (
      <HelperWrapper>
        <Helper error={error}>{helper}</Helper>
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
  error: bool,
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
  error: false,
  style: undefined,
  className: undefined,
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
