import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

/** This is a Switch description */
const SwitchInput = styled.input`
  width: 0;
  height: 0;
  visibility: hidden;
`;

const SwitchTrack = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  ${({ theme }) =>
    theme &&
    `
    width: ${theme.components.switch.track.width};
    height: ${theme.components.switch.track.height};
    box-shadow: ${theme.components.switch.track.shadow};
    border-radius: ${theme.components.switch.track.radii};
    background: ${theme.components.switch.track.background};
    transition: background-color ${theme.components.switch.track.animation};
    cursor: ${theme.components.switch.track.cursor};
  `};

  ${({ checked, theme }) =>
    checked &&
    `background-color: ${theme.components.switch.track.checked.background.default};`}

  ${({ checked, secondary, theme }) =>
    checked &&
    secondary &&
    `background-color: ${theme.components.switch.track.checked.background.secondary};`}

  ${({ disabled, theme }) =>
    disabled &&
    `background-color: ${theme.components.switch.track.disabled.background};
    cursor: ${theme.components.switch.track.disabled.cursor};`}
`;

const SwitchThumb = styled.span`
  content: '';
  position: relative;

  ${({ theme }) =>
    theme &&
    `
    width: ${theme.components.switch.thumb.width};
    height: ${theme.components.switch.thumb.height};
    left: ${theme.components.switch.thumb.left};
    border-radius: ${theme.components.switch.thumb.radii};
    background: ${theme.components.switch.thumb.background};
    box-shadow: ${theme.components.switch.thumb.shadow};
    transition: ${theme.components.switch.thumb.transition};
  `};

  ${({ checked, theme }) =>
    checked &&
    `left: calc(100% - ${theme.components.switch.thumb.left}); 
    transform: translateX(-100%);`}

  ${({ disabled, theme }) =>
    disabled &&
    `background-color: ${theme.components.switch.thumb.disabled.background};`}
`;

/** This is a Switch description */
const Switch = ({ checked, disabled, secondary, onChange, ...rest }) => {
  const [check, setCheck] = useState(checked);
  return (
    <SwitchTrack
      secondary={secondary}
      checked={check}
      disabled={disabled}
      {...rest}
    >
      <SwitchThumb role="button" checked={check} disabled={disabled} />

      <SwitchInput
        type="checkbox"
        role="switch"
        disabled={disabled}
        aria-hidden
        aria-checked={checked}
        aria-readonly={disabled}
        onChange={event => {
          setCheck(!check);
          onChange(event);
        }}
      />
    </SwitchTrack>
  );
};

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
  onChange: null,
};

export default withTheme(Switch);
