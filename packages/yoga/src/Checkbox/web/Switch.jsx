import React from 'react';
import { bool, func } from 'prop-types';
import styled, { css } from 'styled-components';

/** This is a Switch description */
const SwitchInput = styled.input`
  position: absolute;

  width: 100%;
  height: 100%;

  opacity: 0;

  cursor: inherit;
`;

const SwitchTrack = styled.label`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  * {
    box-sizing: border-box;
  }

  ${({
    theme: {
      yoga: {
        components: {
          switch: {
            track: {
              width: trackWidth,
              height: trackHeight,
              radii: trackRadii,
              backgroundColor: trackBackgroundColor,
              checked: { backgroundColor: checkedBackgroundColor },
              disabled: { backgroundColor: disabledBackgroundColor },
            },
          },
        },
      },
    },
    checked,
    disabled,
  }) =>
    css`
      width: ${trackWidth}px;
      height: ${trackHeight}px;

      background-color: ${checked
        ? checkedBackgroundColor
        : trackBackgroundColor};

      border-radius: ${trackRadii}px;

      transition-property: background-color;
      transition-duration: 300ms;

      ${disabled
        ? css`
            background-color: ${disabledBackgroundColor};
            cursor: not-allowed;
          `
        : ''}
    `};
`;

const SwitchThumb = styled.span`
  position: relative;

  pointer-events: none;

  ${({
    theme: {
      yoga: {
        components: {
          switch: {
            thumb: {
              width: thumbWidth,
              height: thumbHeight,
              left: thumbLeft,
              radii: thumbRadii,
              backgroundColor: thumbBackgroundColor,
              disabled: { backgroundColor: disabledBackgroundColor },
            },
            focus: {
              checked: { backgroundColor: focusCheckedBackgroundColor },
              disabled: { backgroundColor: focusDisabledBackgroundColor },
            },
          },
        },
        spacing,
      },
    },
    checked,
    disabled,
  }) =>
    css`
      left: ${thumbLeft}px;

      width: ${thumbWidth}px;
      height: ${thumbHeight}px;

      background-color: ${thumbBackgroundColor};
      border-radius: ${thumbRadii}px;

      transition-property: left, transform;
      transition-duration: 300ms;
      transition-timing-function: ease;

      ${checked
        ? css`
            left: calc(100% - ${thumbLeft}px);
            transform: translateX(-100%);
          `
        : ''}
      ${disabled
        ? css`
            background-color: ${disabledBackgroundColor};
            cursor: not-allowed;
          `
        : css`
            ${SwitchInput}:focus + &,
            ${SwitchInput}:hover + & {
              box-shadow: 0 0 0 ${spacing.xsmall}px
                ${checked
                  ? focusCheckedBackgroundColor
                  : focusDisabledBackgroundColor};
            }
          `};
    `};
`;

/** Switches allow users to turn an individual option on or off. They are usually used to activate or deactivate a specific setting. */
const CheckboxSwitch = ({ checked, disabled, onChange, ...rest }) => (
  <SwitchTrack checked={checked} disabled={disabled} {...rest}>
    <SwitchInput
      type="checkbox"
      role="switch"
      disabled={disabled}
      aria-hidden
      aria-checked={checked}
      aria-readonly={disabled}
      onChange={onChange}
    />
    <SwitchThumb role="button" checked={checked} disabled={disabled} />
  </SwitchTrack>
);

CheckboxSwitch.propTypes = {
  checked: bool,
  disabled: bool,
  onChange: func,
};

CheckboxSwitch.defaultProps = {
  checked: false,
  disabled: false,
  onChange: () => {},
};

CheckboxSwitch.displayName = 'Checkbox.Switch';

export default CheckboxSwitch;
