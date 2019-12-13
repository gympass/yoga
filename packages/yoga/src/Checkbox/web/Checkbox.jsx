import React from 'react';
import { bool, string, objectOf, any } from 'prop-types';
import styled, { css } from 'styled-components';
import { hexToRgb } from '@gympass/yoga-common';
import CheckMark from './CheckMark';
import { HiddenInput } from '../../shared';

const CheckboxWrapper = styled.div`
  display: inline-block;

  * {
    box-sizing: border-box;
  }
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
  }) => css`
    &:hover {
      ${CheckMark} {
        :before {
          content: '';
          position: absolute;
          top: -17px;
          left: -17px;

          width: 54px;
          height: 54px;

          background-color: ${hexToRgb(checkbox.checked.backgroundColor, 0.2)};
          border-radius: ${checkbox.hover.border.radius}px;
        }
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
        <CheckMark disabled={disabled} checked={checked} error={error}>
          <HiddenInput
            type="checkbox"
            checked={checked}
            disabled={disabled}
            {...rest}
          />
        </CheckMark>
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
  label: string.isRequired,
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
