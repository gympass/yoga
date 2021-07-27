import styled from 'styled-components';
import Button from '../../Button';

const ResultButton = styled(Button.Link)`
  ${({
    theme: {
      yoga: {
        spacing: { xxsmall },
      },
    },
  }) => {
    return `
      margin-top: ${xxsmall};
    `;
  }}
`;

export default ResultButton;
