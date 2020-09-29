import styled, { css } from 'styled-components';

const ICON_SIZE = 24;

const labelTransition = css`
  ${({
    as,
    theme: {
      yoga: {
        components: { input },
      },
    },
  }) => `
    font-size: ${input.label.font.size.typed}px;
    transform: translateY(-${as === 'textarea' ? '30' : '14'}px);
  `}
`;

const Field = styled.input`
  appearance: none;
  background-color: transparent;
  left: 0;
  outline: none;
  position: absolute;
  width: 100%;
  z-index: 1000;
  transform: translateY(-5px);

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
    height: 52px;
    padding-bottom: ${input.padding.bottom}px;
    padding-left: ${input.padding.left}px;
    padding-right: ${
      cleanable ? ICON_SIZE + input.padding.right : input.padding.right
    }px;
    padding-top: ${input.padding.top}px;

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
