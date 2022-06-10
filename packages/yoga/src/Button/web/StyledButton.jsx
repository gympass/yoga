import styled from 'styled-components';
import { hexToRgb } from '@gympass/yoga-common';

const StyledButton = styled.button`
  box-sizing: border-box;
  text-align: center;
  outline: none;
  transition: all 0.2s;
  cursor: pointer;

  ${({
    full,
    small,
    inverted,
    secondary,
    disabled,
    theme: {
      yoga: {
        baseFont,
        components: { button },
      },
    },
  }) => {
    const state = secondary ? 'secondary' : 'primary';

    return `
      display: flex;
      align-items: center;
      justify-content: center;

      width: ${full ? '100%' : 'auto'};
      height: ${small ? button.height.small : button.height.default}px;
      padding-left: ${
        small ? button.padding.small.left : button.padding.default.left
      }px;
      padding-right: ${
        small ? button.padding.small.right : button.padding.default.right
      }px;

      background-color: ${
        button.types.contained.backgroundColor[state].default
      };
      border: none;
      border-radius: ${button.border.radius}px;
      color: ${button.types.contained.font.default.color};

      font-size: ${small ? button.font.size.small : button.font.size.default}px;
      font-weight: ${button.font.weight};
      font-family: ${baseFont.family};
      letter-spacing: normal;
      line-height: 1;
      text-decoration: none;

      svg {
        width: ${small ? button.icon.size.small : button.icon.size.default}px;
        height: ${small ? button.icon.size.small : button.icon.size.default}px;
        fill: ${button.types.contained.font.default.color};
        margin-right: ${button.icon.margin.right}px;

        transition: fill 0.2s;
      }

      &:not([disabled]):hover, &:not([disabled]):focus {
        box-shadow: 0 4px 8px ${hexToRgb(
          button.types.contained.backgroundColor[state].default,
          0.45,
        )};
      }

      &:active {
        background-color: ${
          button.types.contained.backgroundColor[state].pressed
        };
        color: ${button.types.contained.font.pressed.color};

        svg {
          fill: ${button.types.contained.font.pressed.color};
        }
      }

      ${
        disabled
          ? `
      
        background-color ${button.types.contained.backgroundColor.disabled};
        color: ${button.types.contained.font.disabled.color};
        pointer-events: none;

        svg {
          fill: ${button.types.contained.font.disabled.color};
        }

        cursor: not-allowed;
      
      `
          : ''
      }
      

      ${
        inverted
          ? `
        background-color: ${button.types.contained.font.default.color};
        color: ${button.types.contained.backgroundColor[state].default};

        svg {
          fill: ${button.types.contained.backgroundColor[state].default};
        }

        &:active {
          background-color: ${hexToRgb(
            button.types.contained.font.default.color,
            0.75,
          )};
          color: ${button.types.contained.backgroundColor[state].pressed};

          svg {
            fill: ${button.types.contained.backgroundColor[state].pressed};
          }
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
    `;
  }}
`;

export default StyledButton;
