import React, { useState } from 'react';
import { bool, func, string } from 'prop-types';
import styled from 'styled-components';
import { TouchableWithoutFeedback, View } from 'react-native';
import CheckMark from './CheckMark';

const CheckboxWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Label = styled.Text(
  ({
    theme: {
      yoga: {
        components: { checkbox },
      },
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
      yoga: {
        components: { checkbox },
      },
    },
  }) => `
  margin-top: ${checkbox.helper.margin.top}px;
`,
);

const Helper = styled.Text(
  ({
    error,
    theme: {
      yoga: {
        components: { checkbox },
      },
    },
  }) => `
  font-size: ${checkbox.helper.font.size}px;

  color: ${
    error ? checkbox.helper.selected.font.color : checkbox.helper.font.color
  };
`,
);

const Checkbox = ({
  label,
  helper,
  disabled,
  checked,
  error,
  onPressIn,
  onPressOut,
  ...rest
}) => {
  const [pressed, setPressed] = useState(false);
  return (
    <View>
      <TouchableWithoutFeedback
        {...rest}
        disabled={disabled}
        onPressIn={e => {
          setPressed(true);
          onPressIn(e);
        }}
        onPressOut={e => {
          setPressed(false);
          onPressOut(e);
        }}
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
    </View>
  );
};

Checkbox.propTypes = {
  label: string,
  /** set a short helper text under checkbox */
  helper: string,
  checked: bool,
  disabled: bool,
  error: bool,
  onPressIn: func,
  onPressOut: func,
};

Checkbox.defaultProps = {
  label: undefined,
  helper: undefined,
  checked: false,
  disabled: false,
  error: false,
  onPressIn: () => {},
  onPressOut: () => {},
};

Checkbox.displayName = 'Checkbox';

export default Checkbox;
