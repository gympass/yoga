import styled from 'styled-components';
import check from './CheckIcon';

const CheckMark = styled.div(
  ({
    checked,
    disabled,
    error,
    theme: {
      components: { checkbox },
    },
  }) => `
    position: relative;
    width: 24px;
    height: 24px;
    margin-right: ${checkbox.margin.right}px;

    border-radius: ${checkbox.border.radii}px;
    border-width: ${checkbox.border.width}px;
    border-style: solid;

    ${
      checked
        ? `background-color: ${checkbox.checked.backgroundColor}; 
           background-image: url(${check}); 
           background-size: 16px 16px;
           background-repeat: no-repeat;
           background-position: center;`
        : ''
    }

    border-color: ${
      disabled
        ? `${checkbox.disabled.border.color}`
        : `${checkbox.border.color}`
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
  `,
);

export default CheckMark;
