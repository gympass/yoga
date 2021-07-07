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
    padding: 4px 0;

    :nth-child(1) {
      font-weight: bold;
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
        <span> {theme.yoga.fontWeights.light} </span>
        <span> light </span>
        <Text theme={theme} weight={0}>
          Gympass
        </Text>{' '}
      </Content>
      <Content>
        <span> {theme.yoga.fontWeights.regular} </span>
        <span> regular </span>
        <Text theme={theme} weight={1}>
          Gympass
        </Text>
      </Content>
      <Content>
        <span> {theme.yoga.fontWeights.medium} </span>
        <span> medium </span>
        <Text theme={theme} weight={2}>
          Gympass
        </Text>
      </Content>
      <Content>
        <span> {theme.yoga.fontWeights.bold} </span>
        <span> bold </span>
        <Text theme={theme} weight={3}>
          Gympass
        </Text>
      </Content>
      <Content>
        <span> {theme.yoga.fontWeights.black} </span>
        <span> black </span>
        <Text theme={theme} weight={4}>
          Gympass
        </Text>
      </Content>
    </Wrapper>
  );
};

export default withTheme(FontWeights);
