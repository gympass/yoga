import React, { useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { func, string, bool, number, shape, oneOfType } from 'prop-types';
import { Close } from '@gympass/yoga-icons';

import { theme } from '../../Theme';
import Field from './Field';

import Helper from './Helper';

import Fieldset from './Fieldset';
import Legend from './Legend';
import Label from './Label';

const Control = styled.div`
  box-sizing: border-box;
  width: ${({ full }) =>
    full
      ? '100%'
      : css`
          ${theme.components.input.width}px
        `};
`;

const IconWrapper = styled.div`
  ${({
    theme: {
      yoga: {
        spacing,
        components: { input },
      },
    },
  }) => `
    position: absolute;
    top: 6;
    right: 0;

    padding-right: ${spacing.small}px;
    padding-left: ${spacing.xxsmall}px;

    height: ${input.height}px;
    cursor: pointer;

    outline: none;

    &:hover svg, &:focus svg {
      fill: ${input.font.color.focus};
    }

    svg {
      height: ${input.height}px;
      width: 20px;
      fill: ${input.font.color.default};
    }
  `}
`;

const Input = React.forwardRef(
  (
    {
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
    const inputRef = ref || useRef(null);
    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {
      setInputValue(value);
    }, [value]);

    const cleanField = e => {
      if (e.type === 'click' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();

        onClean('');

        inputRef.current.focus();
      }
    };

    return (
      <Control full={full}>
        <Fieldset
          area-hidden="true"
          disabled={disabled}
          error={error}
          full={full}
          label={label}
          style={style}
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
            }}
            ref={inputRef}
            data-testid="input"
            value={inputValue}
            onChange={e => {
              setInputValue(e.target.value);
              onChange(e);
            }}
          />

          <Label error={error} disabled={disabled}>
            {label}
          </Label>

          {label && <Legend>{label}</Legend>}
          {cleanable && !readOnly && inputValue && (
            <IconWrapper
              tabIndex={0}
              disabled={disabled}
              onClick={cleanField}
              onKeyDown={cleanField}
              role="button"
            >
              <Close />
            </IconWrapper>
          )}
        </Fieldset>

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
