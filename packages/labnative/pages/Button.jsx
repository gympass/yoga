import React from 'react';
import styled from 'styled-components';
import { Button, theme } from '@gympass/yoga';
import {
  Booking,
  Edit,
  Add,
  Check,
  ChevronLeft,
  Close,
} from '@gympass/yoga-icons';

import { DocTitle } from '../components';

const ScrollView = styled.ScrollView`
  margin-bottom: 50px;
  padding: 10px;
  width: 100%;
`;

const Wrapper = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-bottom-width: ${theme.borders.small}px;
  border-color: ${theme.colors.secondary};
  padding-bottom: ${theme.spacing.medium}px;
`;

const ButtonPage = () => (
  <ScrollView
    contentContainerStyle={{
      alignItems: 'center',
    }}
  >
    <Wrapper style={{ height: 550 }}>
      <DocTitle>Button</DocTitle>
      <Button small>Small</Button>
      <Button>Primary</Button>
      <Button full>Full</Button>
      <Button icon={Booking}>Primary with Icon</Button>
      <Button inverted>Inverted</Button>
      <Button inverted icon={Booking}>
        Inverted With Icon
      </Button>
      <Button disabled>Disabled</Button>
      <Button disabled icon={Booking}>
        Disabled With Icon
      </Button>
    </Wrapper>

    <Wrapper style={{ height: 550 }}>
      <DocTitle>Icon Buttons</DocTitle>
      <Button.Icon icon={Booking} />
      <Button.Icon icon={Edit} secondary />

      <Button.Icon icon={Add} small />
      <Button.Icon icon={Check} secondary small />

      <Button.Icon icon={ChevronLeft} inverted />
      <Button.Icon icon={Close} disabled />
    </Wrapper>

    <Wrapper style={{ height: 280 }}>
      <DocTitle>Link Buttons</DocTitle>
      <Button.Link>Primary Link</Button.Link>
      <Button.Link secondary>Secondary Link</Button.Link>
      <Button.Link disabled>Disabled Link</Button.Link>
    </Wrapper>

    <Wrapper>
      <DocTitle>Text Buttons</DocTitle>

      <Button.Text small>Small</Button.Text>
      <Button.Text>Primary</Button.Text>
      <Button.Text icon={Booking}>Primary with Icon</Button.Text>
      <Button.Text secondary>Secondary</Button.Text>
      <Button.Text icon={Booking} secondary>
        Secondary with Icon
      </Button.Text>
      <Button.Text disabled>Disabled</Button.Text>
      <Button.Text icon={Booking} disabled>
        Disabled with Icon
      </Button.Text>
      <Button.Text inverted>Inverted</Button.Text>
      <Button.Text icon={Booking} inverted>
        Inverted with Icon
      </Button.Text>
    </Wrapper>
  </ScrollView>
);

export default ButtonPage;
