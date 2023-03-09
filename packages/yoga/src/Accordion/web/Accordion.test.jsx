import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import {
  fontSizes,
  fontWeights,
  spacing,
} from '@gympass/yoga-tokens/src/global';
import { Text, Button } from '@gympass/yoga';
import { ThemeProvider } from '../..';

import Accordion from '.';

describe('<Accordion />', () => {
  afterEach(cleanup);

  describe('should correctly render', () => {
    it('the default version', () => {
      const { container } = render(
        <ThemeProvider>
          <Accordion title="Default" expanded>
            <Accordion.Content>
              <Text>Content</Text>
            </Accordion.Content>
          </Accordion>
        </ThemeProvider>,
      );

      expect(screen.getByText('Default')).toBeInTheDocument();

      expect(screen.getByText('Default')).toHaveStyle({
        fontSize: `${fontSizes.medium}px`,
        fontWeight: fontWeights.medium,
      });

      expect(screen.getByRole('button')).toHaveStyle({
        padding: `${spacing.large}px ${spacing.medium}px`,
      });

      expect(container.firstChild).toMatchSnapshot();
    });

    it('the small version', () => {
      const { container } = render(
        <ThemeProvider>
          <Accordion.Small title="Small">
            <Accordion.Content>
              <Text>Content</Text>
            </Accordion.Content>
          </Accordion.Small>
        </ThemeProvider>,
      );

      expect(screen.getByText('Small')).toBeInTheDocument();

      expect(screen.getByText('Small')).toHaveStyle({
        fontSize: `${fontSizes.small}px`,
        fontWeight: fontWeights.regular,
      });

      expect(screen.getByRole('button')).toHaveStyle({
        padding: `${spacing.small}px ${spacing.medium}px`,
      });

      expect(container.firstChild).toMatchSnapshot();
    });

    it('the default version with subtitle', () => {
      const { container } = render(
        <ThemeProvider>
          <Accordion title="Default" subtitle="default with subtitle">
            <Accordion.Content>
              <Text>Content</Text>
            </Accordion.Content>
          </Accordion>
        </ThemeProvider>,
      );

      expect(screen.getByText('Default')).toBeInTheDocument();
      expect(screen.getByText('default with subtitle')).toBeInTheDocument();

      expect(screen.getByText('Default')).toHaveStyle({
        fontSize: `${fontSizes.medium}px`,
        fontWeight: fontWeights.medium,
      });

      expect(screen.getByRole('button')).toHaveStyle({
        padding: `${spacing.large}px ${spacing.medium}px`,
      });

      expect(container.firstChild).toMatchSnapshot();
    });

    it('the small version with subtitle', () => {
      const { container } = render(
        <ThemeProvider>
          <Accordion.Small title="Small" subtitle="small with subtitle">
            <Accordion.Content>
              <Text>Content</Text>
            </Accordion.Content>
          </Accordion.Small>
        </ThemeProvider>,
      );

      expect(screen.getByText('Small')).toBeInTheDocument();
      expect(screen.getByText('small with subtitle')).toBeInTheDocument();

      expect(screen.getByText('Small')).toHaveStyle({
        fontSize: `${fontSizes.small}px`,
        fontWeight: fontWeights.regular,
      });

      expect(screen.getByRole('button')).toHaveStyle({
        padding: `${spacing.small}px ${spacing.medium}px`,
      });
      expect(container.firstChild).toMatchSnapshot();
    });

    it('the default version without side padding', () => {
      const { container } = render(
        <ThemeProvider>
          <Accordion title="Default" expanded hasHorizontalPadding={false}>
            <Accordion.Content>
              <Text>Content</Text>
            </Accordion.Content>
          </Accordion>
        </ThemeProvider>,
      );

      expect(screen.getByRole('button')).toHaveStyle({
        padding: `${spacing.large}px ${spacing.zero}px`,
      });

      expect(container.firstChild).toMatchSnapshot();
    });

    it('the small version without side padding', () => {
      const { container } = render(
        <ThemeProvider>
          <Accordion.Small title="Small" hasHorizontalPadding={false}>
            <Accordion.Content>
              <Text>Content</Text>
            </Accordion.Content>
          </Accordion.Small>
        </ThemeProvider>,
      );

      expect(screen.getByRole('button')).toHaveStyle({
        padding: `${spacing.small}px ${spacing.zero}px`,
      });

      expect(container.firstChild).toMatchSnapshot();
    });
  });

  it('should have className when passed as props', () => {
    render(
      <ThemeProvider>
        <Accordion title="Title">
          <Accordion.Content
            className="className-as-props"
            data-testid="accordion-content"
          >
            <Text>Content</Text>

            <Button small inverted>
              Small button
            </Button>
          </Accordion.Content>
        </Accordion>
      </ThemeProvider>,
    );

    expect(screen.getByTestId('accordion-content')).toHaveClass(
      'className-as-props',
    );
  });
});
