import React, { useState } from 'react';
import styled from 'styled-components';
import {
  ThemeProvider,
  AutoComplete,
  Button,
  Card,
  Text,
  EventCard,
  PlanCard,
  Checkbox,
  Dropdown,
  Input,
  List,
  Progress,
  RadioGroup,
  Rating,
  Slider,
  Stepper,
  Tag,
  TextArea,
} from '@gympass/yoga';

import { GlobalStyle } from 'components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  padding: 24px;

  @media (max-width: 900px) {
    padding: 18px;
  }

  > * {
    flex-shrink: 0;
    margin: 10px;
  }
`;

const HomePage = () => {
  const [values, setValue] = useState('');
  const [input, setInput] = useState('');
  const [checked, toggleChecked] = useState(false);
  const [onSwitch, onToggleSwitch] = useState(false);
  const [email, setEmail] = useState('');
  const [numberValue, setNumberValue] = useState('');
  const [password, setPassword] = useState('');
  const [tel, setTel] = useState('');
  const [selectedValueButton, setSelectedValueButton] = useState('');
  const [selectedValueRadio, setSelectedValueRadio] = useState('');
  const [rating, setRating] = useState(2);
  const [sliderValue, setSliderValue] = useState([0]);
  const onSwitchChange = () => onToggleSwitch(!onSwitch);
  const onCheckboxChange = () => toggleChecked(!checked);

  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Wrapper>
          <AutoComplete
            value={values}
            onChange={value => setValue(value)}
            onSelect={selected => setValue(selected)}
            onClean={cleaned => setValue(cleaned)}
            label="Auto Complete"
            options={[
              'Madrid',
              'Milan',
              'São Paulo',
              'New York',
              'Paris',
              'Buenos Aires',
              'Amsterdam',
              'Los Angeles',
              'Hollywood',
            ]}
          />
          <Button>Default</Button>
          <Button.Link>Link</Button.Link>
          <Button.Outline>Outline</Button.Outline>
          <Button.Text>Text</Button.Text>
          <Card style={{ width: 500 }} ribbon={{ text: 'Card Ribbon' }}>
            <Card.Header>
              <Text.H1>Card Header</Text.H1>
            </Card.Header>

            <Card.Content>
              <Text>Card Content.</Text>
            </Card.Content>

            <Card.Actions>
              <Text>Card Actions</Text>
            </Card.Actions>
          </Card>
          <EventCard
            style={{ width: 250 }}
            event={{
              name: 'Yoga Class',
              place: 'Gympass - Live the Mission',
              time: '19 am',
            }}
            date={{
              day: '19',
              dayOfWeek: 'thu',
              month: 'dez',
            }}
          />
          <PlanCard
            ribbon={{
              text: 'Super large label in french',
            }}
            variant="secondary"
          >
            <PlanCard.Content
              title="Gympass Black for employees with Buddha Spa + Reebook included"
              price="US$299.90"
              period="/month"
            />
            <PlanCard.Actions>
              <Button.Link inverted>See gyms included</Button.Link>
            </PlanCard.Actions>
          </PlanCard>
          <Checkbox
            checked={checked}
            onChange={onCheckboxChange}
            value="checkbox-value"
            label="Checkbox"
            helper="Checkbox Helper"
          />
          <Checkbox.Switch checked={onSwitch} onChange={onSwitchChange} />
          <Dropdown
            label="Dropdown"
            options={[
              { label: 'Yoga', value: 'yoga' },
              { label: 'Crossfit', value: 'crossfit' },
              { label: 'Tenis', value: 'tenis' },
              { label: 'Soccer', value: 'soccer' },
              { label: 'Pilates', value: 'pilates' },
              { label: 'Run', value: 'run' },
            ]}
          />
          <Input
            label="Text"
            helper="Helper text"
            maxLength={20}
            value={input}
            onChange={e => setInput(e.target.value)}
            onClean={cleaned => setInput(cleaned)}
          />
          <Input.Email
            label="E-mail"
            helper="Insert a valid e-mail address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onClean={cleaned => setEmail(cleaned)}
          />
          <Input.Number
            label="Number"
            value={numberValue}
            onChange={e => setNumberValue(e.target.value)}
            onClean={cleaned => setNumberValue(cleaned)}
          />
          <div>
            <Input.Password
              label="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <Input.Tel
            label="Telephone"
            value={tel}
            onChange={e => setTel(e.target.value)}
            onClean={cleaned => setTel(cleaned)}
          />
          <List>
            <List.Item>Item 1</List.Item>
            <List.Item>Item 2</List.Item>
            <List.Item>Item 3</List.Item>
          </List>
          <Progress
            max={100}
            value={65}
            label={{ value: 65, placement: 'right' }}
          />
          <RadioGroup
            name="openning"
            selectedValue={selectedValueButton}
            onChange={({ target: { value } }) => setSelectedValueButton(value)}
          >
            <RadioGroup.Button value="24h">24 hours</RadioGroup.Button>
            <RadioGroup.Button value="now">Open now</RadioGroup.Button>
            <RadioGroup.Button value="sundays">At Sundays</RadioGroup.Button>
          </RadioGroup>
          <RadioGroup
            name="openning2"
            selectedValue={selectedValueRadio}
            onChange={({ target: { value } }) => setSelectedValueRadio(value)}
          >
            <RadioGroup.Radio style={{ marginRight: 4 }} value="24h" />
            <RadioGroup.Radio style={{ marginRight: 4 }} value="now" />
            <RadioGroup.Radio value="sundays" />
          </RadioGroup>
          <Rating value={rating} onRate={setRating} readOnly={false} />;
          <Slider
            values={sliderValue}
            onChange={value => setSliderValue([value])}
            max={10}
            min={0}
            minLabel={values[0]}
            tooltip={[
              {
                description: 'Simple tooltip',
                step: 2,
                visible: true,
              },
            ]}
          />
          <Stepper activeStep={0}>
            <Stepper.Step label="Confirm Booking">
              <div>Confirm booking content</div>
            </Stepper.Step>
            <Stepper.Step label="Class Booked">
              <div>Class Booked content</div>
            </Stepper.Step>
            <Stepper.Step label="Check-in">
              <div>Check-in content</div>
            </Stepper.Step>
          </Stepper>
          <Tag variant="informative">informative</Tag>
          <Text.H1 variant="primary">Text H1</Text.H1>
          <Text.H2 variant="secondary">Text H2</Text.H2>
          <Text.H3 variant="tertiary">Text H3</Text.H3>
          <Text.H4>Text H4</Text.H4>
          <Text.H4>Text H5</Text.H4>
          <Text>Text</Text>
          <Text.Small>Text Small</Text.Small>
          <Text.Tiny>Text Tiny</Text.Tiny>
          <TextArea label="TextArea" helper="Helper text" maxLength={20} />
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

export default HomePage;
