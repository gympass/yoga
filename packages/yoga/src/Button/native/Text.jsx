import React from 'react';
import styled from 'styled-components';

import withTouchable from './withTouchable';
import { Label, ButtonContainer } from './Button';

const LabelText = styled(Label)`
  ${({
    disabled,
    pressed,
    theme: {
      yoga: {
        components: { button },
      },
    },
  }) => `
    color: ${button.types.text.font.default.color};

    ${disabled ? `color: ${button.types.text.font.disabled.color};` : ''}
    ${
      !disabled && pressed
        ? `color: ${button.types.text.font.pressed.color};`
        : ''
    }
  `}
`;

const ButtonContainerText = styled(ButtonContainer)`
  ${({
    pressed,
    disabled,
    theme: {
      yoga: {
        components: { button },
      },
    },
  }) => `
    background-color: ${button.types.text.backgroundColor.default};

    ${
      !disabled && pressed
        ? `
      background-color: ${button.types.text.backgroundColor.pressed};
    `
        : ''
    }

    ${
      disabled
        ? `
      background-color: ${button.types.text.backgroundColor.disabled};
    `
        : ''
    }
  `}
`;

const ButtonText = ({ children, disabled, pressed, small, ...rest }) => (
  <ButtonContainerText
    {...rest}
    disabled={disabled}
    pressed={pressed}
    small={small}
  >
    <LabelText disabled={disabled} pressed={pressed} small={small}>
      {children}
    </LabelText>
  </ButtonContainerText>
);

ButtonText.propTypes = ButtonContainer.propTypes;
ButtonText.defaultProps = ButtonContainer.defaultProps;

export default withTouchable(ButtonText);
