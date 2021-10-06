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
    <Wrapper style={{ height: 360 }}>
      <DocTitle>Icon Buttons</DocTitle>
      <Button.Icon icon={Booking} />
      <Button.Icon icon={Edit} small />

      <Button.Icon icon={Add} secondary />
      <Button.Icon icon={Check} secondary small />

      <Button.Icon icon={ChevronLeft} inverted small />
      <Button.Icon icon={Close} disabled small />
    </Wrapper>

    <Wrapper style={{ height: 360 }}>
      <DocTitle>Small Buttons</DocTitle>
      <Button small>Primary contained</Button>
      <Button icon={Booking} small>
        Contained with Icon
      </Button>
      <Button.Text small>Text</Button.Text>
      <Button.Text icon={Booking} small>
        Text with icon
      </Button.Text>
      <Button small secondary>
        Secondary contained
      </Button>
      <Button icon={Booking} small secondary>
        Secondary contained with Icon
      </Button>
      <Button.Text small secondary>
        Secondary text
      </Button.Text>
      <Button.Text icon={Booking} small secondary>
        Secondary text with icon
      </Button.Text>
    </Wrapper>

    <Wrapper style={{ height: 550 }}>
      <DocTitle>Contained Buttons</DocTitle>
      <Button>Contained</Button>
      <Button icon={Booking}>With Icon</Button>
      <Button inverted>Inverted</Button>
      <Button icon={Booking} inverted>
        Inverted with Icon
      </Button>
      <Button disabled>Disabled</Button>
      <Button secondary>Secondary contained</Button>
      <Button icon={Booking} secondary>
        Secondary with icon
      </Button>
      <Button inverted secondary>
        Secondary inverted
      </Button>
      <Button icon={Booking} inverted secondary>
        Secondary inverted with icon
      </Button>
    </Wrapper>

    <Wrapper style={{ height: 180 }}>
      <DocTitle>Link Buttons</DocTitle>
      <Button.Link>Link</Button.Link>
      <Button.Link secondary>Secondary Link</Button.Link>
      <Button.Link disabled>Disabled</Button.Link>
    </Wrapper>

    <Wrapper>
      <DocTitle>Text Buttons</DocTitle>

      <Button.Text>Text</Button.Text>
      <Button.Text icon={Booking}>With Icon</Button.Text>
      <Button.Text secondary>Secondary</Button.Text>
      <Button.Text icon={Booking} secondary>
        Secondary with Icon
      </Button.Text>
      <Button.Text inverted>Inverted</Button.Text>
      <Button.Text icon={Booking} inverted>
        Inverted with Icon
      </Button.Text>
      <Button.Text disabled>Disabled</Button.Text>
      <Button.Text icon={Booking} disabled>
        Disabled with Icon
      </Button.Text>
    </Wrapper>
  </ScrollView>
);

export default ButtonPage;
