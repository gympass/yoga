import React from 'react';
import { render } from '@testing-library/react';
import { Dumbbell, User, Star } from '@gympass/yoga-icons';
import { Text, ThemeProvider } from '../..';
import ActionRequirement from './ActionRequirement';

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
        <ActionRequirement title="title" description="description" />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with list', () => {
    const { container } = render(
      <ThemeProvider>
        <ActionRequirement
          title="title"
          description="description"
          list={handleGetList()}
        />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with text display', () => {
    const { container } = render(
      <ThemeProvider>
        <ActionRequirement
          title="title"
          description="description"
          titleAsTextDisplay
        />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with aria-level 2', () => {
    const { container } = render(
      <ThemeProvider>
        <ActionRequirement
          title="title"
          description="description"
          titleAsTextDisplay
          ariaLevelTitle={2}
        />
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render multiple paragraphs when description is an array', () => {
    const descriptions = [
      'First requirement paragraph.',
      'Second requirement giving more context.',
      'Final requirement details here.',
    ];

    const { getByText } = render(
      <ThemeProvider>
        <ActionRequirement title="title" description={descriptions} />
      </ThemeProvider>,
    );

    descriptions.forEach(d => {
      expect(getByText(d)).toBeTruthy();
    });
  });
});
