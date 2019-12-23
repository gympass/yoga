import styled from 'styled-components';
import query from './query';

const mobile = query().xxs`
  padding-left: 20px;
  padding-right: 20px;
`;

const desktop = query().lg`
  padding-left: 71px;
  padding-right: 71px;
`;

const Container = styled.div`
  box-sizing: border-box;

  margin: 0 auto;
  max-width: 1600px;

  ${mobile}
  ${desktop}
`;

export default Container;
