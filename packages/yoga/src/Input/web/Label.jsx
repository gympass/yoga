import styled, { css } from 'styled-components';

const Label = styled.label`
  letter-spacing: normal;
  pointer-events: none;
  position: absolute;
  user-select: none;

  ${({
    disabled,
    theme: {
      yoga: {
        transition,
        colors,
        components: { input },
      },
    },
  }) => css`
    top: ${input.padding.top}px;
    left: ${input.padding.left}px;

    font-size: ${input.label.font.size.default}px;
    font-weight: ${input.label.font.weight};
    color: ${input.label.color.default};

    transition-property: transform, font-size;
    transition-duration: ${transition.duration[1]}ms;
    transition-timing-function: cubic-bezier(${transition.timing[0].join()});

    ${disabled ? `color: ${colors.text.disabled};` : ''}
  `}
`;

export default Label;
