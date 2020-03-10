import styled from 'styled-components';

const Fieldset = styled.fieldset`
  position: absolute;
  top: -7px;
  left: 0;
  padding: 0;
  padding-left: 0px;
  right: 0;
  bottom: 0;
  margin: 0;
  pointer-events: none;

  ${({
    theme: {
      yoga: {
        components: { input },
      },
    },
  }) => `
    border-radius: ${input.border.radius}px;
    border: ${input.border.width}px solid ${input.border.color.default};
    padding-left: ${input.label.padding.left + input.border.radius}px;
  `}
`;

export default Fieldset;
