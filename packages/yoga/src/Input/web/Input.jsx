import React, { useRef } from 'react';
import styled, { css } from 'styled-components';
import { func, string, bool, number, shape, oneOfType, node } from 'prop-types';
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
    disabled,
    hasIconRight = false,
    theme: {
      yoga: {
        colors,
        spacing,
        components: { input },
      },
    },
  }) => css`
    position: absolute;
    top: 0;
    right: ${hasIconRight ? spacing.large : 0}px;

    padding-right: ${spacing.small}px;
    padding-left: ${spacing.xxsmall}px;

    height: ${input.height}px;
    cursor: pointer;

    outline: none;

    &:hover svg,
    &:focus svg {
      fill: ${input.font.color.focus};
    }

    svg {
      height: ${input.height}px;
      width: 20px;
      fill: ${input.font.color.default};
    }

    ${disabled
      ? `
      cursor: not-allowed;
      pointer-events: none;
      svg {
        fill: ${colors.text.disabled};
      }
    `
      : ''}
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
      hideMaxLength,
      rightIcon,
      testId,
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
      <Control full={full} data-testid={testId}>
        <Fieldset
          disabled={disabled}
          error={error}
          full={full}
          label={label}
          style={style}
          value={value}
        >
          <Field
            {...props}
            {...{
              label,
              cleanable,
              disabled,
              error,
              full,
              readOnly,
              maxLength,
            }}
            ref={inputRef}
            value={value}
            onChange={onChange}
          />

          <Label error={error} disabled={disabled}>
            {label}
          </Label>

          {label && <Legend>{label}</Legend>}
          {cleanable && !readOnly && value && (
            <IconWrapper
              tabIndex={0}
              disabled={disabled}
              onClick={cleanField}
              onKeyDown={cleanField}
              width={20}
              height={20}
              role="button"
              hasIconRight={!!rightIcon}
            >
              <Close aria-label="Clear" />
            </IconWrapper>
          )}

          {!!rightIcon && !readOnly && (
            <IconWrapper
              tabIndex={0}
              disabled={disabled}
              width={20}
              height={20}
              role="button"
            >
              {rightIcon}
            </IconWrapper>
          )}
        </Fieldset>
        {(helper || maxLength || error) && (
          <Helper
            error={error}
            helper={helper}
            maxLength={maxLength}
            length={value.length}
            disabled={disabled}
            hideMaxLength={hideMaxLength}
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
  /** a helper text to be displayed below field */
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
  /** when max length helper is unnecessary to appear */
  hideMaxLength: bool,
  placeholder: string,
  rightIcon: node,
  testId: string,
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
  hideMaxLength: false,
  placeholder: undefined,
  rightIcon: undefined,
  testId: undefined,
};

export default Input;
