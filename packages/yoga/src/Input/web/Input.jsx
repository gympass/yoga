import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { func, string, bool, oneOf } from 'prop-types';
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
    top: 50%;
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
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;

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
            ${Label} {
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
            ${Label} {
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
      ...props
    },
    ref,
  ) => {
    const [typed, setTyped] = useState(Boolean(value));
    const [inputValue, setInputValue] = useState(value || '');

    const inputRef = ref || useRef(null);

    return (
      <Wrapper typed={typed} disabled={disabled} error={error}>
        <Field
          {...props}
          ref={inputRef}
          typed={typed}
          disabled={disabled}
          value={inputValue}
          variant={variant}
          onChange={e => {
            setTyped(Boolean(e.target.value));
            setInputValue(e.target.value);
            onChange(e);
          }}
        />
        {label && <Label typed={typed}>{label}</Label>}
        {cleanable && (
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
      </Wrapper>
    );
  },
);

Input.propTypes = {
  cleanable: bool,
  disabled: bool,
  error: bool,
  label: string,
  onChange: func,
  onClean: func,
  value: string,
  /** style the label following the theme (primary, secondary, tertiary) */
  variant: oneOf(['primary', 'secondary', 'tertiary']),
};

Input.defaultProps = {
  cleanable: true,
  disabled: false,
  error: false,
  label: 'Label',
  onChange: () => {},
  onClean: () => {},
  value: undefined,
  variant: 'primary',
};

export default Input;
