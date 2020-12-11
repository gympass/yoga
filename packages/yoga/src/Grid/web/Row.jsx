import styled from 'styled-components';
import { media } from '@gympass/yoga-helpers';

const desktop = media.lg`
  ${({
    theme: {
      yoga: {
        components: { grid },
      },
    },
  }) => `
    grid-column-gap: ${grid.gutter.desktop}px;
  `}
`;

const mobile = media.xxs`
  ${({
    theme: {
      yoga: {
        components: { grid },
      },
    },
  }) => `
    grid-column-gap: ${grid.gutter.mobile}px;
  `}
`;

const Row = styled.div`
  display: grid;
  box-sizing: border-box;

  grid-template-columns: repeat(12, 1fr);

  ${mobile}
  ${desktop}
`;

export default Row;
