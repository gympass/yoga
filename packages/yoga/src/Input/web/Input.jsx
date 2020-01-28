import React from 'react';
import styled, { css } from 'styled-components';
import { func, string, bool } from 'prop-types';
import { Visibility, VisibilityOff } from '@gympass/yoga-icons';

const Label = styled.label`
  background-color: white;
  position: absolute;
  top: 12px;
  left: 12px;
  pointer-events: none;
  padding: 0 4px;

  ${({
    theme: {
      yoga: { colors },
    },
  }) => `
   color: ${colors.gray[7]};
`}
`;

const Field = styled.input`
  height: 100%;
  border-radius: 8px;
  padding: 12px;
  background-color: transparent;

  font-size: 16px;

  outline: none;

  &:focus {
    & + ${Label} {
      top: 0;
      transform: translateY(-50%);
      left: 10px;

      font-size: 12px;
      font-weight: bold;

      color: #f46152;
    }
  }

  ${({
    typed,
    theme: {
      yoga: { colors },
    },
  }) => `
  
  border: 1px solid ${colors.gray[3]};

  &:focus,
  &:hover:not(:disabled) {
    border-color: ${colors.dark};
  }

  &:disabled {
    cursor: not-allowed;
  }

  ${
    typed
      ? `
        border-color: ${colors.dark};

        & + ${Label} {
          top: 0;
          transform: translateY(-50%);
          left: 10px;
      
          font-size: 12px;
          font-weight: bold;
        }
        `
      : ''
  }
    `}
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  height: 48px;

  ${({
    error,
    theme: {
      yoga: { colors },
    },
  }) =>
    error
      ? css`
          ${Label} {
            color: ${colors.negative[1]};
          }

          ${Field} {
            border-color: ${colors.negative[1]};
          }
        `
      : ''}

  ${({
    disabled,
    theme: {
      yoga: { colors },
    },
  }) =>
    disabled
      ? css`
          ${Label} {
            color: ${colors.disabled};
          }

          ${Field} {
            border-color: ${colors.disabled};
            color: ${colors.disabled};
          }
        `
      : ''}
`;

const Input = ({ label, disabled, error, value, onChange, ...props }) => {
  const [typed, setTyped] = React.useState(Boolean(value));
  const [inputValue, setInputValue] = React.useState(value || '');

  return (
    <Wrapper typed={typed} disabled={disabled} error={error}>
      <Field
        {...props}
        typed={typed}
        disabled={disabled}
        value={inputValue}
        onChange={e => {
          setTyped(Boolean(e.target.value));
          setInputValue(e.target.value);
          onChange(e);
        }}
        // onClick={() => setInputValue('')}
      />
      {label && <Label typed={typed}>{label}</Label>}
    </Wrapper>
  );
};

Input.propTypes = {
  onChange: func,
  label: string,
  disabled: bool,
  error: bool,
  value: string,
};

Input.defaultProps = {
  onChange: () => {},
  label: 'Label',
  disabled: false,
  error: false,
  value: undefined,
};

export default Input;
