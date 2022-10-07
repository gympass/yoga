import React from 'react';
import { render } from '@testing-library/react';
import { Text } from '@gympass/yoga';
import { Dumbbell, User, Star } from '@gympass/yoga-icons';
import ActionRequirement from './ActionRequirement';
import { ThemeProvider } from '../..';

function handleGetList() {
  return (
    <>
      <Text>
        <Dumbbell /> 1x/day standard access
      </Text>
      <Text mt="small">
        <User /> 4x/month 1-on-1 sessions
      </Text>
      <Text mt="small">
        <Star /> 2x/month premium classes
      </Text>
    </>
  );
}

describe('<ActionRequirement />', () => {
  it('should default match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <ActionRequirement />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with list', () => {
    const { container } = render(
      <ThemeProvider>
        <ActionRequirement list={handleGetList()} />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
