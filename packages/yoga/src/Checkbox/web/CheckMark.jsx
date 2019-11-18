import React from 'react';
import { bool, string, func } from 'prop-types';
import styled from 'styled-components';
import { hexToRgb } from '@gympass/yoga-common';
import { HiddenInput } from '../../shared';
import check from './CheckIcon';

const CheckMarkStyled = styled.div(
  ({
    checked,
    disabled,
    error,
    theme: {
      components: { checkbox },
    },
  }) => `
    position: relative;
    width: ${checkbox.width}px;
    height: ${checkbox.height}px;
    border-radius: ${checkbox.border.radii}px;
    border-width: ${checkbox.border.width}px;
    border-style: solid;

    ${
      checked
        ? `background-color: ${checkbox.checked.backgroundColor}; 
            background-image: url(${check}); 
            background-size: 16px 16px;
            background-repeat: no-repeat;
            background-position: center;`
        : ``
    }

    ${
      disabled
        ? `border-color: ${checkbox.disabled.border.color};`
        : `border-color: ${checkbox.border.color};`
    }

    ${
      disabled && checked
        ? `background-color: ${checkbox.disabled.backgroundColor};`
        : ``
    }

    ${error ? `border-color: ${checkbox.error.border.color};` : ``}

    ${
      error && checked
        ? `background-color: ${checkbox.error.backgroundColor};`
        : ``
    }
  `,
);

const CircleHover = styled.div(
  ({
    hovered,
    theme: {
      components: { checkbox },
    },
  }) => `
    ${
      hovered
        ? `
          position: absolute;
          top: -17px;
          left: -17px;
          width: 54px;
          height: 54px;
          background-color: ${hexToRgb(
            checkbox.checked.backgroundColor,
            0.2,
          )};          
          border-radius: 100%;`
        : 'display: none;'
    }
  `,
);

const CheckMark = ({
  value,
  checked,
  hovered,
  disabled,
  error,
  onChange,
  ...rest
}) => (
  <CheckMarkStyled checked={checked} disabled={disabled} error={error}>
    <HiddenInput
      type="checkbox"
      value={value}
      checked={checked}
      onChange={onChange}
      {...rest}
    />
    <CircleHover hovered={hovered} />
  </CheckMarkStyled>
);

CheckMark.propTypes = {
  value: string,
  hovered: bool,
  checked: bool,
  disabled: bool,
  error: bool,
  onChange: func,
};

CheckMark.defaultProps = {
  value: '',
  hovered: false,
  checked: false,
  disabled: false,
  error: false,
  onChange: () => {},
};

CheckMark.displayName = 'CheckMark';

export default CheckMark;
