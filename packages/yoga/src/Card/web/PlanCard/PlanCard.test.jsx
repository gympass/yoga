import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Star } from '@gympass/yoga-icons';
import { ThemeProvider, Button } from '../../..';
import PlanCard from '.';

describe('<PlanCard />', () => {
  const buttonOnClickMock = jest.fn();

  const renderPlan = () =>
    render(
      <ThemeProvider>
        <PlanCard>
          <PlanCard.Tag>Recommended Plan</PlanCard.Tag>
          <PlanCard.Content
            subtitle="plan"
            title="Basic"
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
      const { getByText } = renderPlan();
      fireEvent.click(getByText('button'));

      expect(buttonOnClickMock).toHaveBeenCalled();
    });
  });

  describe('Snapshots', () => {
    it('should match snapshot with default PlanCard', () => {
      const { container: planCard } = renderPlan();
      expect(planCard).toMatchSnapshot();
    });

    it('should match snapshot with variant', () => {
      const { container } = render(
        <ThemeProvider>
          <PlanCard variant="hope">
            <PlanCard.Content
              subtitle="plan"
              title="Basic"
              currency="$"
              price="99.90"
              period="/month"
            />
          </PlanCard>
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with suffix', () => {
      const { container } = render(
        <ThemeProvider>
          <PlanCard variant="hope">
            <PlanCard.Content
              subtitle="plan"
              title="Basic"
              currency="$"
              suffix="MXN"
              price="99.90"
              period="/month"
            />
          </PlanCard>
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });
  });
});
