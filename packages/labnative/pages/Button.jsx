import React from 'react';
import styled from 'styled-components';
import { Button } from '@gympass/yoga';

const ScrollView = styled.ScrollView`
  margin-bottom: 50px;
  padding: 10px;
  width: 100%;
`;

const ButtonWrapper = styled.View`
  margin-bottom: 10px;
  text-align: center;
`;

const StyledText = styled.Text`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  text-align: center;
`;

const ButtonPage = () => (
  <ScrollView>
    <StyledText>Small Buttons</StyledText>
    <ButtonWrapper>
      <Button small>Contained</Button>
    </ButtonWrapper>
    <ButtonWrapper>
      <Button.Outline small>Outline</Button.Outline>
    </ButtonWrapper>
    <ButtonWrapper>
      <Button.Text small>Text</Button.Text>
    </ButtonWrapper>

    <StyledText>Contained Buttons</StyledText>
    <ButtonWrapper>
      <Button>Contained</Button>
    </ButtonWrapper>
    <ButtonWrapper>
      <Button disabled>Disabled</Button>
    </ButtonWrapper>
    <ButtonWrapper>
      <Button inverted>Inverted</Button>
    </ButtonWrapper>
    <ButtonWrapper>
      <Button disabled inverted>
        Disabled Inverted
      </Button>
    </ButtonWrapper>

    <StyledText>Outline Buttons</StyledText>
    <ButtonWrapper>
      <Button.Outline>Outline</Button.Outline>
    </ButtonWrapper>
    <ButtonWrapper>
      <Button.Outline disabled>Disabled</Button.Outline>
    </ButtonWrapper>
    <ButtonWrapper>
      <Button.Outline inverted>Inverted</Button.Outline>
    </ButtonWrapper>
    <ButtonWrapper>
      <Button.Outline disabled inverted>
        Disabled Inverted
      </Button.Outline>
    </ButtonWrapper>

    <StyledText>Text Buttons</StyledText>
    <ButtonWrapper>
      <Button.Text>Text</Button.Text>
    </ButtonWrapper>
    <ButtonWrapper>
      <Button.Text disabled>Disabled</Button.Text>
    </ButtonWrapper>
  </ScrollView>
);

export default ButtonPage;
