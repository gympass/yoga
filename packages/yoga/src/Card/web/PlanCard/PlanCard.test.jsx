import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Star, MapPin } from '@gympass/yoga-icons';
import { ThemeProvider, Button, Icon } from '../../..';
import PlanCard from '.';

describe('<PlanCard />', () => {
  const buttonOnClickMock = jest.fn();

  const renderPlan = ({ clickableItems } = {}) =>
    render(
      <ThemeProvider>
        <PlanCard>
          <PlanCard.Tag variant="informative">Recommended Plan</PlanCard.Tag>
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
                icon={
                  <Icon
                    as={MapPin}
                    height="small"
                    width="small"
                    stroke="medium"
                  />
                }
                text="gyms and studios"
                onClick={clickableItems && jest.fn()}
              />
              <PlanCard.ListItem
                icon={Star}
                text="list item"
                buttonProps={{
                  children: 'button',
                  as: 'a',
                  onClick: buttonOnClickMock,
                }}
                onClick={clickableItems && jest.fn()}
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

    it('should make list item clickable', () => {
      const itemClickMock = jest.fn();

      const { getByRole } = render(
        <ThemeProvider>
          <PlanCard variant="energy">
            <PlanCard.Content title="Basic">
              <PlanCard.List>
                <PlanCard.ListItem
                  icon={
                    <Icon
                      as={MapPin}
                      height="small"
                      width="small"
                      stroke="medium"
                    />
                  }
                  text="gyms and studios"
                  onClick={itemClickMock}
                />
              </PlanCard.List>
            </PlanCard.Content>
          </PlanCard>
        </ThemeProvider>,
      );

      fireEvent.click(getByRole('button', { label: 'gyms and studios' }));

      expect(itemClickMock).toHaveBeenCalled();
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

    it('should render the extra content', () => {
      const { container } = render(
        <ThemeProvider>
          <PlanCard>
            <PlanCard.Content title="Basic" extra={<p>Hello</p>} />
          </PlanCard>
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should render the title without a colored badge', () => {
      const { getByText } = render(
        <ThemeProvider>
          <PlanCard>
            <PlanCard.Content title="Basic" />
          </PlanCard>
        </ThemeProvider>,
      );

      expect(getByText('Basic')).toMatchSnapshot();
    });

    it('should render the title with a colored badge', () => {
      const { getByText } = render(
        <ThemeProvider>
          <PlanCard>
            <PlanCard.Content title="Basic" badgeColor="energy" />
          </PlanCard>
        </ThemeProvider>,
      );

      expect(getByText('Basic')).toMatchSnapshot();
    });

    it('should render the discount', () => {
      const { container } = render(
        <ThemeProvider>
          <PlanCard discount="SAVE 40%" variant="energy">
            <PlanCard.Content title="Basic" />
          </PlanCard>
        </ThemeProvider>,
      );

      expect(container).toMatchSnapshot();
    });

    it('should render list item content as button', () => {
      const { container } = renderPlan({ clickableItems: true });

      expect(container).toMatchSnapshot();
    });
  });
});
