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
    background-color: ${button.types.text.backgroundColor.default};
    border-color: ${button.types.text.backgroundColor.default};
    color: ${button.types.text.font.default.color};

    &:not([disabled]):hover, &:not([disabled]):focus {
      background-color: ${button.types.text.backgroundColor.hover};
      box-shadow: none;
    }

    &:not([disabled]):active {
      background-color: ${button.types.text.backgroundColor.pressed};
      border-color: ${button.types.text.backgroundColor.pressed};
      color: ${button.types.text.font.pressed.color};
    }

    &:disabled {
      background-color: ${button.types.text.backgroundColor.disabled};
      border-color: ${button.types.text.backgroundColor.disabled};
      color: ${button.types.text.font.disabled.color};
    }
  `}
`;

ButtonText.displayName = 'Button.Text';

export default ButtonText;
