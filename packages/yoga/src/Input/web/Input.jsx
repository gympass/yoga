import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { func, string, bool, oneOf, number } from 'prop-types';
import { Close } from '@gympass/yoga-icons';

const ICON_SIZE = 24;

const Label = styled.label`
  position: absolute;
  align-self: flex-start;

  pointer-events: none;
  user-select: none;

  ${({
    theme: {
      yoga: {
        colors,
        components: { input },
      },
    },
  }) => `
    top: ${input.padding.top * 2}px;
    left: ${input.padding.left}px;
    transform: translateY(-50%);

    background-color: ${colors.gray.surface};
    color: ${input.label.color};
  `}
`;

const Field = styled.input`
  background-color: transparent;

  outline: none;

  ${({
    typed,
    variant,
    theme: {
      yoga: {
        colors: { [variant]: color },
        components: { input },
      },
    },
  }) => css`
    height: ${input.height}px;

    padding-top: ${input.padding.top}px;
    padding-right: ${ICON_SIZE + input.padding.right * 2}px;
    padding-bottom: ${input.padding.bottom}px;
    padding-left: ${input.padding.left}px;

    border-radius: ${input.border.radius}px;
    border: ${input.border.width}px solid ${input.border.color.default};

    color: ${input.font.color.default};
    font-size: ${input.font.size}px;
    font-weight: ${input.font.weight};

    &:focus {
      color: ${input.font.color.focus};

      & + ${Label} {
        top: 0;
        transform: translateY(-50%);
        left: ${input.padding.left - 2}px;

        padding-right: ${input.label.padding.right}px;
        padding-left: ${input.label.padding.left}px;

        font-size: ${input.label.font.size.typed}px;
        font-weight: ${input.label.font.weight.typed};

        color: ${color[3]};
      }
    }

    &:focus,
    &:hover:not(:disabled) {
      border-color: ${input.border.color.typed};
    }

    &:disabled {
      cursor: not-allowed;
    }

    ${typed
      ? css`
          border-color: ${input.border.color.typed};

          & + ${Label} {
            top: 0;
            transform: translateY(-50%);
            left: ${input.padding.left - 2}px;

            padding-right: ${input.label.padding.right}px;
            padding-left: ${input.label.padding.left}px;

            font-size: ${input.label.font.size.typed}px;
            font-weight: ${input.label.font.weight.typed};
          }
        `
      : ''}
  `}

  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    display: none;
  }
`;

const Helper = styled.div`
  ${({
    theme: {
      yoga: {
        components: { input },
      },
    },
  }) => `
    display: flex;
    margin-top: ${input.helper.margin.top}px;
  `}
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  vertical-align: top;

  ${({
    disabled,
    error,
    theme: {
      yoga: {
        colors,
        spacing,
        components: { input },
      },
    },
  }) => `
    margin: ${spacing.xsmall}px;

    + svg,
    svg {
      position: absolute;
      top: 0;
      right: 0;

      padding-right: ${spacing.xsmall}px;
      padding-left: ${spacing.xsmall}px;

      height: 100%;

      fill: ${input.font.color.default};

      box-sizing: content-box;
      cursor: pointer;
    }

    ${
      error
        ? `
            ${Label}, ${Helper} {
              color: ${colors.negative[1]};
            }

            ${Field} {
              border-color: ${colors.negative[1]};
            }
          `
        : ''
    }

    ${
      disabled
        ? `
            + svg,
            svg {
              fill: ${colors.disabled.background};
              pointer-events: none;
            }
            ${Label}, ${Helper} {
              color: ${colors.disabled.background};
            }

            ${Field} {
              border-color: ${colors.disabled.background};
              color: ${colors.disabled.background};
            }
          `
        : ''
    }
  `}
`;

const Relative = styled.div`
  position: relative;
`;

const Info = styled.span`
  ${({
    right,
    theme: {
      yoga: {
        components: { input },
      },
    },
  }) => `
    font-size: ${input.helper.font.size}px;
    
    ${right ? 'margin-left: auto;' : ''}
  `}
`;

const Input = React.forwardRef(
  (
    {
      label,
      disabled,
      error,
      value,
      cleanable,
      onChange,
      onClean,
      variant,
      maxLength,
      helper,
      readOnly,
      ...props
    },
    ref,
  ) => {
    const [typed, setTyped] = useState(Boolean(value));
    const [inputValue, setInputValue] = useState(value || '');

    const inputRef = ref || useRef(null);

    return (
      <Wrapper typed={typed} disabled={disabled} error={error}>
        <Relative>
          <Field
            {...props}
            {...{
              typed,
              disabled,
              variant,
              maxLength,
              readOnly,
            }}
            ref={inputRef}
            value={inputValue}
            onChange={e => {
              setTyped(Boolean(e.target.value));
              setInputValue(e.target.value);
              onChange(e);
            }}
          />
          {label && <Label typed={typed}>{label}</Label>}
          {cleanable && typed && !readOnly && (
            <Close
              disabled={disabled}
              onClick={e => {
                setTyped(false);
                setInputValue('');
                inputRef.current.focus();
                onClean(e);
                onChange(e);
              }}
            />
          )}
        </Relative>
        {(helper || maxLength || error) && (
          <Helper>
            {(error || helper) && <Info>{error || helper}</Info>}
            {maxLength && (
              <Info right>
                {inputValue.length}/{maxLength}
              </Info>
            )}
          </Helper>
        )}
      </Wrapper>
    );
  },
);

Input.propTypes = {
  /** display a close icon to clean the field */
  cleanable: bool,
  disabled: bool,
  error: string,
  label: string,
  onChange: func,
  /** callback invoked when close icon is clicked */
  onClean: func,
  value: string,
  /** style the label following the theme (primary, secondary, tertiary) */
  variant: oneOf(['primary', 'secondary', 'tertiary']),
  /** maximum length (number of characters) of value */
  maxLength: number,
  /** A helper text to be displayed below field */
  helper: string,
  readOnly: bool,
};

Input.defaultProps = {
  cleanable: true,
  disabled: false,
  error: undefined,
  label: 'Label',
  onChange: () => {},
  onClean: () => {},
  value: undefined,
  variant: 'primary',
  maxLength: undefined,
  helper: undefined,
  readOnly: false,
};

export default Input;
