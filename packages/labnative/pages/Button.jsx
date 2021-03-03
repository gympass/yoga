import React from 'react';
import styled from 'styled-components';
import { Button } from '@gympass/yoga';
import { Booking } from '@gympass/yoga-icons';

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
      <Button icon={Booking} small>
        Contained with Icon
      </Button>
    </ButtonWrapper>
    <ButtonWrapper>
      <Button.Text small>Text</Button.Text>
    </ButtonWrapper>
    <ButtonWrapper>
      <Button.Text icon={Booking} small>
        Text with Icon
      </Button.Text>
    </ButtonWrapper>

    <DocTitle>Contained Buttons</DocTitle>
    <ButtonWrapper>
      <Button>Contained</Button>
    </ButtonWrapper>
    <ButtonWrapper>
      <Button icon={Booking}>With Icon</Button>
    </ButtonWrapper>
    <ButtonWrapper>
      <Button disabled>Disabled</Button>
    </ButtonWrapper>
    <ButtonWrapper>
      <Button inverted>Inverted</Button>
    </ButtonWrapper>
    <ButtonWrapper>
      <Button icon={Booking} inverted>
        Inverted with Icon
      </Button>
    </ButtonWrapper>
    <ButtonWrapper>
      <Button disabled inverted>
        Disabled Inverted
      </Button>
    </ButtonWrapper>

    <DocTitle>Link Buttons</DocTitle>
    <ButtonWrapper>
      <Button.Link>Link</Button.Link>
    </ButtonWrapper>
    <ButtonWrapper>
      <Button.Link disabled>Disabled</Button.Link>
    </ButtonWrapper>

    <DocTitle>Text Buttons</DocTitle>
    <ButtonWrapper>
      <Button.Text>Text</Button.Text>
    </ButtonWrapper>
    <ButtonWrapper>
      <Button.Text icon={Booking}>With Icon</Button.Text>
    </ButtonWrapper>
    <ButtonWrapper>
      <Button.Text secondary>Secondary</Button.Text>
    </ButtonWrapper>
    <ButtonWrapper>
      <Button.Text icon={Booking} secondary>
        Secondary with Icon
      </Button.Text>
    </ButtonWrapper>
    <ButtonWrapper>
      <Button.Text inverted>Inverted</Button.Text>
    </ButtonWrapper>
    <ButtonWrapper>
      <Button.Text icon={Booking} inverted>
        Inverted with Icon
      </Button.Text>
    </ButtonWrapper>
    <ButtonWrapper>
      <Button.Text disabled>Disabled</Button.Text>
    </ButtonWrapper>
    <ButtonWrapper>
      <Button.Text icon={Booking} disabled>
        Disabled with Icon
      </Button.Text>
    </ButtonWrapper>
  </ScrollView>
);

export default ButtonPage;
