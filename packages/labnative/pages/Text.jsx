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
      <Text.Display1>Display1</Text.Display1>
    </TextWrapper>
    <TextWrapper>
      <Text.Display2>Display2</Text.Display2>
    </TextWrapper>
    <TextWrapper>
      <Text.Display3>Display3</Text.Display3>
    </TextWrapper>
    <TextWrapper>
      <Text.Display4>Display4</Text.Display4>
    </TextWrapper>
    <TextWrapper>
      <Text.DisplayNumber>12345</Text.DisplayNumber>
    </TextWrapper>
    <TextWrapper>
      <Text.H1>Heading H1</Text.H1>
    </TextWrapper>
    <TextWrapper>
      <Text.H2>Heading H2</Text.H2>
    </TextWrapper>
    <TextWrapper>
      <Text.H3>Heading H3</Text.H3>
    </TextWrapper>
    <TextWrapper>
      <Text.H4>Heading H4</Text.H4>
    </TextWrapper>
    <TextWrapper>
      <Text.H5>Heading H5</Text.H5>
    </TextWrapper>
    <TextWrapper>
      <Text.Body1>Body1</Text.Body1>
    </TextWrapper>
    <TextWrapper>
      <Text.Body2>Body2</Text.Body2>
    </TextWrapper>
    <TextWrapper>
      <Text.Caption>Caption</Text.Caption>
    </TextWrapper>
    <TextWrapper>
      <Text.Overline>Overline</Text.Overline>
    </TextWrapper>
    <TextWrapper>
      <Text.SectionTitle>SectionTitle</Text.SectionTitle>
    </TextWrapper>
    <TextWrapper>
      <Text.SmallestException>SmallestException</Text.SmallestException>
    </TextWrapper>

    <TextWrapper>
      <Text.Body1 bold>Bold</Text.Body1>
    </TextWrapper>
    <TextWrapper>
      <Text.Body1 light>Light</Text.Body1>
    </TextWrapper>
    <TextWrapper>
      <Text.H4 variant="primary">Primary</Text.H4>
    </TextWrapper>
    <TextWrapper>
      <Text.H4 variant="secondary">Secondary</Text.H4>
    </TextWrapper>
    <TextWrapper>
      <Text.Body1 numberOfLines={2}>
        Yoga is a scientific system of practices made to help each one of us
        achieve our highest potential and experience.
      </Text.Body1>
    </TextWrapper>
  </ScrollView>
);

export default TextPage;
