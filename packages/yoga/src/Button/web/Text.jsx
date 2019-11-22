import styled from 'styled-components';

import Button from './Button';

const ButtonText = styled(Button)`
  ${({
    theme: {
      yoga: {
        components: {
          button: {
            types: {
              text: {
                backgroundColor: {
                  disabled: disabledBackgroundColor,
                  enabled: enabledBackgroundColor,
                  pressed: pressedBackgroundColor,
                  hover: hoverBackgroundColor,
                },
                textColor: {
                  disabled: disabledTextColor,
                  enabled: enabledTextColor,
                  pressed: pressedTextColor,
                },
              },
            },
          },
        },
      },
    },
  }) => `
    background-color: ${enabledBackgroundColor};
    border-color: ${enabledBackgroundColor};
    color: ${enabledTextColor};

    &:not([disabled]):hover, &:not([disabled]):focus {
      background-color: ${hoverBackgroundColor};
      box-shadow: none;
    }

    &:not([disabled]):active {
      background-color: ${pressedBackgroundColor};
      border-color: ${pressedBackgroundColor};
      color: ${pressedTextColor};
    }

    &:disabled {
      background-color: ${disabledBackgroundColor};
      border-color: ${disabledBackgroundColor};
      color: ${disabledTextColor};
    }
  `}
`;

export default ButtonText;
