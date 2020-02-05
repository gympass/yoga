import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { func, string, bool, oneOf, number } from 'prop-types';
import { Close } from '@gympass/yoga-icons';

const ICON_SIZE = 24;

const labelTransition = css`
  ${({
    theme: {
      yoga: {
        transitions,
        components: { input },
      },
    },
  }) => `
    top: 0;
    transform: translateY(-50%);
    transition: ${transitions};

    left: ${input.padding.left - 2}px;

    padding-right: ${input.label.padding.right}px;
    padding-left: ${input.label.padding.left}px;

    font-size: ${input.label.font.size.typed}px;
    font-weight: ${input.label.font.weight.typed};
  `}
`;

const Label = styled.label`
  position: absolute;

  letter-spacing: normal;
  pointer-events: none;
  user-select: none;

  ${({
    theme: {
      yoga: {
        colors,
        transitions,
        components: { input },
      },
    },
  }) => css`
    top: ${input.padding.top * 2}px;
    left: ${input.padding.left}px;

    background-color: ${colors.gray.surface};

    transform: translateY(-50%);
    transition: ${transitions};

    font-size: ${input.label.font.size.default}px;
    font-weight: ${input.label.font.weight.default};
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
        ${labelTransition}
        color: ${color[3]};
      }
    }

    &:focus,
    &:hover {
      border-color: ${input.border.color.typed};
    }

    &:disabled {
      cursor: not-allowed;
    }

    ${
      typed
        ? css`
            border-color: ${input.border.color.typed};

            & + ${Label} {
              ${labelTransition}
            }
          `
        : ''
    }
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
    full,
    width,
    theme: {
      yoga: {
        colors,
        spacing,
        components: { input },
      },
    },
  }) => `
    margin: ${spacing.xsmall}px;

    svg {
      position: absolute;
      top: 0;
      right: 0;

      padding-right: ${spacing.xsmall}px;
      padding-left: ${spacing.xsmall}px;

      height: ${input.height}px;

      fill: ${input.font.color.default};

      &:hover, &:focus {
        fill: ${input.font.color.focus};
      }

      box-sizing: content-box;
      cursor: pointer;
      outline: none;
    }

    &, ${Field} {
      width: ${full ? '100%' : `${width}px`};
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
      full,
      width,
      ...props
    },
    ref,
  ) => {
    const [typed, setTyped] = useState(Boolean(value));
    const [inputValue, setInputValue] = useState(value || '');

    const inputRef = ref || useRef(null);

    const cleanField = e => {
      if (e.type === 'click' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();

        setTyped(false);
        setInputValue('');

        inputRef.current.focus();

        onClean(e);
        onChange(e);
      }
    };

    return (
      <Wrapper
        typed={typed}
        disabled={disabled}
        error={error}
        full={full}
        width={width}
      >
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
            tabIndex={0}
            disabled={disabled}
            onClick={cleanField}
            onKeyDown={cleanField}
          />
        )}
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
  full: bool,
  width: number,
};

Input.defaultProps = {
  cleanable: true,
  disabled: false,
  error: undefined,
  label: 'Label',
  onChange: () => {},
  onClean: () => {},
  value: undefined,
  /** style label color following the theme (primary, secondary, tertiary) */
  variant: 'primary',
  maxLength: undefined,
  helper: undefined,
  readOnly: false,
  full: false,
  width: 312,
};

export default Input;
