import React from 'react';
import { render } from '@testing-library/react';

import { ThemeProvider, Feedback } from '../..';

function renderWithTheme(ui) {
  return render(ui, { wrapper: ThemeProvider });
}

const title = 'Welcome to Yoga';
const description = 'Enjoy your membership!';

describe('<Feedback />', () => {
  it('should render the title and description', () => {
    const { getByText } = renderWithTheme(
      <Feedback variant="success" title={title} description={description} />,
    );

    expect(getByText(title)).toBeTruthy();
    expect(getByText(description)).toBeTruthy();
  });

  it('should render the title children', () => {
    const { getByRole } = renderWithTheme(
      <Feedback variant="success" description="Enjoy your membership!">
        <Feedback.Title as="h1">{title}</Feedback.Title>
      </Feedback>,
    );

    expect(getByRole('heading', { name: title })).toBeTruthy();
  });

  it('should render the buttons', () => {
    const { getByRole } = renderWithTheme(
      <Feedback variant="success" title={title} description={description}>
        <Feedback.PrimaryButton>Ok</Feedback.PrimaryButton>
        <Feedback.SecondaryButton>Cancel</Feedback.SecondaryButton>
      </Feedback>,
    );

    expect(getByRole('button', { name: 'Ok' })).toBeTruthy();
    expect(getByRole('button', { name: 'Cancel' })).toBeTruthy();
  });

  it('should render the icon for success variant', () => {
    const { getByTestId } = renderWithTheme(
      <Feedback variant="success" title={title} description={description} />,
    );

    expect(getByTestId('feedback-icon')).toMatchSnapshot();
  });

  it('should render the icon for informative variant', () => {
    const { getByTestId } = renderWithTheme(
      <Feedback
        variant="informative"
        title={title}
        description={description}
      />,
    );

    expect(getByTestId('feedback-icon')).toMatchSnapshot();
  });

  it('should render the icon for attention variant', () => {
    const { getByTestId } = renderWithTheme(
      <Feedback variant="attention" title={title} description={description} />,
    );

    expect(getByTestId('feedback-icon')).toMatchSnapshot();
  });
});
