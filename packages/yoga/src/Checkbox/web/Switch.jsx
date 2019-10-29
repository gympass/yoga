import React from 'react';
import { bool, func } from 'prop-types';
import styled from 'styled-components';

/** This is a Switch description */
const SwitchInput = styled.input`
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
  cursor: inherit;
`;

const SwitchTrack = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  cursor: pointer;

  ${({
    theme: {
      components: {
        switch: {
          track: {
            width: trackWidth,
            height: trackHeight,
            radii: trackRadii,
            backgroundColor: trackBackgroundColor,
            transition: { duration: trackTransitionAnimation },
            checked: { backgroundColor: checkedBackgroundColor },
            disabled: { backgroundColor: disabledBackgroundColor },
          },
        },
      },
    },
    checked,
    disabled,
  }) =>
    `
    width: ${trackWidth}px;
    height: ${trackHeight}px;
    border-radius: ${trackRadii}px;
    transition: background-color ${trackTransitionAnimation};
    background-color: ${
      checked ? checkedBackgroundColor : trackBackgroundColor
    };

    ${
      disabled
        ? `
        background-color: ${disabledBackgroundColor};
        cursor: not-allowed;`
        : ''
    }
  `};
`;

const SwitchThumb = styled.span`
  position: relative;
  pointer-events: none;

  ${({
    theme: {
      components: {
        switch: {
          thumb: {
            width: thumbWidth,
            height: thumbHeight,
            shadow: thumbShadow,
            left: thumbLeft,
            radii: thumbRadii,
            backgroundColor: thumbBackgroundColor,
            transition: { duration: thumbTransitionAnimation },
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
    checked,
    disabled,
  }) =>
    `
    width: ${thumbWidth}px;
    height: ${thumbHeight}px;
    left: ${thumbLeft}px;
    border-radius: ${thumbRadii}px;
    background-color: ${thumbBackgroundColor};
    transition: ${thumbTransitionAnimation};

    ${
      checked
        ? `
        left: calc(100% - ${thumbLeft}px); 
        transform: translateX(-100%);`
        : ''
    }
    ${
      disabled
        ? `
        background-color: ${disabledBackgroundColor};
        cursor: not-allowed;`
        : `
        ${SwitchInput}:focus + &, 
        ${SwitchInput}:hover + &{
          box-shadow: 0 0 0 ${spacing.xsmall}px ${
            checked ? focusCheckedBackgroundColor : focusDisabledBackgroundColor
          };
        }
        `
    }
  `};
`;

/** The Switch is a kind of Checkbox  */
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

export default CheckboxSwitch;
