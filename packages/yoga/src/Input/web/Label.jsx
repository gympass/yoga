import styled, { css } from 'styled-components';

const StyledLabel = styled.label`
  letter-spacing: normal;
  pointer-events: none;
  position: absolute;
  user-select: none;

  ${({
    theme: {
      yoga: {
        components: { input },
      },
    },
  }) => css`
    transform: translateY(12px);
    left: 15px;

    font-size: ${input.label.font.size.default}px;
    font-weight: ${input.label.font.weight.default};
    color: ${input.label.color.default};

    transition-duration: 500ms;
    transition-timing-function: cubic-bezier(0, 0.75, 0.1, 1);
  `}

  ${({ error, theme: { yoga } }) =>
    error &&
    css`
      color: ${yoga.colors.negative[1]};
    `}

  ${({ disabled, theme: { yoga } }) =>
    disabled &&
    css`
      color: ${yoga.colors.disabled.background};
    `}
`;

export default StyledLabel;
