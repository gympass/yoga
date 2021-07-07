import React from 'react';
import styled, { withTheme, css } from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 30px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid gray;
  padding: 20px 0;

  span {
    padding: 8px 0;

    :nth-child(2) {
      font-weight: bold;
    }
  }
`;

const Border = styled.div`
  ${({ theme, value, valueWidth }) => css`
    height: 36px;
    width: ${valueWidth}px;
    background-color: ${theme.yoga.colors.secondary};
    border-radius: ${theme.yoga.radii[value]}px;
  `}
`;

const Shape = ({ theme }) => {
  return (
    <Wrapper>
      <Content>
        <Border theme={theme} value={0} valueWidth={90} />
        <span>Sharp</span>
        <span>radii.sharp</span>
      </Content>
      <Content>
        <Border theme={theme} value={1} valueWidth={90} />
        <span>SemiRounded</span>
        <span>radii.semiRounded</span>
      </Content>
      <Content>
        <Border theme={theme} value={2} valueWidth={90} />
        <span>Rounded</span>
        <span>radii.rounded</span>
      </Content>
      <Content>
        <Border theme={theme} value={3} valueWidth={36} />
        <span>Circle</span>
        <span>radii.circle</span>
      </Content>
    </Wrapper>
  );
};

export default withTheme(Shape);
