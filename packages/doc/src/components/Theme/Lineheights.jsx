import React from 'react';
import styled, { withTheme } from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  margin: 30px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  span {
    :nth-child(1) {
      font-size: 28px;
    }
    :nth-child(2) {
      font-weight: bold;
    }
  }
`;

const LineHeights = ({ theme }) => {
  return (
    <Wrapper>
      <Content>
        <span> {theme.yoga.lineHeights[0]} </span>
        <span> xxsmall </span>
      </Content>
      <Content>
        <span> {theme.yoga.lineHeights[1]} </span>
        <span> xsmall </span>
      </Content>
      <Content>
        <span> {theme.yoga.lineHeights[2]} </span>
        <span> small </span>
      </Content>
      <Content>
        <span> {theme.yoga.lineHeights[3]} </span>
        <span> medium </span>
      </Content>
      <Content>
        <span> {theme.yoga.lineHeights[4]} </span>
        <span> large </span>
      </Content>
      <Content>
        <span> {theme.yoga.lineHeights[5]} </span>
        <span> xlarge </span>
      </Content>
      <Content>
        <span> {theme.yoga.lineHeights[6]} </span>
        <span> xxlarge </span>
      </Content>
      <Content>
        <span> {theme.yoga.lineHeights[7]} </span>
        <span> xxxlarge </span>
      </Content>
      <Content>
        <span> {theme.yoga.lineHeights[8]} </span>
        <span> huge </span>
      </Content>
    </Wrapper>
  );
};

export default withTheme(LineHeights);
