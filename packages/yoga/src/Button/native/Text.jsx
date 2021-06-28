import React from 'react';
import styled, { withTheme } from 'styled-components';
import { hexToRgb } from '@gympass/yoga-common';

import withTouchable from './withTouchable';
import { Label, ButtonContainer } from './Button';

const LabelText = styled(Label)`
  ${({ color }) => `color: ${color};`}
`;

const ButtonContainerText = styled(ButtonContainer)`
  ${({
    theme: {
      yoga: {
        components: { button },
      },
    },
  }) => `
    background-color: ${button.types.text.backgroundColor};
  `}
`;

const ButtonText = ({
  children,
  disabled,
  pressed,
  small,
  secondary,
  inverted,
  icon: Icon,
  theme: {
    yoga: {
      colors,
      components: { button },
    },
  },
  ...rest
}) => {
  const state = secondary ? 'secondary' : 'primary';
  let textColor = colors[state];

  if (disabled) {
    textColor = colors.text.disabled;
  } else if (inverted) {
    textColor = colors.white;
    if (pressed) {
      textColor = hexToRgb(colors.white, 0.75);
    }
  } else if (pressed) {
    textColor = hexToRgb(colors[state], 0.75);
  }

  return (
    <ButtonContainerText
      {...rest}
      disabled={disabled}
      pressed={pressed}
      small={small}
    >
      {Icon && (
        <Icon
          width={small ? button.icon.size.small : button.icon.size.default}
          height={small ? button.icon.size.small : button.icon.size.default}
          fill={textColor}
          style={{
            marginRight: button.icon.margin.right,
          }}
        />
      )}
      <LabelText
        disabled={disabled}
        pressed={pressed}
        small={small}
        secondary={secondary}
        color={textColor}
      >
        {children}
      </LabelText>
    </ButtonContainerText>
  );
};

ButtonText.propTypes = ButtonContainer.propTypes;
ButtonText.defaultProps = ButtonContainer.defaultProps;

export default withTouchable(withTheme(ButtonText));
