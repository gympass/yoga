import React, { useState, useRef } from 'react';
import styled, { css } from 'styled-components';
import { func, string, bool, number, shape } from 'prop-types';
import { Close } from '@gympass/yoga-icons';

const ICON_SIZE = 24;

const labelTransition = css`
  ${({
    theme: {
      yoga: {
        transition,
        components: { input },
      },
    },
  }) => `
    top: 0;
    left: ${input.padding.left - 2}px;

    padding-right: ${input.label.padding.right}px;
    padding-left: ${input.label.padding.left}px;

    font-size: ${input.label.font.size.typed}px;

    transform: translateY(-50%);
    transition-duration: ${transition.duration[0]};
    transition-timing-function: ${transition.timing[0]};
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
        transition,
        components: { input },
      },
    },
  }) => css`
    top: ${input.padding.top * 1.5}px;
    left: ${input.padding.left}px;

    background-color: ${colors.gray.surface};

    font-size: ${input.label.font.size.default}px;
    font-weight: ${input.label.font.weight.default};
    color: ${input.label.color.default};

    transform: translateY(-40%);

    transition-duration: ${transition.duration[0]};
    transition-timing-function: ${transition.timing[0]};
  `}
`;

const Field = styled.input`
  appearance: none;
  background-color: transparent;
  outline: none;

  ${({
    typed,
    error,
    theme: {
      yoga: {
        colors,
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

    color: ${input.font.color.focus};

    font-size: ${input.font.size}px;
    font-weight: ${input.font.weight};

    &:focus {
      color: ${input.font.color.focus};
      border-color: ${input.border.color.typed};

      & + ${Label} {
        ${labelTransition}

        font-weight: ${input.label.font.weight.typed};
        color: ${error ? `${colors.negative[1]}` : `${colors.gray.darker}`};
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
    theme: {
      yoga: {
        colors,
        spacing,
        components: { input },
      },
    },
  }) => `
    svg {
      position: absolute;
      top: 0;
      right: 0;

      padding-right: ${spacing.xsmall}px;
      padding-left: ${spacing.xsmall}px;

      height: ${input.height}px;

      fill: ${input.font.color.default};
      outline: none;

      &:hover, &:focus {
        fill: ${input.font.color.focus};
      }
      
      box-sizing: content-box;
      cursor: pointer;
    }

    &, ${Field} {
      width: ${full ? '100%' : `${input.width}px`};
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
        : `
          ${Helper} {
            color: ${input.helper.color};
          }
        `
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
      maxLength,
      helper,
      readOnly,
      full,
      style,
      className,
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
        style={style}
        className={className}
      >
        <Field
          {...props}
          {...{
            disabled,
            error,
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
  /** maximum length (number of characters) of value */
  maxLength: number,
  /** A helper text to be displayed below field */
  helper: string,
  readOnly: bool,
  full: bool,
  style: shape({}),
  className: string,
};

Input.defaultProps = {
  cleanable: true,
  disabled: false,
  error: undefined,
  label: 'Label',
  onChange: () => {},
  onClean: () => {},
  value: undefined,
  maxLength: undefined,
  helper: undefined,
  readOnly: false,
  full: false,
  style: undefined,
  className: undefined,
};

export default Input;
