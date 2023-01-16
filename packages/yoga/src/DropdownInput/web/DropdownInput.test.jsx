import React from 'react';
import { render } from '@testing-library/react';

import { FlagsIcons } from '@gympass/yoga-icons';
import { ThemeProvider, DropdownInput } from '../..';

describe('<DropdownInput />', () => {
  it.only('should match snapshot', () => {
    const { container } = render(
      <DropdownInput
        placeholder="Company Name"
        selectedCountry={{
          icon: FlagsIcons.FlagBrazil,
          name: 'Brazil',
          id: 'BR',
        }}
      />,
      { wrapper: ThemeProvider },
    );

    expect(container).toMatchSnapshot();
  });
});
