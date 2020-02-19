import styled, { css } from 'styled-components';

const ICON_SIZE = 24;

const labelTransition = css`
  ${({
    theme: {
      yoga: {
        transition,
        components: { input },
      },
    },
  }) => `
    top: -1px;
    left: ${input.padding.left - 2}px;

    padding-right: ${input.label.padding.right}px;
    padding-left: ${input.label.padding.left}px;

    font-size: ${input.label.font.size.typed}px;

    transform: translateY(-50%);
    transition-duration: ${transition.duration[0]}ms;
    transition-timing-function: cubic-bezier(${transition.timing[0].join()});
  `}
`;

const Field = styled.input`
  width: 100%;
  appearance: none;
  background-color: transparent;
  outline: none;

  ${({
    cleanable,
    error,
    typed,
    theme: {
      yoga: {
        colors,
        baseFont,
        components: { input },
      },
    },
  }) => css`
    height: 100%;

    padding-top: ${input.padding.top}px;
    padding-right: ${
      cleanable ? ICON_SIZE + input.padding.right : input.padding.right
    }px;
    padding-bottom: ${input.padding.bottom}px;
    padding-left: ${input.padding.left}px;

    color: ${input.font.color.focus};
    border: none;

    font-family: ${baseFont.family}, sans-serif;
    font-size: ${input.font.size}px;
    font-weight: ${input.font.weight};

    box-sizing: border-box;

    &:focus {
      color: ${input.font.color.focus};

      & + label {
        ${labelTransition}

        font-weight: ${input.label.font.weight.typed};
        color: ${error ? `${colors.negative[1]}` : `${colors.gray.darker}`};
      }
    }

    &:disabled {
      cursor: not-allowed;
      border-color: ${colors.disabled.background};
      color: ${colors.disabled.background};
    }

    &::placeholder {
      color: ${input.label.color.default};
    }

    ${
      error
        ? `
      border-color: ${colors.negative[1]};
    `
        : ''
    }

    ${
      typed
        ? css`
            & + label {
              ${labelTransition}
            }
          `
        : ''
    }
  `}

  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    display: none;
  }
`;

export default Field;
