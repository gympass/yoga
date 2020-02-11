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
        components: { button },
      },
    },
  }) => `
      width: ${full ? '100%' : 'auto'};
      height: ${small ? button.height.small : button.height.default}px;
      padding-left: ${button.padding.left}px;
      padding-right: ${button.padding.right}px;

      background-color: ${button.types.contained.backgroundColor.default};
      border: ${
        small ? button.border.small.width : button.border.default.width
      }px solid ${button.types.contained.backgroundColor.default};
      border-radius: ${button.border.radius}px;
      color: ${button.types.contained.font.default.color};

      font-size: ${button.font.size}px;
      font-weight: ${button.font.weight};
      font-family: ${fonts[0]};
      letter-spacing: normal;
      line-height: 1;
      text-decoration: none;

      &:not([disabled]):hover, &:not([disabled]):focus {
        box-shadow: 0 4px 8px ${hexToRgb(
          button.types.contained.backgroundColor.default,
          0.45,
        )};
      }

      &:active {
        background-color: ${button.types.contained.backgroundColor.pressed};
        border-color: ${button.types.contained.backgroundColor.pressed};
        color: ${button.types.contained.font.pressed.color};
      }

      &:disabled {
        background-color ${button.types.contained.backgroundColor.disabled};
        border-color: ${button.types.contained.backgroundColor.disabled};
        color: ${button.types.contained.font.disabled.color};

        cursor: not-allowed;
      }

      ${
        inverted
          ? `
        background-color: ${button.types.contained.font.default.color};
        border-color: ${button.types.contained.font.default.color};
        color: ${button.types.contained.backgroundColor.default};

        &:active {
          background-color: ${button.types.contained.font.default.color};
          border-color: ${button.types.contained.font.default.color};
          color: ${button.types.contained.backgroundColor.pressed};
        }

        &:not([disabled]):hover, &:not([disabled]):focus {
          box-shadow: 0 4px 8px ${hexToRgb(
            button.types.contained.font.default.color,
            0.45,
          )};
        }
      `
          : ''
      }
    `}
`;

export default StyledButton;
