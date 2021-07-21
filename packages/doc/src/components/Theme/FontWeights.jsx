import React from 'react';
import styled, { withTheme, css } from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  margin: 30px 0;

  @media (max-width: 425px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  span {
    padding: 4px 0;

    :nth-child(1) {
      font-size: 28px;
    }
  }
`;

const Text = styled.span`
  ${({ theme, weight }) => css`
    font-weight: ${theme.yoga.fontWeights[weight]};
  `}
`;

const FontWeights = ({ theme }) => {
  return (
    <Wrapper>
      <Content>
        <Text theme={theme} weight={0}>
          {theme.yoga.fontWeights.light}
        </Text>
        <Text theme={theme} weight={0}>
          light
        </Text>
      </Content>
      <Content>
        <Text theme={theme} weight={1}>
          {theme.yoga.fontWeights.regular}
        </Text>
        <Text theme={theme} weight={1}>
          regular
        </Text>
      </Content>
      <Content>
        <Text theme={theme} weight={2}>
          {theme.yoga.fontWeights.medium}
        </Text>
        <Text theme={theme} weight={2}>
          medium
        </Text>
      </Content>
      <Content>
        <Text theme={theme} weight={3}>
          {theme.yoga.fontWeights.bold}
        </Text>
        <Text theme={theme} weight={3}>
          bold
        </Text>
      </Content>
      <Content>
        <Text theme={theme} weight={4}>
          {theme.yoga.fontWeights.black}
        </Text>
        <Text theme={theme} weight={4}>
          black
        </Text>
      </Content>
    </Wrapper>
  );
};

export default withTheme(FontWeights);
