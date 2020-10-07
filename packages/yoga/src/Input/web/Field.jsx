import styled, { css } from 'styled-components';

const labelTransition = css`
  ${({
    as,
    theme: {
      yoga: {
        colors,
        components: { input },
      },
    },
  }) => `
    font-size: ${input.label.font.size.typed}px;
    background-color: ${colors.white};
    transform: 20px);
  `}
`;

const Field = styled.input`
  appearance: none;
  background-color: transparent;
  outline: none;
  width: 85%;

  ${({
    cleanable,
    error,
    value,
    theme: {
      yoga: {
        colors,
        baseFont,
        components: { input },
      },
    },
  }) => css`
    border: none;
    box-sizing: border-box;
    color: ${input.font.color.focus};
    font-family: ${baseFont.family}, sans-serif;
    font-size: ${input.font.size}px;
    font-weight: ${input.font.weight};
    height: 100%;

    &:focus-within,
    &:focus {
      color: ${input.font.color.focus};

      & ~ legend {
        max-width: 1000px;
        padding: 0 2px;
      }

      & ~ label {
        ${labelTransition}

        font-weight: ${input.label.font.weight.typed};
        color: ${error ? `${colors.negative[1]}` : `${colors.gray.darker}`};
      }
    }

    &:disabled {
      cursor: not-allowed;
      color: ${colors.disabled.background};
    }

    &::placeholder {
      color: ${input.label.color.default};
    }

    ${value &&
      css`
        & ~ legend {
          max-width: 1000px;
        }

        & ~ label {
          ${labelTransition}
        }
      `}
  `}

  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    display: none;
  }

  &:invalid {
    box-shadow: none;
  }
`;

export default Field;
