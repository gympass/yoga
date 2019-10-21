import React from 'react';
import PropTypes from 'prop-types';
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
  margin-bottom: 8px;

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
    width: ${trackWidth};
    height: ${trackHeight};
    border-radius: ${trackRadii};
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
    width: ${thumbWidth};
    height: ${thumbHeight};
    left: ${thumbLeft};
    border-radius: ${thumbRadii};
    background-color: ${thumbBackgroundColor};
    box-shadow: ${thumbShadow};
    transition: ${thumbTransitionAnimation};

    ${
      checked
        ? `
        left: calc(100% - ${thumbLeft}); 
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

/** This is a Switch description */
const Switch = ({ checked, disabled, secondary, onChange, ...rest }) => (
  <SwitchTrack
    secondary={secondary}
    checked={checked}
    disabled={disabled}
    {...rest}
  >
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

Switch.propTypes = {
  /** Use the secondary color in the element */
  secondary: PropTypes.bool,
  /** If `true`, the component is checked */
  checked: PropTypes.bool,
  /** If true, the switch will be disabled */
  disabled: PropTypes.bool,
  /** Callback fired when the input is changed. */
  onChange: PropTypes.func,
};

Switch.defaultProps = {
  secondary: false,
  checked: false,
  disabled: false,
  onChange: () => {},
};

export default Switch;
