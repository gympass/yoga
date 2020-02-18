import styled, { css } from 'styled-components';

const Label = styled.label`
  position: absolute;

  letter-spacing: normal;
  pointer-events: none;
  user-select: none;

  ${({
    disabled,
    error,
    theme: {
      yoga: {
        colors,
        transition,
        components: { input },
      },
    },
  }) => css`
    top: ${input.padding.top * 1.5}px;
    left: ${input.padding.left}px;

    background-color: ${colors.gray.surface};

    font-size: ${input.label.font.size.default}px;
    font-weight: ${input.label.font.weight.default};
    color: ${input.label.color.default};

    transform: translateY(-40%);

    transition-duration: ${transition.duration[0]}ms;
    transition-timing-function: cubic-bezier(${transition.timing[0].join()});

    ${error ? `color: ${colors.negative[1]};` : ''}
    ${disabled ? `color: ${colors.disabled.background};` : ''}
  `}
`;

export default Label;
