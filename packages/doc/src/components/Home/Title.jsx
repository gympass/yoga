import styled from 'styled-components';

const Title = styled.h1`
  font-size: 48px;
  font-weight: 300;
  line-height: 64px;
  margin: 0 0 24px;

  @media (max-width: 900px) {
    font-size: 20px;
    line-height: 30px;
    margin-bottom: 0;
  }
`;

export default Title;
