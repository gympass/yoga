import styled from 'styled-components/native';
import Button from '../../Button/index.native';

const ResultButton = styled(Button.Link)`
  ${({
    theme: {
      yoga: {
        spacing: { xxsmall, xlarge },
      },
    },
  }) => {
    return `
      margin-top: ${xxsmall}px;
      margin-right: ${xlarge}px;
    `;
  }}
`;

export default ResultButton;
