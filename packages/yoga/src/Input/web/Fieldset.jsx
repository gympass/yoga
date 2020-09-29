import styled from 'styled-components';

const Fieldset = styled.fieldset`
  bottom: 0;
  height: 60px;
  margin: 0;
  padding: 0;
  position: relative;
  right: 0;

  ${({
    error,
    disabled,
    full,
    theme: {
      yoga: {
        colors,
        components: { input },
      },
    },
  }) => `
    border-radius: ${input.border.radius}px;
    border-width: ${input.border.width}px;
    border-style: solid;
    border-color: ${error ? colors.negative[1] : input.border.color.default};
    padding-left: ${input.label.padding.left + input.border.radius}px;
    width: ${full ? '100%' : `${input.width}px`};


    &:hover, &:focus-within {
      border-color: ${error ? colors.negative[1] : input.border.color.typed};

      ${disabled ? `border-color: ${colors.disabled.background};` : ''}
  `}
`;

export default Fieldset;
