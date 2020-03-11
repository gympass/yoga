import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: inline-block;

  vertical-align: top;

  ${({
    disabled,
    error,
    full,
    label,
    theme: {
      yoga: {
        colors,
        spacing,
        components: { input },
      },
    },
  }) => `
    height: ${input.height}px;

    ${
      !label
        ? `
        border-radius: ${input.border.radius}px;
        border: 1px solid #d3d3e2;
        `
        : ''
    }


    & {
      width: ${full ? '100%' : `${input.width}px`};
    }

    ${
      error
        ? `
      border-color: ${colors.negative[1]};

      fieldset {
        border-color: ${colors.negative[1]};
      }
    `
        : ''
    }


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

    &:focus-within {
      legend {
        max-width: 1000px;
        font-weight: 700;
      }
    }

    &:hover, &:focus-within {
      ${
        label
          ? `
          fieldset {
            border-color: ${
              error ? colors.negative[1] : input.border.color.typed
            };

            ${disabled ? `border-color: ${colors.disabled.background};` : ''}
          }`
          : `
          border-color: ${
            error ? colors.negative[1] : input.border.color.typed
          };

          ${disabled ? `border-color: ${colors.disabled.background};` : ''}
      `
      }
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

            ${
              label
                ? `fieldset { border-color: ${colors.disabled.background}; }`
                : ''
            }
          `
        : ''
    }
  `}
`;

export default Wrapper;
