import React from 'react';
import { render } from '@testing-library/react';
import { Info } from '@gympass/yoga-icons';

import { ThemeProvider, Popover } from '../..';

describe('<Popover />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <ThemeProvider>
        <Popover
          title="Making wellbeing universal"
          description="Try moving to another spot. Your new favorite activity could be arround the corner."
          width={265}
        >
          <Info width={26} height={26} />
        </Popover>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
