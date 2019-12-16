import styled from 'styled-components';
import check from '../CheckIcon';

const CheckMark = styled.div`
  position: relative;
  flex-shrink: 0;

  width: 24px;
  height: 24px;

  border-style: solid;

  ${({
    checked,
    disabled,
    error,
    theme: {
      yoga: {
        components: { checkbox },
      },
    },
  }) => `
    margin-right: ${checkbox.margin.right}px;

    border-radius: ${checkbox.border.radius}px;
    border-width: ${checkbox.border.width}px;
    ${
      checked
        ? `
          background-color: ${checkbox.checked.backgroundColor}; 
          background-image: url(${check}); 
          background-size: 16px 16px;
          background-repeat: no-repeat;
          background-position: center;
        `
        : ''
    }

    border-color: ${
      disabled ? checkbox.disabled.border.color : checkbox.border.color
    };

    ${
      disabled && checked
        ? `background-color: ${checkbox.disabled.backgroundColor};`
        : ''
    }

    ${error ? `border-color: ${checkbox.error.border.color};` : ''}

    ${
      error && checked
        ? `background-color: ${checkbox.error.backgroundColor};`
        : ''
    }
  `}
`;

export default CheckMark;
