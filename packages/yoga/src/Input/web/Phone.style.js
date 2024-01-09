import styled, { css } from 'styled-components';
import { flagsSprite, chevronSvg, checkSvg } from './data-images';

const flagsPositioning = css`
  .ar {
    background-position: 0px 0px;
  }

  .br {
    background-position: -20px 0px;
  }

  .cl {
    background-position: 0px -20px;
  }

  .de {
    background-position: -20px -20px;
  }

  .es {
    background-position: -20px -40px;
  }

  .gb {
    background-position: -60px 0px;
  }

  .ie {
    background-position: -40px 0px;
  }

  .it {
    background-position: -40px -20px;
  }

  .mx {
    background-position: 0px -40px;
  }

  .pt {
    background-position: -40px -40px;
  }

  .us {
    background-position: -60px -20px;
  }
`;

const hiddenScrollBar = css`
  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const labelStateColors = ({
  disabled,
  error,
  theme: {
    yoga: { colors },
  },
}) => css`
  ${disabled ? `color: ${colors.text.disabled};` : ''}
  ${error ? `color: ${colors.feedback.attention[1]};` : ''}
`;

export const Container = styled.div`
  --fieldset-left-offset: 12px;
  --dropdown-zIndex: 1;

  height: inherit;

  ${({
    disabled,
    theme: {
      yoga: {
        spacing,
        colors,
        baseFont,
        components: { input },
      },
    },
  }) => css`
    .react-tel-input {
      box-sizing: border-box;
      position: relative;
      width: 100%;
      height: inherit;
      font-family: ${baseFont.family}, sans-serif;
      font-size: ${input.font.size}px;
      font-weight: ${input.font.weight};
      display: grid;
      grid-template-areas: 'dropdown input';
      grid-template-columns: min-content 1fr;

      .special-label {
        position: absolute;
        top: -${spacing.xxsmall}px;
        display: block;
        background: white;
        padding: 0 ${spacing.xxxsmall}px;
        white-space: nowrap;
        font-size: ${input.label.font.size.typed}px;
        color: ${input.label.color.default};
        letter-spacing: normal;
        ${labelStateColors};
      }

      &:focus-within {
        .special-label {
          font-weight: ${input.label.font.weight.typed};
          color: ${input.label.color.focus};
          ${labelStateColors};
        }
      }

      input[disabled] + .flag-dropdown:hover {
        cursor: not-allowed;
      }

      .form-control {
        background: transparent;
        border: none;
        width: 100%;
        outline: none;
        grid-area: input;
        color: ${disabled ? colors.text.disabled : input.font.color.focus};
        font-family: ${baseFont.family}, sans-serif;
        font-size: ${input.font.size}px;
        padding-left: ${spacing.xsmall}px;

        &:disabled {
          cursor: not-allowed;
        }

        &::placeholder {
          color: ${input.font.color.default};
        }

        &:hover,
        &:focus {
          box-shadow: none;
        }

        &.open {
          z-index: calc(var(--dropdown-zIndex) + 1);
        }
      }

      .flag-dropdown {
        border: none;
        width: inherit;
        grid-area: dropdown;

        &.open {
          width: 100%;
          z-index: var(--dropdown-zIndex);
        }

        &.open,
        &.open .selected-flag,
        &:hover,
        &:focus {
          cursor: pointer;
          background: transparent;
        }
      }

      .selected-flag {
        display: flex;
        position: relative;
        width: 52px;
        height: 100%;
        padding: 0;
        padding-left: ${spacing.xxxsmall}px;
        align-items: center;
        opacity: ${disabled ? 0.5 : 1};

        &::after {
          content: '';
          position: absolute;
          background-color: ${input.border.color.default};
          height: 28px;
          right: -${spacing.xxxsmall}px;
          width: 1px;
          top: 50%;
          transform: translate(0, -50%);
        }

        .flag {
          display: flex;
          align-items: center;

          .arrow {
            background-color: ${input.label.color.default};
            mask-image: url('data:image/svg+xml;utf8,${chevronSvg}');
            width: 16px;
            height: 16px;
            transition: 0.6s, color 0.1s;
            position: relative;
            left: ${spacing.large + spacing.xxxsmall}px;

            &.up {
              border: none;
              transform: rotateX(180deg);
            }

            &:hover,
            &:focus {
              border: none;
              background-color: ${input.label.color.focus};
            }
          }
        }
      }

      .flag {
        width: 20px;
        height: 20px;
        background-image: url('data:image/png;base64,${flagsSprite}');
        background-repeat: no-repeat;
      }

      ${flagsPositioning};

      .country-list {
        background-color: white;
        position: absolute;
        padding: 0;
        outline: none;
        overflow-y: scroll;
        list-style: none;
        max-height: 18rem;
        margin: -${spacing.xxsmall}px 0 0 calc(-1 * var(--fieldset-left-offset) -
              1px);
        width: calc(100% + var(--fieldset-left-offset) + 2px);
        z-index: var(--dropdown-zIndex);
        border: 1px solid ${input.border.color.typed};
        border-top: 0;
        border-bottom-left-radius: ${spacing.xxsmall}px;
        border-bottom-right-radius: ${spacing.xxsmall}px;

        ${hiddenScrollBar};

        .country {
          display: flex;
          align-items: center;
          outline: 0;
          padding: ${spacing.xsmall}px ${spacing.small}px ${spacing.xsmall}px
            ${spacing.small}px;
          color: ${input.font.color.focus};

          .flag {
            margin-right: ${spacing.small}px;
          }

          .country-name {
            margin-right: ${spacing.xxxsmall}px;
          }

          .dial-code {
            color: inherit;
            display: flex;
            flex: 1;

            ::before {
              content: '(';
            }

            ::after {
              content: ')';
            }
          }

          &.highlight {
            background-color: transparent;
            color: ${colors.primary};

            &::after {
              content: '';
              background-color: ${colors.primary};
              mask-image: url('data:image/svg+xml;utf8,${checkSvg}');
              width: 16px;
              height: 16px;
            }
          }

          &.focus,
          &:hover {
            background-color: ${colors.elements.backgroundAndDisabled};
          }
        }
      }
    }
  `}
`;
