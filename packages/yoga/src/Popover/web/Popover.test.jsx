import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Info } from '@gympass/yoga-icons';

import { ThemeProvider, Popover } from '../..';

describe('<Popover />', () => {
  it('should match snapshot when hover is false', () => {
    const { container, getByRole } = render(
      <ThemeProvider>
        <Popover
          title="Making wellbeing universal"
          description="Try click on the button. Your new favorite activity could be arround the corner."
          width={265}
        >
          <Info width={26} height={26} />
        </Popover>
      </ThemeProvider>,
    );

    const popoverButton = getByRole('button');

    fireEvent.click(popoverButton);

    expect(container).toMatchSnapshot();
  });
  it('should match snapshot when hover is true', () => {
    const { container, getByRole } = render(
      <ThemeProvider>
        <Popover
          title="Making wellbeing universal"
          description="Try moving to another spot. Your new favorite activity could be arround the corner."
          width={265}
          hover
        >
          <Info width={26} height={26} />
        </Popover>
      </ThemeProvider>,
    );

    const popoverButton = getByRole('button');

    fireEvent.mouseOver(popoverButton);

    expect(container).toMatchSnapshot();
  });
});
