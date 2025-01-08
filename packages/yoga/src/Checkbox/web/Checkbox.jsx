import React, { useEffect, useRef, useId } from 'react';
import { bool, string, shape, oneOfType, node } from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { hexToRgb } from '@gympass/yoga-common';
import { Check, Rectangle } from '@gympass/yoga-icons';

import { HiddenInput } from '../../shared';

const CheckboxWrapper = styled.div`
  display: inline-block;

  * {
    box-sizing: border-box;
  }

  ${({ disabled }) => (disabled ? `cursor: not-allowed` : '')}
`;

const CheckMark = styled.div`
  position: relative;

  border-style: solid;

  flex-shrink: 0;

  ${({
    checked,
    disabled,
    inverted,
    error,
    indeterminate,
    theme: {
      yoga: {
        colors: { primary, feedback, elements, white },
        components: { checkbox },
      },
    },
  }) => {
    let borderColor = elements.selectionAndIcons;
    let bgColor = 'transparent';
    let checkColor = checkbox.checked.icon.color;

    if (error) {
      [, borderColor] = feedback.attention;

      if (checked || indeterminate) {
        [, bgColor] = feedback.attention;
      }
    } else if (disabled) {
      borderColor = checkbox.disabled.border.color;

      if (checked || indeterminate) {
        bgColor = checkbox.disabled.backgroundColor;
        borderColor = elements.lineAndBorders;
      }
    } else if (checked || indeterminate) {
      borderColor = primary;
      bgColor = primary;
      checkColor = checkbox.checked.icon.color;

      if (inverted) {
        bgColor = white;
        borderColor = white;
        checkColor = primary;
      }
    } else if (inverted) {
      borderColor = white;
      checkColor = primary;
    }

    return `
    width: ${checkbox.size}px;
    height: ${checkbox.size}px;

    margin-right: ${checkbox.margin.right}px;

    background-color: ${bgColor};

    border-radius: ${checkbox.border.radius}px;
    border-width: ${checkbox.border.width}px;
    border-color: ${borderColor};

    svg {
      position: absolute;
      top: 50%;
      left: 50%;

      fill: ${checkColor};

      transform: translate(-50%, -50%);
    }`;
  }}
`;

const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;

  cursor: pointer;

  ${({
    theme: {
      yoga: {
        components: { checkbox },
      },
    },
  }) => `
    font-size: ${checkbox.label.font.size}px;
    color: ${checkbox.label.font.color};
  `}
`;

const Shadow = styled.span`
  position: absolute;
  display: none;

  ${({
    theme: {
      yoga: {
        components: { checkbox },
      },
    },
  }) => `
    width: ${checkbox.size}px;
    height: ${checkbox.size}px;
    border-radius: ${checkbox.hover.border.radius}px;
  `}
`;

const CheckboxStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${({
    checked,
    inverted,
    disabled,
    indeterminate,
    theme: {
      yoga: {
        colors: { primary, elements, white },
        components: { checkbox },
      },
    },
  }) => {
    const shadowSize = Math.round(checkbox.size * 0.33);
    const shadowColor = () => {
      if (inverted) {
        return white;
      }

      return checked || indeterminate
        ? primary
        : elements.backgroundAndDisabled;
    };

    return `
      ${disabled ? `pointer-events: none` : ''}

      ${Label}:active,
      &:focus-within,
      &:hover  {
        ${Shadow} {
          display: block;
        }
      }

      &:hover {
        ${Shadow} {
          background-color: ${hexToRgb(shadowColor(), 0.25)};

          box-shadow: 0 0 0 ${shadowSize}px
            ${hexToRgb(shadowColor(), 0.25)};
        }
      }

      &:focus-within {
        ${Shadow} {
          background-color: ${hexToRgb(shadowColor(), 0.5)};

          box-shadow: 0 0 0 ${shadowSize}px
            ${hexToRgb(shadowColor(), 0.5)};
        }
      }

      ${Label}:active {
        ${Shadow} {
          background-color: ${hexToRgb(shadowColor(), 0.75)};

          box-shadow: 0 0 0 ${shadowSize}px
            ${hexToRgb(shadowColor(), 0.75)};
        }
      }
    `;
  }}
`;

const HelperWrapper = styled.div`
  width: 100%;

  ${({
    theme: {
      yoga: {
        components: { checkbox },
      },
    },
  }) => `
    margin-top: ${checkbox.helper.margin.top}px;
  `}
`;

const Helper = styled.span`
  ${({
    error,
    theme: {
      yoga: {
        colors: { feedback },
        components: { checkbox },
      },
    },
  }) => `
    color: ${error ? feedback.attention[1] : checkbox.helper.font.color};

    font-size: ${checkbox.helper.font.size}px;
  `}
`;

/** The checkbox component is used when the user needs to select one or more
 * items on a task. This component can also allow the user to turn an option on
 * or off.  */
const Checkbox = ({
  value,
  label,
  helper,
  disabled,
  checked,
  error,
  style,
  className,
  inverted,
  indeterminate,
  ariaLabel,
  theme: {
    yoga: {
      components: { checkbox },
    },
  },
  ...rest
}) => {
  const inputRef = useRef(null);
  const id = useId();
  const checkboxLabelId = `checkbox-label-${id}`;

  const { onChange, onClick, ...restWithoutEvents } = rest;

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  });

  return (
    <CheckboxWrapper
      style={style}
      className={className}
      disabled={disabled}
      {...restWithoutEvents}
    >
      <CheckboxStyled
        checked={checked}
        indeterminate={indeterminate}
        inverted={inverted}
        disabled={disabled}
      >
        <Label id={checkboxLabelId}>
          <Shadow />
          <CheckMark
            {...{
              disabled,
              checked,
              error,
              inverted,
              indeterminate,
            }}
          >
            {checked && !indeterminate && (
              <Check width={checkbox.size} height={checkbox.size} />
            )}
            {indeterminate && (
              <Rectangle width={checkbox.size} height={checkbox.size} />
            )}
          </CheckMark>
          <HiddenInput
            type="checkbox"
            ref={inputRef}
            checked={checked}
            disabled={disabled}
            {...(value ? { value } : {})}
            {...restWithoutEvents}
            onChange={onChange}
            onClick={onClick}
            aria-labelledby={ariaLabel ? undefined : checkboxLabelId}
            aria-label={ariaLabel || undefined}
          />
          {label}
        </Label>
      </CheckboxStyled>
      {(helper || error) && (
        <HelperWrapper>
          <Helper error={error}>{error || helper}</Helper>
        </HelperWrapper>
      )}
    </CheckboxWrapper>
  );
};

Checkbox.propTypes = {
  label: oneOfType([string, node]),
  /** short helper text under checkbox */
  helper: string,
  value: string,
  checked: bool,
  disabled: bool,
  inverted: bool,
  error: string,
  /** if true, the component appears indeterminate */
  indeterminate: bool,
  /** set a style to the checkbox container */
  style: shape({}),
  className: string,
  ariaLabel: string,
};

Checkbox.defaultProps = {
  label: undefined,
  value: undefined,
  helper: undefined,
  checked: false,
  disabled: false,
  inverted: false,
  indeterminate: false,
  error: undefined,
  style: undefined,
  className: undefined,
  ariaLabel: undefined,
};

Checkbox.displayName = 'Checkbox';

export default withTheme(Checkbox);
