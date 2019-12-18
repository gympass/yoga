import styled from 'styled-components';
import query from '../query';

const desktop = query().large`
  grid-column-gap: 24px;
`;

const mobile = query().xxsmall`
  grid-column-gap: 16px;
`;

const Row = styled.div`
  display: grid;
  box-sizing: border-box;

  grid-template-columns: repeat(12, 1fr);

  ${mobile}
  ${desktop}
`;

export default Row;
