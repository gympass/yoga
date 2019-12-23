import React from 'react';
import styled from 'styled-components';
import { Text } from '@gympass/yoga';

const ScrollView = styled.ScrollView`
  margin-bottom: 50px;
  padding: 10px;
  width: 100%;
`;

const TextWrapper = styled.View`
  margin-bottom: 10px;
  text-align: center;
  align-items: center;
`;

const TextPage = () => (
  <ScrollView>
    <TextWrapper>
      <Text.H1 variant="primary">Heading H1</Text.H1>
    </TextWrapper>
    <TextWrapper>
      <Text.H2 variant="secondary">Heading H2</Text.H2>
    </TextWrapper>
    <TextWrapper>
      <Text.H3 variant="tertiary">Heading H3</Text.H3>
    </TextWrapper>
    <TextWrapper>
      <Text.H4>Heading H4</Text.H4>
    </TextWrapper>
    <TextWrapper>
      <Text>Text Paragraph</Text>
    </TextWrapper>
    <TextWrapper>
      <Text.Small>Text Small</Text.Small>
    </TextWrapper>
    <TextWrapper>
      <Text.Tiny>Text Tiny</Text.Tiny>
    </TextWrapper>
  </ScrollView>
);

export default TextPage;
