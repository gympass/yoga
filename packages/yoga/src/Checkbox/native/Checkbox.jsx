import React, { useState } from 'react';
import { bool, func, string } from 'prop-types';
import styled from 'styled-components';
import { TouchableWithoutFeedback } from 'react-native';
import CheckMark from './CheckMark';

const CheckboxWrapper = styled.View`
  width: 100%;
  flex-wrap: nowrap;
  align-items: center;
`;

const Label = styled.Text(
  ({
    theme: {
      components: { checkbox },
    },
  }) => `
  padding-left: ${checkbox.label.padding.left}px;
  font-size: ${checkbox.label.font.size}px;
  color: ${checkbox.label.font.color};
`,
);

const HelperWrapper = styled.View(
  ({
    theme: {
      components: { checkbox },
    },
  }) => `
  width: 100%;
  flex-wrap: nowrap;
  margin-top: ${checkbox.helper.margin.top}px;
`,
);

const Helper = styled.Text(
  ({
    error,
    theme: {
      components: { checkbox },
    },
  }) => `
  font-size: ${checkbox.helper.font.size}px;
  color: ${
    error
      ? `${checkbox.helper.selected.font.color};`
      : `${checkbox.helper.font.color}`
  }
`,
);

const Checkbox = ({
  label,
  helper,
  disabled,
  checked,
  error,
  onChange,
  ...rest
}) => {
  const [pressed, setPressed] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback
        accessibilityRole="checkbox"
        onPress={() => !disabled && onChange()}
        onPressIn={() => !disabled && setPressed(true)}
        onPressOut={() => !disabled && setPressed(false)}
        {...rest}
      >
        <CheckboxWrapper>
          <CheckMark
            disabled={disabled}
            checked={checked}
            error={error}
            pressed={pressed}
          />
          <Label>{label}</Label>
        </CheckboxWrapper>
      </TouchableWithoutFeedback>
      {helper && (
        <HelperWrapper>
          <Helper error={error}>{helper}</Helper>
        </HelperWrapper>
      )}
    </>
  );
};

Checkbox.propTypes = {
  /** set the component label */
  label: string.isRequired,
  /** set a short helper text under checkbox */
  helper: string,
  /** set a checked state in the component */
  checked: bool,
  /** set a disabled state in the component */
  disabled: bool,
  /** set a error state in the component */
  error: bool,
  /** when the checkbox is checked/unchecked */
  onChange: func,
};

Checkbox.defaultProps = {
  helper: undefined,
  checked: false,
  disabled: false,
  error: false,
  onChange: () => {},
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
