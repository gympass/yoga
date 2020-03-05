import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  vertical-align: top;

  ${({
    disabled,
    error,
    full,
    theme: {
      yoga: {
        colors,
        spacing,
        components: { input },
      },
    },
  }) => `
    height: ${input.height}px;

    border-radius: ${input.border.radius}px;
    border: ${input.border.width}px solid ${input.border.color.default};

    svg {
      position: absolute;
      top: 0;
      right: 0;

      padding-right: ${spacing.medium}px;
      padding-left: ${spacing.xsmall}px;

      height: ${input.height}px;
      width: 20px;

      fill: ${input.font.color.default};
      outline: none;

      &:hover, &:focus {
        fill: ${input.font.color.focus};
      }
      
      box-sizing: content-box;
      cursor: pointer;
    }

    & {
      width: ${full ? '100%' : `${input.width}px`};
    }

    ${
      error
        ? `
      border-color: ${colors.negative[1]};
    `
        : ''
    }

    ${
      disabled
        ? `
            border-color: ${colors.disabled.background};
            color: ${colors.disabled.background};
            
            svg {
              fill: ${colors.disabled.background};
              pointer-events: none;
            }
          `
        : `   
          &:hover, &:focus-within {
            border-color: ${
              error ? colors.negative[1] : input.border.color.typed
            };
          }
        `
    }
  `}
`;

export default Wrapper;
