import React from 'react';
import styled from 'styled-components';

import withTouchable from './withTouchable';
import { Label, ButtonContainer } from './Button';

const LabelText = styled(Label)`
  ${({
    disabled,
    pressed,
    theme: {
      components: {
        button: {
          types: {
            text: {
              textColor: {
                disabled: disabledColor,
                enabled: enabledColor,
                pressed: pressedColor,
              },
            },
          },
        },
      },
    },
  }) => `
    color: ${enabledColor};

    ${disabled ? `color: ${disabledColor};` : ''}
    ${!disabled && pressed ? `color: ${pressedColor};` : ''}
  `}
`;

const ButtonContainerText = styled(ButtonContainer)`
  ${({
    pressed,
    disabled,
    theme: {
      components: {
        button: {
          types: {
            text: {
              backgroundColor: {
                disabled: disabledBackgroundColor,
                enabled: enabledBackgroundColor,
                pressed: pressedBackgroundColor,
              },
            },
          },
        },
      },
    },
  }) => `
    background-color: ${enabledBackgroundColor};
    border-color: ${enabledBackgroundColor};

    ${
      !disabled && pressed
        ? `
      background-color: ${pressedBackgroundColor};
      border-color: ${pressedBackgroundColor};
    `
        : ''
    }

    ${
      disabled
        ? `
      background-color: ${disabledBackgroundColor};
      border-color: ${disabledBackgroundColor};
    `
        : ''
    }
  `}
`;

const ButtonText = ({ children, disabled, pressed, ...rest }) => (
  <ButtonContainerText {...rest} disabled={disabled} pressed={pressed}>
    <LabelText disabled={disabled} pressed={pressed}>
      {children}
    </LabelText>
  </ButtonContainerText>
);

ButtonText.propTypes = ButtonContainer.propTypes;
ButtonText.defaultProps = ButtonContainer.defaultProps;

export default withTouchable(ButtonText);
