import React from 'react';
import { bool } from 'prop-types';
import styled from 'styled-components';
import { hexToRgb } from '@gympass/yoga-common';
import check from './CheckIcon';

const CheckMarkStyled = styled.View(
  ({
    checked,
    disabled,
    error,
    theme: {
      components: { checkbox },
    },
  }) => `
    width: 24px;
    height: 24px;

    border-radius: ${checkbox.border.radii}px;
    border-width: ${checkbox.border.width}px;
    border-style: solid;

    ${checked ? `background-color: ${checkbox.checked.backgroundColor};` : ''}

    border-color: ${
      disabled
        ? `${checkbox.disabled.border.color};`
        : `${checkbox.border.color};`
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
  `,
);

const CheckIcon = styled.Image`
  width: 16px;
  height: 11px;
  margin: 4px 2px 4px 2px;
`;

const CirclePressed = styled.View(
  ({
    theme: {
      components: { checkbox },
    },
  }) => `
    position: absolute;
    top: -17px;
    left: -17px;
    width: 54px;
    height: 54px;
    background-color: ${hexToRgb(
      checkbox.checked.backgroundColor,
      0.2,
    )};          
    border-radius: ${checkbox.hover.border.radii};
  `,
);

const CheckMark = ({ checked, disabled, pressed, error, ...rest }) => (
  <CheckMarkStyled
    checked={checked}
    disabled={disabled}
    error={error}
    {...rest}
  >
    {pressed && !disabled && <CirclePressed pressed={pressed} />}
    {checked && <CheckIcon source={{ uri: check }} />}
  </CheckMarkStyled>
);

CheckMark.propTypes = {
  checked: bool,
  disabled: bool,
  pressed: bool,
  error: bool,
};

CheckMark.defaultProps = {
  checked: false,
  disabled: false,
  pressed: false,
  error: false,
};

CheckMark.displayName = 'CheckMark';

export default CheckMark;
