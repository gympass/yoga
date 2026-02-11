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
        baseFont,
        components: { input },
      },
    },
  }) => css`
    top: ${input.padding.top}px;
    left: ${input.padding.left}px;

    font-family: ${baseFont.family};
    font-size: ${input.label.font.size.default}px;
    font-weight: ${input.label.font.weight};
    line-height: ${input.label.font.lineHeight.default}px;
    color: ${input.label.color.default};

    transition-property: transform, font-size;
    transition-duration: ${transition.duration[1]}ms;
    transition-timing-function: cubic-bezier(${transition.timing[0].join()});

    ${disabled ? `color: ${colors.steady};` : ''}
  `}
`;

export default Label;
