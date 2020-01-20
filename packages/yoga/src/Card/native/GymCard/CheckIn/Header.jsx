import styled from 'styled-components';
import { Card } from '../..';

const Header = styled(Card.Header)`
  flex-direction: row;
  justify-content: space-between;

  ${({
    theme: {
      yoga: { spacing },
    },
  }) => `
    margin-bottom: ${spacing.medium}px;
  `}
`;

export default Header;
