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
      <Text.H5>Heading H5</Text.H5>
    </TextWrapper>
    <TextWrapper>
      <Text.H1 variant="primary" light>
        Heading H1
      </Text.H1>
    </TextWrapper>
    <TextWrapper>
      <Text.H2 variant="secondary" light>
        Heading H2
      </Text.H2>
    </TextWrapper>
    <TextWrapper>
      <Text.H3 variant="tertiary" light>
        Heading H3
      </Text.H3>
    </TextWrapper>
    <TextWrapper>
      <Text>Text Paragraph</Text>
    </TextWrapper>
    <TextWrapper>
      <Text.Small>Text Small</Text.Small>
    </TextWrapper>
    <TextWrapper>
      <Text.Light>Text Light</Text.Light>
    </TextWrapper>
    <TextWrapper>
      <Text.Regular>Text Regular</Text.Regular>
    </TextWrapper>
    <TextWrapper>
      <Text.Medium>Text Medium</Text.Medium>
    </TextWrapper>
    <TextWrapper>
      <Text.Bold>Text Bold</Text.Bold>
    </TextWrapper>
    <TextWrapper>
      <Text.Black>Text Black</Text.Black>
    </TextWrapper>
    <TextWrapper>
      <Text.Medium size="xsmall">XSmall Text.Medium</Text.Medium>
    </TextWrapper>
    <TextWrapper>
      <Text.Medium size="medium">Medium Text.Medium</Text.Medium>
    </TextWrapper>
    <TextWrapper>
      <Text.Medium size="xlarge">XLarge Text.Medium</Text.Medium>
    </TextWrapper>
  </ScrollView>
);

export default TextPage;
