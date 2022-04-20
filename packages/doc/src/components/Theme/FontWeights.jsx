import React from 'react';
import styled, { withTheme } from 'styled-components';
import { media } from '@gympass/yoga-helpers';
import { Box } from '@gympass/yoga/src';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  margin: 30px 0;

  ${media.max('sm')`
    grid-template-columns: repeat(3, 1fr);
  `}
`;

export const Content = (props) => (
  <Box display="flex" flexDirection="column" pv="medium" {...props} />
);

export const TextBox = (props) => <Box as="span" pv="xxxsmall" {...props} />;

const FontWeights = ({ theme }) => (
  <Wrapper>
    <Content>
      <TextBox fw="light" fs={28}>
        {theme.yoga.fontWeights.light}
      </TextBox>
      <TextBox fw="light">light</TextBox>
    </Content>
    <Content>
      <TextBox fw="regular" fs={28}>
        {theme.yoga.fontWeights.regular}
      </TextBox>
      <TextBox fw="regular">regular</TextBox>
    </Content>
    <Content>
      <TextBox fw="medium" fs={28}>
        {theme.yoga.fontWeights.medium}
      </TextBox>
      <TextBox fw="medium">medium</TextBox>
    </Content>
    <Content>
      <TextBox fw="bold" fs={28}>
        {theme.yoga.fontWeights.bold}
      </TextBox>
      <TextBox fw="bold">bold</TextBox>
    </Content>
    <Content>
      <TextBox fw="black" fs={28}>
        {theme.yoga.fontWeights.black}
      </TextBox>
      <TextBox fw="black">black</TextBox>
    </Content>
  </Wrapper>
);

export default withTheme(FontWeights);
