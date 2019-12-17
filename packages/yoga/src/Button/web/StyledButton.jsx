import styled from 'styled-components';
import { hexToRgb } from '@gympass/yoga-common';

const StyledButton = styled.button`
  box-sizing: border-box;

  outline: none;
  transition: all 0.2s;
  cursor: pointer;

  ${({
    full,
    small,
    inverted,
    theme: {
      yoga: {
        fonts,
        components: {
          button: {
            padding: { left: paddingLeft, right: paddingRight },
            height: { small: smallHeight, normal: normalHeight },
            font: { size, weight },
            border: {
              small: { width: smallWidth },
              default: { width: defaultWidth },
              radius,
            },
            types: {
              contained: {
                backgroundColor: {
                  disabled: disabledBackgroundColor,
                  enabled: enabledBackgroundColor,
                  pressed: pressedBackgroundColor,
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
      width: ${full ? '100%' : 'auto'};
      height: ${small ? smallHeight : normalHeight}px;
      padding-left: ${paddingLeft}px;
      padding-right: ${paddingRight}px;

      background-color: ${enabledBackgroundColor};
      border: ${
        small ? smallWidth : defaultWidth
      }px solid ${enabledBackgroundColor};
      border-radius: ${radius}px;
      color: ${enabledTextColor};

      font-size: ${size}px;
      font-weight: ${weight};
      font-family: ${fonts[0]};
      letter-spacing: normal;
      line-height: 1;
      text-decoration: none;

      &:not([disabled]):hover, &:not([disabled]):focus {
        box-shadow: 0 4px 8px ${hexToRgb(enabledBackgroundColor, 0.45)};
      }

      &:active {
        background-color: ${pressedBackgroundColor};
        border-color: ${pressedBackgroundColor};
        color: ${pressedTextColor};
      }

      &:disabled {
        background-color ${disabledBackgroundColor};
        border-color: ${disabledBackgroundColor};
        color: ${disabledTextColor};

        cursor: not-allowed;
      }

      ${
        inverted
          ? `
        background-color: ${enabledTextColor};
        border-color: ${enabledTextColor};
        color: ${enabledBackgroundColor};

        &:active {
          background-color: ${enabledTextColor};
          border-color: ${enabledTextColor};
          color: ${pressedBackgroundColor};
        }

        &:not([disabled]):hover, &:not([disabled]):focus {
          box-shadow: 0 4px 8px ${hexToRgb(enabledTextColor, 0.45)};
        }
      `
          : ''
      }
    `}
`;

export default StyledButton;
