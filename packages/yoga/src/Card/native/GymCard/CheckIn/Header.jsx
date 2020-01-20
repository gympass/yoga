import styled from 'styled-components';
import { Card } from '../..';

const Header = styled(Card.Header)`
  flex-direction: row;
  justify-content: space-between;

  ${({
    theme: {
      yoga: {
        components: {
          card: {
            gym: { checkIn },
          },
        },
      },
    },
  }) => `
    margin-bottom: ${checkIn.header.margin.bottom}px;
  `}
`;

export default Header;
