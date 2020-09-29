import React, { useRef } from 'react';
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

const ClearButton = styled(Close)`
  box-sizing: content-box;
  cursor: pointer;
  outline: none;
  position: absolute;
  right: 0;
  width: 20px;
  z-index: 1000000;

  ${({
    theme: {
      yoga: {
        spacing,
        components: { input },
      },
    },
  }) => css`
    fill: ${input.font.color.default};
    height: ${input.height}px;
    padding-left: ${spacing.xxsmall}px;
    padding-right: ${spacing.small}px;
    transform: translateY(-6px);

    &:hover,
    &:focus {
      fill: ${input.font.color.focus};
    }
  `};
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
            value={value}
            onChange={e => {
              onChange(e);
            }}
          />

          <Label error={error} disabled={disabled} {...props}>
            {label}
          </Label>

          {label && <Legend>{label}</Legend>}

          {cleanable && !readOnly && value && (
            <ClearButton
              tabIndex={0}
              disabled={disabled}
              onClick={cleanField}
              onKeyDown={cleanField}
              role="button"
            />
          )}
        </Fieldset>

        {(helper || maxLength || error) && (
          <Helper
            error={error}
            helper={helper}
            maxLength={maxLength}
            length={value.length}
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
