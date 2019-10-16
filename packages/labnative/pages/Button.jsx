import React from 'react';
import styled from 'styled-components';
import { Button } from '@gympass/design-system';

const ScrollView = styled.ScrollView`
  padding: 10px;
  width: 100%;
`;

const ButtonWrapper = styled.View`
  margin-bottom: 10px;
`;

const ButtonPage = () => (
  <ScrollView>
    <ButtonWrapper>
      <Button small>Small Button</Button>
    </ButtonWrapper>

    <ButtonWrapper>
      <Button>Contained Button</Button>
    </ButtonWrapper>

    <ButtonWrapper>
      <Button disabled>Disabled Button</Button>
    </ButtonWrapper>

    <ButtonWrapper>
      <Button outline>Outline Button</Button>
    </ButtonWrapper>

    <ButtonWrapper>
      <Button outline disabled>
        Disabled Outline Button
      </Button>
    </ButtonWrapper>

    <ButtonWrapper>
      <Button text>Text Button</Button>
    </ButtonWrapper>

    <ButtonWrapper>
      <Button text disabled>
        Disabled Text Button
      </Button>
    </ButtonWrapper>

    <ButtonWrapper style={{ width: '100%' }}>
      <Button full>Full Button</Button>
    </ButtonWrapper>
  </ScrollView>
);

export default ButtonPage;
