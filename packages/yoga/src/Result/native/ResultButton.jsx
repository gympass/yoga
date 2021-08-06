import styled from 'styled-components';
import Button from '../../Button';

const ResultButton = styled(Button.Link)`
  ${({
    theme: {
      yoga: {
        spacing: { xxsmall, xlarge },
      },
    },
  }) => {
    return `
      margin-top: ${xxsmall};
      margin-right:${xlarge}
    `;
  }}
`;

export default ResultButton;
