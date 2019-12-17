import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider, Button } from '../../..';
import PlanCard from '.';

describe('<PlanCard />', () => {
  describe('Snapshots', () => {
    it('should match snapshot with default PlanCard', () => {
      const { container } = render(
        <ThemeProvider>
          <PlanCard>
            <PlanCard.Header>Gympass PlanCard</PlanCard.Header>
            <PlanCard.Content
              title="Gympass Black for employees with Buddha Spa + Reebook included"
              price="U$ 99.90"
              period="/month"
            >
              content&apos;s children is rendered
            </PlanCard.Content>
            <PlanCard.Actions>
              <Button>should have buttons</Button>
            </PlanCard.Actions>
          </PlanCard>
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with secondary PlanCard', () => {
      const { container } = render(
        <ThemeProvider>
          <PlanCard variant="secondary">
            <PlanCard.Header>Gympass PlanCard</PlanCard.Header>
            <PlanCard.Content
              title="Gympass Black for employees with Buddha Spa + Reebook included"
              price="U$ 99.90"
              period="/month"
            >
              content&apos;s children is rendered
            </PlanCard.Content>
            <PlanCard.Actions>
              <Button>should have buttons</Button>
            </PlanCard.Actions>
          </PlanCard>
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot with tertiary PlanCard', () => {
      const { container } = render(
        <ThemeProvider>
          <PlanCard variant="tertiary">
            <PlanCard.Header>Gympass PlanCard</PlanCard.Header>
            <PlanCard.Content
              title="Gympass Black for employees with Buddha Spa + Reebook included"
              price="U$ 99.90"
              period="/month"
            >
              content&apos;s children is rendered
            </PlanCard.Content>
            <PlanCard.Actions>
              <Button>should have buttons</Button>
            </PlanCard.Actions>
          </PlanCard>
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot PlanCard with ribbon', () => {
      const { container } = render(
        <ThemeProvider>
          <PlanCard
            ribbon={{
              text: 'Label',
            }}
          />
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot PlanCard with secondary ribbon', () => {
      const { container } = render(
        <ThemeProvider>
          <PlanCard
            ribbon={{
              text: 'Label',
              variant: 'secondary',
            }}
          />
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot PlanCard with tertiary ribbon', () => {
      const { container } = render(
        <ThemeProvider>
          <PlanCard
            ribbon={{
              text: 'Label',
              variant: 'tertiary',
            }}
          />
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot default PlanCard with Content', () => {
      const { container } = render(
        <ThemeProvider>
          <PlanCard>
            <PlanCard.Content
              title="Gympass Black for employees with Buddha Spa + Reebook included"
              price="U$ 99.90"
              period="/month"
            />
          </PlanCard>
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });

    it('should match snapshot variant PlanCard with Content', () => {
      const { container } = render(
        <ThemeProvider>
          <PlanCard variant="secondary">
            <PlanCard.Content
              title="Gympass Black for employees with Buddha Spa + Reebook included"
              price="U$ 99.90"
              period="/month"
            />
          </PlanCard>
        </ThemeProvider>,
      );
      expect(container).toMatchSnapshot();
    });
  });
});
