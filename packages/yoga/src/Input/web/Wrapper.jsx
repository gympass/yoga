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
          border-width: ${input.border.width}px;
          border-style: solid;
          border-color: ${input.border.color.default};
        `
        : ''
    }


    & {
      width: ${full ? '100%' : `${input.width}px`};
    }

    ${
      error
        ? `
      border-color: ${colors.feedback.attention[1]};

      fieldset {
        border-color: ${colors.feedback.attention[1]};
      }
    `
        : ''
    }


    svg {
      position: absolute;
      top: 0;
      right: 0;

      padding-right: ${spacing.small}px;
      padding-left: ${spacing.xxsmall}px;

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
        font-weight: ${input.label.font.weight.typed};
      }
    }

    &:hover, &:focus-within {
      ${
        label
          ? `
          fieldset {
            border-color: ${
              error ? colors.feedback.attention[1] : input.border.color.typed
            };

            ${
              disabled
                ? `border-color: ${colors.elements.backgroundAndDisabled};`
                : ''
            }
          }`
          : `
          border-color: ${
            error ? colors.feedback.attention[1] : input.border.color.typed
          };

          ${
            disabled
              ? `border-color: ${colors.elements.backgroundAndDisabled};`
              : ''
          }
      `
      }
    }

    ${
      disabled
        ? `
            border-color: ${colors.elements.backgroundAndDisabled};
            color: ${colors.elements.backgroundAndDisabled};

            svg {
              fill: ${colors.elements.backgroundAndDisabled};
              pointer-events: none;
            }

            ${
              label
                ? `fieldset { border-color: ${colors.elements.backgroundAndDisabled}; }`
                : ''
            }
          `
        : ''
    }
  `}
`;

export default Wrapper;
