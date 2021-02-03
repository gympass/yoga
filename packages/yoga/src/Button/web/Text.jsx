import styled from 'styled-components';

import Button from './Button';

const ButtonText = styled(Button)`
  ${({
    theme: {
      yoga: {
        components: { button },
      },
    },
  }) => `
    background-color: ${button.types.text.backgroundColor};
    border-color: ${button.types.text.backgroundColor};
    color: ${button.types.text.font.default.color};

    &:not([disabled]):hover, &:not([disabled]):focus, &:not([disabled]):active {
      background-color: ${button.types.text.backgroundColor};
      box-shadow: none;
    }

    &:not([disabled]):hover {
      color: ${button.types.text.font.hover.color};
    }

    &:not([disabled]):focus, &:not([disabled]):active {
      color: ${button.types.text.font.pressed.color};
    }

    &:disabled {
      background-color: ${button.types.text.backgroundColor};
      border-color: ${button.types.text.backgroundColor};
      color: ${button.types.text.font.disabled.color};
    }
  `}
`;

ButtonText.displayName = 'Button.Text';

export default ButtonText;
