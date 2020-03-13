import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { func, string, bool, number, shape, oneOfType } from 'prop-types';
import { Close } from '@gympass/yoga-icons';

import Wrapper from './Wrapper';
import Field from './Field';
import Label from './Label';
import Helper from './Helper';

const Control = styled.div`
  ${({ full }) => `
    width: ${full ? '100%' : 'auto'};
  `}
`;

const Input = React.forwardRef(
  (
    {
      className,
      cleanable,
      disabled,
      error,
      full,
      helper,
      label,
      maxLength,
      readOnly,
      style,
      value,
      onChange,
      onClean,
      ...props
    },
    ref,
  ) => {
    const [typed, setTyped] = useState(Boolean(value));
    const [inputValue, setInputValue] = useState(value);

    const inputRef = ref || useRef(null);

    const cleanField = e => {
      if (e.type === 'click' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();

        onClean('');
        inputRef.current.focus();
      }
    };

    useEffect(() => {
      setInputValue(value);
      setTyped(Boolean(value));
    }, [value]);

    return (
      <Control full={full}>
        <Wrapper
          disabled={disabled}
          error={error}
          full={full}
          className={className}
          style={style}
          typed={typed}
          label={label}
        >
          <Field
            {...props}
            {...{
              cleanable,
              disabled,
              error,
              full,
              readOnly,
              maxLength,
              typed,
            }}
            ref={inputRef}
            value={inputValue}
            onChange={e => {
              setTyped(Boolean(e.target.value));
              setInputValue(e.target.value);
              onChange(e);
            }}
          />
          {label && (
            <Label typed={typed} error={error} disabled={disabled}>
              {label}
            </Label>
          )}
          {cleanable && typed && !readOnly && (
            <Close
              tabIndex={0}
              disabled={disabled}
              onClick={cleanField}
              onKeyDown={cleanField}
              role="button"
            />
          )}
        </Wrapper>
        {(helper || maxLength || error) && (
          <Helper
            error={error}
            helper={helper}
            maxLength={maxLength}
            length={inputValue.length}
            disabled={disabled}
          />
        )}
      </Control>
    );
  },
);

Input.propTypes = {
  className: string,
  /** display a close icon to clean the field */
  cleanable: bool,
  disabled: bool,
  error: string,
  full: bool,
  /** A helper text to be displayed below field */
  helper: string,
  label: string,
  /** maximum length (number of characters) of value */
  maxLength: number,
  readOnly: bool,
  style: shape({}),
  value: oneOfType([string, number]),
  onChange: func,
  /** callback invoked when close icon is clicked, it returns a empty string to update your state */
  onClean: func,
};

Input.defaultProps = {
  className: undefined,
  cleanable: true,
  disabled: false,
  error: undefined,
  full: false,
  helper: undefined,
  label: 'Label',
  maxLength: undefined,
  readOnly: false,
  style: undefined,
  value: '',
  onChange: () => {},
  onClean: () => {},
};

export default Input;
