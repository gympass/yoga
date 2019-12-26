import styled from 'styled-components';
import query from './query';

const desktop = query().lg`
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

const mobile = query().xxs`
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
