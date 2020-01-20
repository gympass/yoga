import styled from 'styled-components';
import { Card } from '../..';

const Content = styled(Card.Content)`
  ${({
    theme: {
      yoga: { spacing },
    },
  }) => `
    margin-top: ${spacing.medium}px;
  `}
`;

export default Content;
