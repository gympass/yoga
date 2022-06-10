import styled from 'styled-components';

const Fieldset = styled.fieldset`
  position: relative;
  margin: 0;
  padding: 0;

  box-sizing: border-box;

  ${({
    error,
    disabled,
    full,
    value,
    theme: {
      yoga: {
        colors,
        components: { input },
      },
    },
  }) => `
    width: ${full ? '100%' : `${input.width}px`};
    height: ${input.height}px;

    padding-left: ${input.label.padding.left + input.border.radius}px;

    border-radius: ${input.border.radius}px;
    border-width: ${input.border.width}px;
    border-style: solid;
    border-color: ${
      error ? colors.feedback.attention[1] : input.border.color.default
    };

    ${value && !error ? `border-color: ${input.border.color.typed};` : ''}

    ${disabled ? `border-color: ${colors.elements.lineAndBorders};` : ''}

    &:hover, &:focus-within { 
      &:not(:disabled) {
        border-color: ${
          error ? colors.feedback.attention[1] : input.border.color.typed
        };
      } 
    }

    
  `}
`;

export default Fieldset;
