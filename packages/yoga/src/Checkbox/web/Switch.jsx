import React from 'react';
import { bool, func } from 'prop-types';
import styled, { css } from 'styled-components';

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
        components: { checkboxswitch },
      },
    },
    checked,
    disabled,
  }) =>
    css`
      width: ${checkboxswitch.track.width}px;
      height: ${checkboxswitch.track.height}px;

      background-color: ${checked
        ? checkboxswitch.track.checked.backgroundColor
        : checkboxswitch.track.backgroundColor};

      border-radius: ${checkboxswitch.track.radii}px;

      transition-property: background-color;
      transition-duration: 300ms;

      ${disabled
        ? css`
            background-color: ${checkboxswitch.track.disabled.backgroundColor};
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
        components: { checkboxswitch },
        spacing,
        elevations,
      },
    },
    checked,
    disabled,
  }) =>
    css`
      left: ${checkboxswitch.thumb.left}px;

      width: ${checkboxswitch.thumb.width}px;
      height: ${checkboxswitch.thumb.height}px;

      background-color: ${checkboxswitch.thumb.backgroundColor};
      border-radius: ${checkboxswitch.thumb.radii}px;

      transition-property: left, transform;
      transition-duration: 300ms;
      transition-timing-function: ease;

      ${checked
        ? css`
            left: calc(100% - ${checkboxswitch.thumb.left}px);
            transform: translateX(-100%);
            box-shadow: ${elevations.small};
          `
        : ''}
      ${disabled
        ? css`
            background-color: ${checkboxswitch.thumb.disabled.backgroundColor};
            cursor: not-allowed;
          `
        : css`
            ${SwitchInput}:focus + & {
              box-shadow: 0 0 0 ${spacing.xxsmall}px
                ${checked
                  ? checkboxswitch.focus.checked.backgroundColor
                  : checkboxswitch.focus.disabled.backgroundColor};
            }

            ${SwitchInput}:hover + & {
              box-shadow: 0 0 0 ${spacing.xxsmall}px
                ${checked
                  ? checkboxswitch.hover.checked.backgroundColor
                  : checkboxswitch.hover.disabled.backgroundColor};
            }

            ${SwitchInput}:active + & {
              box-shadow: 0 0 0 ${spacing.xxsmall}px
                ${checked
                  ? checkboxswitch.pressed.checked.backgroundColor
                  : checkboxswitch.pressed.disabled.backgroundColor};
            }
          `}
    `};
`;

const noop = () => {};

/** Switches allow users to turn an individual option on or off. They are usually used to activate or deactivate a specific setting. */
function CheckboxSwitch({
  checked = false,
  disabled = false,
  onChange = noop,
  ...rest
}) {
  return (
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
}

CheckboxSwitch.propTypes = {
  checked: bool,
  disabled: bool,
  onChange: func,
};

CheckboxSwitch.displayName = 'Checkbox.Switch';

export default CheckboxSwitch;
