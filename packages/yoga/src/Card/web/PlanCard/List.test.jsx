import React from 'react';
import { render, screen } from '@testing-library/react';
import ThemeProvider from '../../../Theme';
import { ListItem } from './List';

const text = '2.900 gyms and studios';

function setup(props) {
  render(
    <ThemeProvider>
      <ListItem text={text} {...props} />
    </ThemeProvider>,
  );
}

describe('<ListItem />', () => {
  it('should display text truncated', () => {
    setup();

    expect(screen.getByText(text)).toMatchSnapshot();
  });

  it('should not display text truncated when truncate prop is false', () => {
    setup({ truncate: false });

    expect(screen.getByText(text)).toMatchSnapshot();
  });

  it('should display children element', () => {
    setup({ children: <ul /> });

    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
