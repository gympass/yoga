import React from 'react';
import styled from 'styled-components';
import { Button } from '@gympass/yoga';

import { DocTitle } from '../components';

const ScrollView = styled.ScrollView`
  margin-bottom: 50px;
  padding: 10px;
  width: 100%;
`;

const ButtonWrapper = styled.View`
  margin-bottom: 10px;
  align-items: center;
`;

const ButtonPage = () => (
  <ScrollView>
    <DocTitle>Small Buttons</DocTitle>
    <ButtonWrapper>
      <Button small>Contained</Button>
    </ButtonWrapper>
    <ButtonWrapper>
      <Button.Outline small>Outline</Button.Outline>
    </ButtonWrapper>
    <ButtonWrapper>
      <Button.Text small>Text</Button.Text>
    </ButtonWrapper>

    <DocTitle>Contained Buttons</DocTitle>
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

    <DocTitle>Outline Buttons</DocTitle>
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

    <DocTitle>Link Buttons</DocTitle>
    <ButtonWrapper>
      <Button.Link>Link</Button.Link>
    </ButtonWrapper>
    <ButtonWrapper>
      <Button.Link inverted>Inverted</Button.Link>
    </ButtonWrapper>
    <ButtonWrapper>
      <Button.Link disabled>Disabled</Button.Link>
    </ButtonWrapper>

    <DocTitle>Text Buttons</DocTitle>
    <ButtonWrapper>
      <Button.Text>Text</Button.Text>
    </ButtonWrapper>
    <ButtonWrapper>
      <Button.Text disabled>Disabled</Button.Text>
    </ButtonWrapper>
  </ScrollView>
);

export default ButtonPage;
