import React, { useState } from 'react';
import { bool, func, string } from 'prop-types';
import styled, { withTheme } from 'styled-components';
import { TouchableWithoutFeedback, View } from 'react-native';
import { hexToRgb } from '@gympass/yoga-common';
import { Done } from '@gympass/yoga-icons';

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

const CheckBackground = styled.View(
  ({
    checked,
    disabled,
    error,
    theme: {
      yoga: {
        components: { checkbox },
      },
    },
  }) => `
    position: absolute;
    
    width: ${checkbox.size}px;
    height: ${checkbox.size}px;

    border-radius: ${checkbox.border.radius}px;
    border-width: ${checkbox.border.width}px;
    border-style: solid;

    ${checked ? `background-color: ${checkbox.checked.backgroundColor};` : ''}

    border-color: ${
      disabled ? checkbox.disabled.border.color : checkbox.border.color
    };

    ${
      disabled && checked
        ? `background-color: ${checkbox.disabled.backgroundColor};`
        : ''
    }

    ${error ? `border-color: ${checkbox.error.border.color};` : ''}

    ${
      error && checked
        ? `background-color: ${checkbox.error.backgroundColor};`
        : ''
    }
  `,
);

const Shadow = styled.View(
  ({
    theme: {
      yoga: {
        components: { checkbox },
      },
    },
  }) => {
    const size = checkbox.size * 1.67;

    return `
      width: ${size}px;
      height: ${size}px;

      background-color: ${hexToRgb(
        checkbox.hover.backgroundColor,
        0.75,
      )};          
      border-radius: ${checkbox.hover.border.radius}px;
    `;
  },
);

const CheckArea = styled.View(
  ({
    theme: {
      yoga: {
        components: { checkbox },
      },
    },
  }) => `
  justify-content: center;
  align-items: center;

  width: ${checkbox.size}px;
  height: ${checkbox.size}px;
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
  theme: {
    yoga: {
      components: { checkbox },
    },
  },
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
          <CheckArea>
            {pressed && !disabled && <Shadow pressed={pressed} />}
            <CheckBackground
              disabled={disabled}
              checked={checked}
              error={error}
              pressed={pressed}
            />
            {checked && <Done fill={checkbox.checked.icon.color} />}
          </CheckArea>

          {label && <Label>{label}</Label>}
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

export default withTheme(Checkbox);
