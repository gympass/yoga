import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Star } from '@gympass/yoga-icons';
import { ThemeProvider, Button } from '../../..';
import PlanCard from '.';

describe('<PlanCard />', () => {
  const buttonOnClickMock = jest.fn();

  const { container: planCard, getByText } = render(
    <ThemeProvider>
      <PlanCard>
        <PlanCard.Content
          subtitle="plan"
          title="Baisc"
          currency="$"
          price="99.90"
          period="/month"
        >
          <PlanCard.Subtitle>Get access to</PlanCard.Subtitle>
          <PlanCard.List>
            <PlanCard.ListItem
              icon={Star}
              text="list item"
              buttonProps={{
                children: 'button',
                as: 'a',
                onClick: buttonOnClickMock,
              }}
            />
          </PlanCard.List>
        </PlanCard.Content>
        <PlanCard.Actions>
          <Button full>Select this plan</Button>
        </PlanCard.Actions>
      </PlanCard>
    </ThemeProvider>,
  );
  describe('Events', () => {
    it('should call onClick when ListItem has a button', () => {
      fireEvent.click(getByText('button'));

      expect(buttonOnClickMock).toHaveBeenCalled();
    });
  });

  describe('Snapshots', () => {
    it('should match snapshot with default PlanCard', () => {
      expect(planCard).toMatchSnapshot();
    });
  });
});
