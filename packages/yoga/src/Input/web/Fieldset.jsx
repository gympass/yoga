import styled from 'styled-components';
import { Wrapper as HelperWrapper } from './Helper';

const Fieldset = styled.fieldset`
  position: relative;
  margin: 0;
  padding: 0;

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
    width: ${full ? '100%' : `${input.width}px`};
    height: ${input.height}px;

    padding-left: ${input.label.padding.left + input.border.radius}px;

    border-radius: ${input.border.radius}px;
    border-width: ${input.border.width}px;
    border-style: solid;
    border-color: ${
      error ? colors.feedback.attention[1] : input.border.color.default
    };

    &:hover, &:focus-within {
      border-color: ${
        error ? colors.feedback.attention[1] : input.border.color.typed
      };

      ${disabled ? `border-color: ${colors.elements.lineAndBorders};` : ''}
    }

    &:focus-within + ${HelperWrapper} {
      color: ${input.helper.color.focus};
    }
  `}
`;

export default Fieldset;
