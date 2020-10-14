import styled, { css } from 'styled-components';

const StyledLabel = styled.label`
  letter-spacing: normal;
  pointer-events: none;
  position: absolute;
  user-select: none;

  ${({
    theme: {
      yoga: {
        transition,
        components: { input },
      },
    },
  }) => css`
    top: ${input.padding.top}px;
    left: ${input.padding.left}px;

    font-size: ${input.label.font.size.default}px;
    font-weight: ${input.label.font.weight.default};
    color: ${input.label.color.default};

    transition-property: transform, font-size;
    transition-duration: ${transition.duration[1]}ms;
    transition-timing-function: cubic-bezier(${transition.timing[0].join()});
  `}

  ${({ error, theme: { yoga } }) =>
    error
      ? css`
          color: ${yoga.colors.negative[1]};
        `
      : ''};

  ${({ disabled, theme: { yoga } }) =>
    disabled
      ? css`
          color: ${yoga.colors.disabled.background};
        `
      : ''};
`;

export default StyledLabel;
